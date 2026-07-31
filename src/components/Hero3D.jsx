import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useIsMobile } from '../hooks/useIsMobile';

function fibonacciSphere(count, radius) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const y = count === 1 ? 0 : 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * 2.39996; // golden angle
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius
      )
    );
  }
  return points;
}

function LineSegment({ a, b, color, opacity }) {
  const positions = useMemo(
    () => new Float32Array([a.x, a.y, a.z, b.x, b.y, b.z]),
    [a, b]
  );
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
}

const PALETTES = {
  dark: {
    core: '#00D98B',
    satellite: '#FF7A59',
    coreLine: '#00D98B',
    neighborLine: '#FF7A59',
    pulse: '#EAF5F0',
    points: '#EAF5F0',
    pointsOpacity: 0.5,
  },
  light: {
    core: '#00875F',
    satellite: '#E85A3D',
    coreLine: '#00875F',
    neighborLine: '#E85A3D',
    pulse: '#0F231C',
    points: '#2E3B36',
    pointsOpacity: 0.65,
  },
};

function NetworkScene({ scrollProgress, nodeCount, pulseCount, palette }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const pointsRef = useRef(null);
  const satelliteRefs = useRef([]);
  const pulseRefs = useRef([]);
  const pulseData = useRef(
    Array.from({ length: pulseCount }, () => ({
      targetIndex: Math.floor(Math.random() * nodeCount),
      t: Math.random(),
    }))
  );
  const camPos = useRef({ x: 0, y: 0 });
  const clock = useRef(0);
  const { pointer } = useThree();

  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const satellitePositions = useMemo(
    () => fibonacciSphere(nodeCount, 2.2),
    [nodeCount]
  );

  const coreLines = useMemo(
    () => satellitePositions.map((p) => [new THREE.Vector3(0, 0, 0), p]),
    [satellitePositions]
  );

  const neighborLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < satellitePositions.length; i++) {
      const a = satellitePositions[i];
      const b = satellitePositions[(i + 3) % satellitePositions.length];
      if (a.distanceTo(b) < 3.4) lines.push([a, b]);
    }
    return lines;
  }, [satellitePositions]);

  const orbitPositions = useMemo(() => {
    const count = 60;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) + 2.4;
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (reduceMotion) {
      if (groupRef.current) groupRef.current.rotation.y = 0.6;
      state.camera.lookAt(2.4, 0, 0);
      return;
    }

    clock.current += delta;
    const scrollOffset = scrollProgress.current * Math.PI * 0.6;

    if (groupRef.current) {
      groupRef.current.rotation.y = clock.current * 0.25 + scrollOffset;
      groupRef.current.rotation.x = Math.sin(clock.current * 0.1) * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -clock.current * 0.5;
      coreRef.current.scale.setScalar(1 + Math.sin(clock.current * 0.75) * 0.06);
    }
    satelliteRefs.current.forEach((s, i) => {
      if (!s) return;
      s.rotation.y = clock.current * 0.4 + i;
      s.rotation.x = clock.current * 0.25 + i;
    });
    pulseRefs.current.forEach((p, i) => {
      if (!p) return;
      const data = pulseData.current[i];
      data.t += delta * 0.6;
      if (data.t >= 1) {
        data.t = 0;
        data.targetIndex = Math.floor(Math.random() * nodeCount);
      }
      const target = satellitePositions[data.targetIndex];
      p.position.set(target.x * data.t, target.y * data.t, target.z * data.t);
    });
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -clock.current * 0.075;
    }

    camPos.current.x += (pointer.x * 0.6 - camPos.current.x) * 0.03;
    camPos.current.y += (-pointer.y * 0.4 - camPos.current.y) * 0.03;
    state.camera.position.x += (camPos.current.x - state.camera.position.x) * 0.03;
    state.camera.position.y += (camPos.current.y - state.camera.position.y) * 0.03;
    state.camera.lookAt(2.4, 0, 0);
  });

  return (
    <>
      <group ref={groupRef} position={[2.4, 0.1, 0]}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[0.42, 1]} />
          <meshBasicMaterial color={palette.core} wireframe transparent opacity={0.9} />
        </mesh>

        {satellitePositions.map((pos, i) => (
          <mesh
            key={`sat-${i}`}
            position={pos}
            ref={(el) => (satelliteRefs.current[i] = el)}
          >
            <octahedronGeometry args={[0.16, 0]} />
            <meshBasicMaterial color={palette.satellite} wireframe transparent opacity={0.8} />
          </mesh>
        ))}

        {coreLines.map(([a, b], i) => (
          <LineSegment key={`core-line-${i}`} a={a} b={b} color={palette.coreLine} opacity={0.25} />
        ))}

        {neighborLines.map(([a, b], i) => (
          <LineSegment key={`neighbor-line-${i}`} a={a} b={b} color={palette.neighborLine} opacity={0.15} />
        ))}

        {Array.from({ length: pulseCount }).map((_, i) => (
          <mesh key={`pulse-${i}`} ref={(el) => (pulseRefs.current[i] = el)}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color={palette.pulse} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[orbitPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={palette.points} size={0.035} transparent opacity={palette.pointsOpacity} />
      </points>
    </>
  );
}

export default function Hero3D({ scrollProgress, theme = 'dark' }) {
  const isMobile = useIsMobile();
  const nodeCount = isMobile ? 6 : 12;
  const pulseCount = isMobile ? 2 : 5;
  const palette = PALETTES[theme] ?? PALETTES.dark;
  const bloomEnabled = !isMobile && theme === 'dark';

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: !isMobile }}
      dpr={[1, isMobile ? 1.5 : 2]}
    >
      <NetworkScene
        scrollProgress={scrollProgress}
        nodeCount={nodeCount}
        pulseCount={pulseCount}
        palette={palette}
      />
      {bloomEnabled && (
        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            intensity={0.7}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
