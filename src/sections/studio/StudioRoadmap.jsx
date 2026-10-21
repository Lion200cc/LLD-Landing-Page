import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import { roadmap, statusLabel } from './content.js';

export default function StudioRoadmap() {
  return (
    <section id="studio-roadmap" className="section section--tight" aria-labelledby="studio-roadmap-title">
      <div className="container studio-roadmap-layout">
        <SectionHeading
          id="studio-roadmap-title"
          eyebrow="Roadmap"
          title="Where LLD-Studio is, and where it’s heading."
          lead="An honest look: what’s finished, what’s being worked on, and what comes after."
        />
        <ol className="studio-roadmap">
          {roadmap.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className={`studio-roadmap__item is-${item.status}`}>
              <span className={`badge badge--${item.status === 'planned' ? 'soon' : item.status}`}>
                {statusLabel[item.status]}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
