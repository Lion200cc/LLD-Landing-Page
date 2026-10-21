import { useEffect, useRef, useState } from 'react';
import { media } from '../media.js';
import Icon from './Icon.jsx';

const isVideo = (src) => /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src);

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduce;
}

// Plays only while on screen, so a page with many clips stays light.
function SlotVideo({ item, reduce }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="media-slot__media"
      src={item.src}
      poster={item.poster}
      aria-label={item.alt || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      controls={reduce}
    />
  );
}

/**
 * A spot on the page for one of your recordings or images.
 * `slot` is a key from src/media.js. `label` says what belongs here.
 */
export default function MediaSlot({
  slot,
  label,
  ratio = '16 / 9',
  frame = 'window', // window | book | plain
  className = '',
}) {
  const item = media[slot];
  const reduce = usePrefersReducedMotion();
  const filled = Boolean(item && item.src);

  return (
    <figure
      className={`media-slot media-slot--${frame} ${filled ? 'is-filled' : 'is-empty'} ${className}`.trim()}
      data-slot={slot}
    >
      {frame === 'window' && (
        <div className="media-slot__bar" aria-hidden="true">
          <i /> <i /> <i />
          {label && <span>{label}</span>}
        </div>
      )}
      <div className="media-slot__stage" style={{ aspectRatio: ratio }}>
        {filled ? (
          isVideo(item.src) ? (
            <SlotVideo item={item} reduce={reduce} />
          ) : (
            <img className="media-slot__media" src={item.src} alt={item.alt || ''} loading="lazy" />
          )
        ) : (
          <div
            className="media-slot__empty"
            role="img"
            aria-label={`${label || 'Preview'} — coming soon`}
          >
            <Icon name={frame === 'book' ? 'image' : 'sparkle'} size={30} />
            <strong>Preview coming soon</strong>
            {label && <span>{label}</span>}
          </div>
        )}
      </div>
    </figure>
  );
}
