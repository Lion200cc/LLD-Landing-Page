import Icon from './Icon.jsx';

/**
 * A link that looks like a button.
 * If `href` is empty the button renders disabled with a "coming soon" hint —
 * so unfinished links never lead anywhere broken. Set the URLs in src/config.js.
 */
export default function Button({
  href,
  variant = 'primary', // primary | ghost | studio | novel
  icon,
  soonHint = 'Coming soon',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (!href) {
    return (
      <span className={`${classes} is-disabled`} role="link" aria-disabled="true" title={soonHint} {...rest}>
        {inner}
        <span className="btn__soon">{soonHint}</span>
      </span>
    );
  }

  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {inner}
    </a>
  );
}
