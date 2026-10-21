// Drop your screen recordings / screenshots / art into public/media/ and list them here.
//
//   public/media/studio/room.mp4   →   studioRoom: { src: '/media/studio/room.mp4', alt: '…' }
//
// - Videos (.mp4 / .webm) autoplay muted and loop while they are on screen.
// - Images (.png / .jpg / .webp / .gif) are shown as-is.
// - `poster` is optional: an image shown while a video loads.
// - Leave a slot as `null` and the page shows a tidy "recording coming soon" frame.
//
// Tip: keep each video short (5–15 s), no audio needed, ~1280px wide, under a few MB.

export const media = {
  // ───── Hero cards (optional: replaces the decorative artwork on the two cards) ─────
  heroStudio: null,
  heroNovel: null,

  // ───── LLD-Studio ─────
  studioHero: null, // overview: the app in action
  studioCreate: null, // creating a character / lore / session / room / situation
  studioRoom: null, // a Room / group chat with several characters
  studioImageStates: null, // a character switching between image states
  studioOllama: null, // choosing "this PC" or "another server" for Ollama

  // ───── LLD-Novel ─────
  novelHero: null, // the story's art / cover
  novelFormat: null, // animated text, colors and backgrounds inside the Reader
  novelCharacterCard: null, // a character card flipping to its details
  novelReader: null, // the Reader gallery of paid + imported products
  novelStoreHover: null, // the store counter, product image changing on hover
  novelPosts: null, // the Posts page (news + polls)
  novelPricingGauge: null, // the sales-limit gauge on a product
  novelArt1: null, // art samples for the "about the art" section
  novelArt2: null,
  novelArt3: null,
};
