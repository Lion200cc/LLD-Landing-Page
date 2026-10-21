import Reveal from '../../components/Reveal.jsx';
import Button from '../../components/Button.jsx';
import Icon from '../../components/Icon.jsx';
import { links } from '../../config.js';

export default function StudioTesters() {
  return (
    <section className="section section--tight" aria-labelledby="studio-testers">
      <div className="container">
        <Reveal className="studio-testers">
          <div>
            <p className="eyebrow">Help wanted</p>
            <h2 id="studio-testers">Help me test it like a real user.</h2>
            <p>
              Everything above is built. What I’m short on is time, and testers, to use it the way you would. Making
              a character, lore, a session, a room and a situation — each with its own details, gathered knowledge
              and image states — takes a while, and Ollama needs setting up on the first run. If you enjoy that kind
              of tinkering, I’d love your eyes on it.
            </p>
            <div className="studio-testers__actions">
              <Button href={links.studioTesters} variant="studio" icon="flask">
                Become a tester
              </Button>
              <Button href={links.discord} variant="ghost" icon="discord" soonHint="Not open yet">
                Discord
              </Button>
            </div>
          </div>
          <ul className="check-list studio-testers__list">
            <li>
              <Icon name="check" size={20} />
              <span>
                Create a few characters, lore and rooms
                <small>See how the creation flow feels from scratch</small>
              </span>
            </li>
            <li>
              <Icon name="check" size={20} />
              <span>
                Go through the first-time Ollama setup
                <small>Tell me where it’s confusing</small>
              </span>
            </li>
            <li>
              <Icon name="check" size={20} />
              <span>
                Play, break things, and report back
                <small>Every rough edge you find helps</small>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
