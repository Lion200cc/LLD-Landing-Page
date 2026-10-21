import Reveal from '../../components/Reveal.jsx';
import Button from '../../components/Button.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { links } from '../../config.js';

export default function NovelIntro() {
  return (
    <section className="section novel-intro" aria-labelledby="novel-title">
      <div className="container novel-intro__grid">
        <Reveal className="novel-intro__text">
          <p className="eyebrow">Product 02 · Original story &amp; ebook</p>
          <h2 id="novel-title">
            <span className="novel-gradient">LLD-Novel</span>
          </h2>
          <p className="novel-intro__tag">A story that began as a roleplay.</p>
          <p className="novel-intro__lead">
            LLD-Novel is my own story. It grew out of my roleplays with AI, and I carefully rewrote it — with AI as
            a helper — into something made to be read, with animated text, character cards and art.
          </p>
          <p className="novel-intro__status">
            <span className="badge badge--soon">First release: coming soon</span>
            The store is ready; the first story hasn’t been released yet.
          </p>
          <div className="novel-intro__actions">
            <Button href={links.novelStore} variant="novel" icon="store">
              Visit the store
            </Button>
            <Button href={links.novelReader} variant="ghost" icon="book">
              Get the free Reader
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="novel-intro__media">
          <MediaSlot slot="novelHero" frame="book" label="The story’s art" ratio="4 / 5" />
        </Reveal>
      </div>
    </section>
  );
}
