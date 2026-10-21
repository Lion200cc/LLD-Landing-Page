import Split from '../../components/Split.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';

export default function NovelCharacters() {
  return (
    <section className="section section--tight" aria-labelledby="novel-characters">
      <div className="container">
        <Split
          reverse
          media={
            <MediaSlot
              slot="novelCharacterCard"
              frame="book"
              label="A character card turning over"
              ratio="4 / 5"
              className="novel-card-slot"
            />
          }
        >
          <p className="eyebrow">Character Section</p>
          <h2 id="novel-characters">Meet the characters — front and back.</h2>
          <p>
            A special Character Section shows each character as a card with their art. Turn the card over and the
            other side holds their details, laid out in the character’s own art style.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={20} />
              Character art on the front
            </li>
            <li>
              <Icon name="check" size={20} />
              Their details on the back
            </li>
            <li>
              <Icon name="check" size={20} />
              Styled to match the character’s art style
            </li>
          </ul>
        </Split>
      </div>
    </section>
  );
}
