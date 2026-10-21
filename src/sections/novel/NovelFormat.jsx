import Split from '../../components/Split.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { effects, howItWorks } from './content.js';

export default function NovelFormat() {
  return (
    <section className="section section--tight" aria-labelledby="novel-format">
      <div className="container">
        <Split media={<MediaSlot slot="novelFormat" frame="book" label="Animated text in the Reader" ratio="4 / 3" />}>
          <p className="eyebrow">The format</p>
          <h2 id="novel-format">Not a plain PDF. A book that moves.</h2>
          <p>
            Stories are published in LLD’s own ebook format. Open one in the Reader and the page comes alive — text
            can animate, change color, turn bold or italic, and sit on top of backgrounds and images.
          </p>
          <ul className="novel-effects" aria-label="What the format can do">
            {effects.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Split>

        <ol className="novel-steps">
          {howItWorks.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="novel-steps__item">
              <span className="novel-steps__num">{i + 1}</span>
              <span className="novel-steps__icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
