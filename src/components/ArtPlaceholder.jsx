/**
 * Stand-in artwork. Pass `src` to show your real image; without it you get an
 * abstract glow in the chosen `hue` so the layout is never empty.
 * Real art goes in /public/images/… and is referenced as '/images/…'.
 */
export default function ArtPlaceholder({
  src,
  alt = '',
  hue = 270,
  variant = 0,
  label,
  className = '',
}) {
  if (src) {
    return <img className={`art ${className}`.trim()} src={src} alt={alt} loading="lazy" />;
  }
  const a = hue;
  const b = (hue + 50) % 360;
  const positions = [
    ['30% 25%', '75% 80%'],
    ['70% 20%', '25% 85%'],
    ['50% 35%', '50% 95%'],
  ][variant % 3];
  return (
    <div
      className={`art art--placeholder ${className}`.trim()}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      style={{
        background: `
          radial-gradient(60% 45% at ${positions[0]}, hsla(${a}, 90%, 62%, 0.85), transparent 70%),
          radial-gradient(70% 55% at ${positions[1]}, hsla(${b}, 85%, 45%, 0.75), transparent 72%),
          linear-gradient(160deg, hsl(${a}, 55%, 16%), hsl(${(a + 20) % 360}, 60%, 6%))`,
      }}
    >
      {label && <span className="art__label">{label}</span>}
    </div>
  );
}
