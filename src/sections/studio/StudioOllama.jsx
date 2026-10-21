import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { connections, promises } from './content.js';

export default function StudioOllama() {
  return (
    <section id="studio-ollama" className="section section--tight" aria-labelledby="studio-ollama-title">
      <div className="container">
        <SectionHeading
          id="studio-ollama-title"
          eyebrow="Ollama"
          title="Built around your Ollama. Careful with your models."
          lead="LLD-Studio connects to the Ollama you already use, and it keeps its hands off the models you rely on."
        />

        <div className="studio-ollama">
          <div className="studio-ollama__col">
            <Reveal>
              <h3 className="studio-subtitle">Connect it your way</h3>
              <div className="studio-ollama__options">
                {connections.map((c) => (
                  <div key={c.title} className="card studio-option">
                    <span className="icon-tile">
                      <Icon name={c.icon} />
                    </span>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="studio-subtitle">Your models stay yours</h3>
              <ul className="check-list studio-promises">
                {promises.map((p) => (
                  <li key={p.text} className={p.yes ? '' : 'is-no'}>
                    <Icon name={p.yes ? 'check' : 'x'} size={20} />
                    {p.text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="studio-callout">
              <Icon name="flask" size={22} />
              <p>
                <strong>First launch:</strong> a few parts need to be assigned the first time — like which Ollama
                connection to use. It’s a one-time setup for most people.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="studio-ollama__media">
            <MediaSlot slot="studioOllama" label="Choosing This PC or another server" ratio="4 / 5" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
