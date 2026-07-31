import Reveal from './Reveal';

const services = [
  {
    num: '01',
    title: 'Sistemas de gestión',
    text: 'Inventario, ventas, clientes y reportes en un solo lugar, adaptado a tu flujo de trabajo real.',
    stack: ['React', 'Laravel', 'MySQL'],
  },
  {
    num: '02',
    title: 'Punto de venta (POS)',
    text: 'Facturación, cobros y control de caja pensado para el ritmo del mostrador, no para una demo.',
    stack: ['Laravel', 'MySQL', 'Impresión térmica'],
  },
  {
    num: '03',
    title: 'Integraciones a medida',
    text: 'Conectamos tu sistema con bancos, financieras o proveedores externos sin procesos manuales.',
    stack: ['APIs REST', 'Webhooks', 'OAuth'],
  },
  {
    num: '04',
    title: 'Automatización de procesos',
    text: 'Eliminamos tareas manuales repetitivas: notificaciones, reportes y flujos sin intervención humana.',
    stack: ['Jobs programados', 'Webhooks', 'Notificaciones'],
  },
  {
    num: '05',
    title: 'Consultoría tecnológica',
    text: 'Te ayudamos a elegir el stack, la arquitectura y el plan correcto antes de invertir en desarrollo.',
    stack: ['Arquitectura', 'Roadmap', 'Elección de stack'],
  },
  {
    num: '06',
    title: 'Soporte y mantenimiento',
    text: 'Puesta en producción, capacitación de tu equipo y acompañamiento continuo después de la entrega.',
    stack: ['Monitoreo', 'Deploys', 'Documentación'],
  },
];

export default function Servicios() {
  return (
    <section id="servicios">
      <Reveal className="section-head">
        <span className="section-tag">// Qué hacemos</span>
        <h2>Todo lo que tu operación necesita</h2>
        <p>No vendemos un producto cerrado. Construimos exactamente lo que tu negocio necesita.</p>
      </Reveal>
      <Reveal as="div" className="service-rows" stagger>
        {services.map((s) => (
          <div className="service-row" key={s.num}>
            <span className="service-row__num mono">{s.num}</span>
            <h3 className="service-row__title">{s.title}</h3>
            <p className="service-row__text">{s.text}</p>
            <div className="service-row__stack">
              {s.stack.map((tech) => (
                <span className="badge" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
