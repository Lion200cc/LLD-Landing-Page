import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import { links } from '../config.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__cta">
          <div>
            <p className="eyebrow">Stay close</p>
            <h2>Questions, bugs, or just want to say hi?</h2>
            <p>
              The community space isn’t open yet — the Discord room hasn’t been created. When it is, the link
              will live right here.
            </p>
          </div>
          <div className="footer__buttons">
            <Button href={links.discord} variant="primary" icon="discord" soonHint="Not open yet">
              Join the Discord
            </Button>
            <Button href={links.contact} variant="ghost" icon="mail" soonHint="Soon">
              Contact
            </Button>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span className="brand__text">LLD</span>
            <p>Two products from one independent creator: a roleplay playground and an original story.</p>
          </div>

          <nav aria-label="Products">
            <h3>Products</h3>
            <a href="#studio">LLD-Studio</a>
            <a href="#novel">LLD-Novel</a>
            <a href="#novel-reader">LLD Reader</a>
          </nav>

          <nav aria-label="On this page">
            <h3>Good to know</h3>
            <a href="#studio-ollama">How Studio uses Ollama</a>
            <a href="#studio-roadmap">Studio roadmap</a>
            <a href="#novel-pricing">Novel pricing</a>
            <a href="#novel-honesty">About the art</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {year} LLD. All rights reserved.</p>
          <a href="#top" className="footer__top">
            Back to top <Icon name="arrow" size={16} className="rot-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
