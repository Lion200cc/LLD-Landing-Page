import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';

export default function NovelHonesty() {
  return (
    <section id="novel-honesty" className="section section--tight" aria-labelledby="novel-honesty-title">
      <div className="container">
        <SectionHeading
          id="novel-honesty-title"
          eyebrow="Made openly"
          title="Two things I want you to know."
          lead="I’d rather you hear them from me than find out later."
        />

        <div className="novel-honesty">
          <Reveal className="card novel-honesty__card">
            <span className="icon-tile">
              <Icon name="edit" />
            </span>
            <h3>The story</h3>
            <p>
              LLD-Novel began as my own roleplay with AI. I carefully rewrote it, using AI as a helper, until it
              read like a story rather than a transcript.
            </p>
          </Reveal>
          <Reveal delay={100} className="card novel-honesty__card">
            <span className="icon-tile">
              <Icon name="sparkle" />
            </span>
            <h3>The art</h3>
            <p>
              The art is 100% AI-generated — and that doesn’t mean careless. I create each piece with care and check
              them one by one, because I know the difference between well made and lazy. My standards may not match
              yours, and that’s fair, but I work hard on every piece.
            </p>
          </Reveal>
        </div>

        <ul className="novel-art">
          {['novelArt1', 'novelArt2', 'novelArt3'].map((slot, i) => (
            <Reveal as="li" key={slot} delay={i * 90}>
              <MediaSlot slot={slot} frame="book" label="Sample art" ratio="3 / 4" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
