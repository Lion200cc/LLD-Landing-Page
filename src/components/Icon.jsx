// Small inline icon set (24×24, stroke based) so we ship no icon library.
const PATHS = {
  memory: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      <path d="M10 10h4v4h-4z" />
    </>
  ),
  knowledge: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M4 5.5V21.5" />
      <path d="m13 7 .9 2.1L16 10l-2.1.9L13 13l-.9-2.1L10 10l2.1-.9z" />
    </>
  ),
  summary: (
    <>
      <path d="M4 6h16M4 12h10M4 18h6" />
      <path d="m16 15 2 2 4-4" />
    </>
  ),
  role: (
    <>
      <path d="M4 5c0 8 2 14 8 14s8-6 8-14c-2.5 1.5-5.5 2-8 2s-5.5-.5-8-2z" />
      <path d="M8.5 11h.01M15.5 11h.01M9.5 15c1.5 1 3.5 1 5 0" />
    </>
  ),
  room: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M17 14.2c2.4.3 4 2.2 4 4.8" />
    </>
  ),
  session: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M8 4v5" />
      <path d="M8 14h8M8 17h5" />
    </>
  ),
  lore: (
    <>
      <path d="M7 3h11a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H8" />
      <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2 2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M12 8h5M12 12h5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="m4 18 5-5 4 4 3-3 4 4" />
    </>
  ),
  situation: (
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  character: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  pc: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.6 3.2 8 8 9 4.8-1 8-4.4 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  edit: (
    <>
      <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21.5h11.6a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </>
  ),
  news: (
    <>
      <path d="M4 5h13v14H6a2 2 0 0 1-2-2z" />
      <path d="M17 9h3v8a2 2 0 0 1-2 2M7.5 9h6M7.5 13h6" />
    </>
  ),
  poll: <path d="M5 20V10M12 20V4M19 20v-7" />,
  store: (
    <>
      <path d="M4 9 5.5 4h13L20 9" />
      <path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" />
      <path d="M5 11.5V20h14v-8.5M10 20v-4h4v4" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8M12 17h.01" />
    </>
  ),
  book: (
    <>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
      <path d="M5 17a3 3 0 0 1 3-3h11" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 16v4M17 18h4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <path d="M7.5 8h.01" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 17 4-5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  discord: (
    <>
      <path d="M7 6.5c1.6-.8 3.2-1.2 5-1.2s3.4.4 5 1.2c1.6 2.6 2.4 5.3 2.5 8.2-1.5 1.1-3 1.8-4.5 2.3l-1-1.6c.6-.2 1.1-.5 1.6-.9-2.4 1-5.2 1-7.6 0 .5.4 1 .7 1.6.9l-1 1.6c-1.5-.5-3-1.2-4.5-2.3.1-2.9.9-5.6 2.5-8.2z" />
      <path d="M9.5 12h.01M14.5 12h.01" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M10 11v6M14 11v6" />
      <path d="M6 7l1 13h10l1-13M9 7V4h6v3" />
    </>
  ),
};

export default function Icon({ name, size = 22, className = '', title }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {content}
    </svg>
  );
}
