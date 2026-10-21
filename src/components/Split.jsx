import Reveal from './Reveal.jsx';

// Text on one side, a MediaSlot on the other. Stacks on small screens.
export default function Split({ media, reverse = false, className = '', children }) {
  return (
    <div className={`split ${reverse ? 'split--reverse' : ''} ${className}`.trim()}>
      <Reveal className="split__text">{children}</Reveal>
      <Reveal className="split__media" delay={120}>
        {media}
      </Reveal>
    </div>
  );
}
