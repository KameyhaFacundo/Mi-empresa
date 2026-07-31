export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>© {year} Kamex Soluciones</span>
      <span className="mono">Hecho a medida, no en serie.</span>
    </footer>
  );
}
