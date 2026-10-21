# LLD — landing page

A landing page that presents **LLD-Studio** and **LLD-Novel**. React + Vite, plain JavaScript, dark purple → black theme.

This repo is only the promotional page. It does not contain either product.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

Needs Node 20.19+ (or 22.12+).

## Where things live

```
src/
  config.js            ← your links (download, store, Reader, Discord, contact)
  media.js             ← your recordings / screenshots / art
  styles/tokens.css    ← theme colors, fonts, spacing (change the purple here)
  components/          ← shared pieces (Button, MediaSlot, Split, Reveal, Icon…)
  layout/              ← Navbar, Footer
  sections/
    hero/              ← top of the page, the two product cards
    studio/            ← everything about LLD-Studio
    novel/             ← everything about LLD-Novel
public/media/          ← drop your videos and images here
```

Each product is its own folder with its own `content.js` (copy), components and stylesheet,
so you can work on one without touching the other.

## Add your links

Open `src/config.js`. Any link left as `null` shows a disabled **“Coming soon”** button instead of a
broken link. Fill one in and the button becomes a normal link.

## Add your recordings

Every “Preview coming soon” frame on the page is a `MediaSlot`. To fill one:

1. Put the file in `public/media/studio/` or `public/media/novel/`
2. Point to it in `src/media.js`:

```js
studioRoom: { src: '/media/studio/room.mp4', alt: 'A room with several characters' },
```

- `.mp4` / `.webm` play muted and looped while on screen (and pause when scrolled away).
  Visitors who prefer reduced motion get video controls instead of autoplay.
- `.png` / `.jpg` / `.webp` / `.gif` show as images.
- Optional `poster: '/media/…jpg'` shows while a video loads.

Slots available: `heroStudio`, `heroNovel`, `studioHero`, `studioCreate`, `studioRoom`,
`studioImageStates`, `studioOllama`, `novelHero`, `novelFormat`, `novelCharacterCard`, `novelReader`,
`novelStoreHover`, `novelPosts`, `novelPricingGauge`, `novelArt1`–`novelArt3`.

Tip: 5–15 second clips, no audio, about 1280px wide, a few MB each.

## Changing the words

Studio copy: `src/sections/studio/content.js` (plus the section components for headings).
Novel copy: `src/sections/novel/content.js`.
