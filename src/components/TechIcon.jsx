import { getTechIcon } from '../lib/techIcons';

export default function TechIcon({ label }) {
  const icon = getTechIcon(label);
  if (!icon) return null;

  return (
    <svg
      className="tech-icon"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
