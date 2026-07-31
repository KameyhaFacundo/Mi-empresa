import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Proceso from './components/Proceso';
import CasoReal from './components/CasoReal';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <CustomCursor />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Marquee />
      <Nosotros />
      <Servicios />
      <Proceso />
      <CasoReal />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
