import SectionHeading from '../../components/SectionHeading.jsx';
import Split from '../../components/Split.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import Button from '../../components/Button.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { links } from '../../config.js';

export default function NovelStore() {
  return (
    <section className="section section--tight" aria-labelledby="novel-store">
      <div className="container">
        <SectionHeading
          id="novel-store"
          eyebrow="The store"
          title="A store that feels like a shop counter."
          lead="Browse the stories, read the author’s posts, and get in touch if anything goes wrong."
        />

        <div className="novel-store">
          <Split media={<MediaSlot slot="novelStoreHover" frame="window" label="LLD-Novel store" ratio="16 / 10" />}>
            <h3>
              <Icon name="store" size={26} /> Store
            </h3>
            <p>
              Products sit on the counter like they would in a real shop, and they react to you: move your mouse over
              one and its image changes. It’s a small touch to make browsing more interesting.
            </p>
          </Split>

          <Split
            reverse
            media={<MediaSlot slot="novelPosts" frame="window" label="Posts — news and polls" ratio="16 / 10" />}
          >
            <h3>
              <Icon name="news" size={26} /> Posts
            </h3>
            <p>
              This is where I, the author, share news and run polls. Should the story go this way or that? Tell me
              what you want — your votes are feedback I actually read.
            </p>
          </Split>

          <Reveal className="novel-contact">
            <span className="icon-tile">
              <Icon name="help" />
            </span>
            <div>
              <h3>Contact</h3>
              <p>Something not working, or a problem with an order? The built-in contact system is how you reach me.</p>
            </div>
            <Button href={links.novelStore} variant="ghost" icon="arrow">
              Visit the store
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
