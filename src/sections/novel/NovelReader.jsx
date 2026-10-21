import Split from '../../components/Split.jsx';
import Button from '../../components/Button.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { links } from '../../config.js';

export default function NovelReader() {
  return (
    <section id="novel-reader" className="section section--tight" aria-labelledby="novel-reader-title">
      <div className="container">
        <Split media={<MediaSlot slot="novelReader" frame="window" label="LLD Reader — your gallery" ratio="16 / 10" />}>
          <p className="eyebrow">LLD Reader · Free</p>
          <h2 id="novel-reader-title">The Reader is free. Always.</h2>
          <p>
            Download the LLD Reader at no cost. It’s also your gallery: every product you’ve paid for and every file
            you’ve imported lives in one place. You can remove items whenever you like — though who would want to
            delete what they own?
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={20} />
              Free to download
            </li>
            <li>
              <Icon name="check" size={20} />
              A gallery of everything you’ve paid for or imported
            </li>
            <li>
              <Icon name="check" size={20} />
              Remove anything, any time
            </li>
          </ul>
          <div className="novel-actions">
            <Button href={links.novelReader} variant="novel" icon="arrow">
              Get the free Reader
            </Button>
          </div>
        </Split>
      </div>
    </section>
  );
}
