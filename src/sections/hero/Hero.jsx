import Reveal from '../../components/Reveal.jsx';
import Icon from '../../components/Icon.jsx';
import MediaSlot from '../../components/MediaSlot.jsx';
import { media } from '../../media.js';
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
            <div className="product-card__visual">
              {media.heroStudio?.src ? (
                <MediaSlot slot="heroStudio" frame="plain" ratio="auto" className="product-card__media" />
              ) : (
                <div className="mini-chat" aria-hidden="true">
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
              )}
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
            <div className="product-card__visual">
              {media.heroNovel?.src ? (
                <MediaSlot slot="heroNovel" frame="plain" ratio="auto" className="product-card__media" />
              ) : (
                <div className="mini-fan" aria-hidden="true">
                  <span className="mini-fan__card mini-fan__card--1" style={{ '--h': 300 }} />
                  <span className="mini-fan__card mini-fan__card--2" style={{ '--h': 265 }} />
                  <span className="mini-fan__card mini-fan__card--3" style={{ '--h': 330 }} />
                </div>
              )}
            </div>
            <div className="product-card__body">
              <span className="badge badge--novel">Ebook · Original story</span>
              <h2>LLD-Novel</h2>
              <p>
                A story that began as a roleplay and was carefully rewritten — read with animated text, character
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
