import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import { accountCards } from './content.js';

export default function NovelAccount() {
  return (
    <section className="section section--tight" aria-labelledby="novel-account">
      <div className="container">
        <SectionHeading
          id="novel-account"
          eyebrow="Accounts &amp; security"
          title="Your account stays yours."
          lead="Verification by email runs through almost every step, so changes to your account are really you."
        />
        <ul className="novel-grid">
          {accountCards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className="card novel-account__card">
              <span className="icon-tile">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
