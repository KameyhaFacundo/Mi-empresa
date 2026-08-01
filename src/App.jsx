import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Proceso from './components/Proceso';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './lib/translations';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} t={t.nav} />
      <Hero theme={theme} t={t.hero} />
      <Marquee t={t.marquee} />
      <Nosotros t={t.nosotros} />
      <Servicios t={t.servicios} />
      <Proceso t={t.proceso} />
      <Proyectos t={t.proyectos} />
      <Contacto t={t.contacto} />
      <Footer t={t.footer} />
      <WhatsAppFloat />
    </>
  );
}

export default App;
