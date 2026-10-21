import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';

const LINKS = [
  { id: 'studio', label: 'LLD-Studio', href: '#studio' },
  { id: 'novel', label: 'LLD-Novel', href: '#novel' },
  { id: 'studio-roadmap', label: 'Roadmap', href: '#studio-roadmap' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever product is on screen
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const targets = ['studio', 'novel']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
          else setActive((cur) => (cur === e.target.id ? null : cur));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label="LLD — back to top" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="28" height="28">
              <path
                d="M20 14v28h11M37 14v28h11"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="brand__text">LLD</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'menu'} size={24} />
        </button>

        <nav id="site-menu" className="nav__links" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={active === l.id ? 'is-active' : undefined}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
