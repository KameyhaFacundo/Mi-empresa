import { useEffect, useRef, useState } from 'react';

function IconGlobe() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const LANG_OPTIONS = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

export default function Nav({ theme, toggleTheme, lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [langOpen]);

  return (
    <nav>
      <a href="#" className="logo">Kamex Solutions</a>

      <div className="nav-links">
        {t.links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>

      <div className="nav-right">
        <div className="lang-switch" ref={langRef}>
          <button
            type="button"
            className="lang-switch__button"
            onClick={() => setLangOpen((v) => !v)}
            aria-label={t.langLabel}
            aria-expanded={langOpen}
          >
            <IconGlobe />
            <span>{lang.toUpperCase()}</span>
            <IconChevron />
          </button>
          {langOpen && (
            <div className="lang-switch__menu">
              {LANG_OPTIONS.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  className={`lang-switch__option${option.code === lang ? ' active' : ''}`}
                  onClick={() => {
                    setLang(option.code);
                    setLangOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.toLight : t.toDark}
          title={theme === 'dark' ? t.toLight : t.toDark}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <a href="#contacto" className="nav-cta">{t.cta}</a>
        <button
          type="button"
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        {t.links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="btn-primary" onClick={() => setOpen(false)}>
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
