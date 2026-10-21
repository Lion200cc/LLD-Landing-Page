import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { creations, creationLayers } from './content.js';

export default function StudioCreate() {
  return (
    <section className="section section--tight" aria-labelledby="studio-create">
      <div className="container">
        <SectionHeading
          id="studio-create"
          eyebrow="Create"
          title="Five things to create. Each one goes deep."
          lead="Characters, lore, sessions, rooms and situations all have the same depth — so whatever you build, you can keep refining it."
        />

        <ul className="studio-grid studio-grid--5">
          {creations.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 70} className="card studio-create__item">
              <span className="icon-tile">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="studio-layers">
          <p className="studio-layers__title">…and every one of them has its own</p>
          <ul>
            {creationLayers.map((l) => (
              <li key={l.title}>
                <Icon name={l.icon} size={20} />
                <span>
                  <strong>{l.title}</strong>
                  <small>{l.text}</small>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="studio-create__media">
          <MediaSlot slot="studioCreate" label="Creating a character, lore, room…" ratio="21 / 9" />
        </Reveal>
      </div>
    </section>
  );
}
