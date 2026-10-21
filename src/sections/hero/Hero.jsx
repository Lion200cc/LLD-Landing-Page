import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import ArtPlaceholder from '../../components/ArtPlaceholder.jsx';
import './hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <Reveal className="hero__intro">
          <p className="eyebrow">LLD · two products, one imagination</p>
          <h1>
            Stories you can <em className="hero__build">build</em>,
            <br />
            and stories you can <em className="hero__read">read</em>.
          </h1>
          <p className="lead">
            <strong>LLD-Studio</strong> is a roleplay playground for people who love customizing their own Ollama
            models. <strong>LLD-Novel</strong> is an original illustrated story with an ebook format and a Reader
            of its own.
          </p>
        </Reveal>

        <div className="hero__products">
          <Reveal as="a" href="#studio" className="product-card product-card--studio" delay={100}>
            <div className="product-card__visual" aria-hidden="true">
              <div className="mini-chat">
                <span className="mini-chat__bubble mini-chat__bubble--a">
                  <i /> <b />
                </span>
                <span className="mini-chat__bubble mini-chat__bubble--b">
                  <i /> <b />
                </span>
                <span className="mini-chat__bubble mini-chat__bubble--c">
                  <i /> <b />
                </span>
              </div>
            </div>
            <div className="product-card__body">
              <span className="badge">Playground · Ollama</span>
              <h2>LLD-Studio</h2>
              <p>
                Create characters, lore, sessions and rooms — then roleplay with memory, knowledge gathering and
                summaries, running on your own models.
              </p>
              <span className="product-card__cta">
                Explore Studio <Icon name="arrow" size={18} />
              </span>
            </div>
          </Reveal>

          <Reveal as="a" href="#novel" className="product-card product-card--novel" delay={220}>
            <div className="product-card__visual" aria-hidden="true">
              <div className="mini-fan">
                <ArtPlaceholder hue={300} variant={0} className="mini-fan__card mini-fan__card--1" />
                <ArtPlaceholder hue={265} variant={1} className="mini-fan__card mini-fan__card--2" />
                <ArtPlaceholder hue={330} variant={2} className="mini-fan__card mini-fan__card--3" />
              </div>
            </div>
            <div className="product-card__body">
              <span className="badge badge--novel">Ebook · Original story</span>
              <h2>LLD-Novel</h2>
              <p>
                A story that began as a roleplay and was rewritten by hand — read with animated text, character
                cards and art, in a free Reader.
              </p>
              <span className="product-card__cta">
                Explore Novel <Icon name="arrow" size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
