import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, lead, align = 'left', id }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
