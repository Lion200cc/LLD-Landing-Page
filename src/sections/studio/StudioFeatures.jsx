import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import { features } from './content.js';

export default function StudioFeatures() {
  return (
    <section className="section section--tight" aria-labelledby="studio-features">
      <div className="container">
        <SectionHeading
          id="studio-features"
          eyebrow="What’s inside"
          title="Everything a roleplay needs, in one place."
          lead="Characters that remember, worlds that hold together, and scenes with more than one voice."
        />
        <ul className="studio-grid studio-grid--4">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 4) * 80} className="card studio-feature">
              <span className="icon-tile">
                <Icon name={f.icon} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
