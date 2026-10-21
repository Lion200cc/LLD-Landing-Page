import Split from '../../components/Split.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';

export default function StudioRoom() {
  return (
    <section className="section section--tight" aria-labelledby="studio-room">
      <div className="container">
        <Split media={<MediaSlot slot="studioRoom" label="A room with several characters" ratio="4 / 3" />}>
          <p className="eyebrow">Rooms &amp; group chat</p>
          <h2 id="studio-room">From one character to a whole room.</h2>
          <p>
            The first version of LLD-Studio could only send your chat to a single character. That wasn’t enough, so
            it grew: now you can gather characters in a room, take a role yourself, and let memory, gathered
            knowledge and summaries follow the scene.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={20} />
              Several characters in one room
            </li>
            <li>
              <Icon name="check" size={20} />
              Take Role — step into the story yourself
            </li>
            <li>
              <Icon name="check" size={20} />
              Memory, knowledge and summaries that follow the scene
            </li>
          </ul>
        </Split>
      </div>
    </section>
  );
}
