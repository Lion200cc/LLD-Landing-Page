import Reveal from '../../components/Reveal.jsx';
import Button from '../../components/Button.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { links } from '../../config.js';

export default function StudioIntro() {
  return (
    <section className="section studio-intro" aria-labelledby="studio-title">
      <div className="container studio-intro__grid">
        <Reveal className="studio-intro__text">
          <p className="eyebrow">Product 01 · Playground for Ollama</p>
          <h2 id="studio-title">
            <span className="studio-gradient">LLD-Studio</span>
          </h2>
          <p className="studio-intro__tag">Roleplay with the characters you made, on the models you shaped.</p>
          <p className="studio-intro__lead">
            A playground for people who run Ollama and love customizing their models. Create your own characters,
            give them lore and memory, and put them in a room together.
          </p>
          <div className="studio-intro__actions">
            <Button href={links.studioDownload} variant="studio" icon="arrow">
              Get LLD-Studio
            </Button>
            <Button href={links.studioTesters} variant="ghost" icon="flask">
              Become a tester
            </Button>
          </div>
          <ul className="studio-intro__tags" aria-label="Highlights">
            <li>Your own Ollama</li>
            <li>Memory</li>
            <li>Rooms &amp; group chat</li>
            <li>Lore</li>
            <li>Image states</li>
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <MediaSlot slot="studioHero" label="LLD-Studio in action" ratio="16 / 10" />
        </Reveal>
      </div>
    </section>
  );
}
