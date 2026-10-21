import Split from '../../components/Split.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';

export default function StudioImageStates() {
  return (
    <section className="section section--tight" aria-labelledby="studio-images">
      <div className="container">
        <Split
          reverse
          media={<MediaSlot slot="studioImageStates" label="Switching a character’s image state" ratio="4 / 3" />}
        >
          <p className="eyebrow">Image states</p>
          <h2 id="studio-images">A character is more than one picture.</h2>
          <p>
            Give a character multiple image states, and edit the images with the built-in image engine. Because that
            engine already handles states and editing, the next step is a page editor where every button and panel
            can be customized by you.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={20} />
              Multiple image states per character
            </li>
            <li>
              <Icon name="check" size={20} />
              Edit images with the image engine
            </li>
            <li>
              <Icon name="edit" size={20} className="is-progress" />
              <span>
                Page editor — customize every button and panel
                <small>In progress</small>
              </span>
            </li>
          </ul>
        </Split>
      </div>
    </section>
  );
}
