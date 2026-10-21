// All LLD-Studio copy lives here so it is easy to reword without touching layout code.

export const features = [
  {
    icon: 'memory',
    title: 'Memory',
    text: 'Characters carry memory through the story, so a scene does not start from zero every time you speak.',
  },
  {
    icon: 'knowledge',
    title: 'Knowledge gathering',
    text: 'Facts discovered while you play are gathered and saved, ready to be used again later.',
  },
  {
    icon: 'summary',
    title: 'Summaries',
    text: 'Long conversations are condensed into summaries so the story can keep going.',
  },
  {
    icon: 'role',
    title: 'Take Role',
    text: 'A role system: step into a role in the story yourself instead of only watching it.',
  },
  {
    icon: 'room',
    title: 'Room / Group chat',
    text: 'Put several characters in the same room and let the scene unfold between them.',
  },
  {
    icon: 'session',
    title: 'Sessions',
    text: 'Keep your stories organized as sessions that you can come back to and continue.',
  },
  {
    icon: 'lore',
    title: 'Lore',
    text: 'Write the world your story lives in, and keep it close to the characters who live there.',
  },
  {
    icon: 'image',
    title: 'Multiple image states',
    text: 'Give a character more than one image — one per state — and edit them with the built-in image engine.',
  },
];

export const creations = [
  { icon: 'character', title: 'Character', text: 'Who is in the story.' },
  { icon: 'lore', title: 'Lore', text: 'What the world knows and remembers.' },
  { icon: 'session', title: 'Session', text: 'A story you can continue, run by run.' },
  { icon: 'room', title: 'Room', text: 'Where several characters share one chat.' },
  { icon: 'situation', title: 'Situation', text: 'The scene you start from.' },
];

export const creationLayers = [
  { icon: 'edit', title: 'Details', text: 'Its own description and settings.' },
  { icon: 'knowledge', title: 'Gathered knowledge', text: 'What it has learned along the way.' },
  { icon: 'image', title: 'Image states', text: 'Multiple images, one per state.' },
];

export const connections = [
  {
    icon: 'pc',
    title: 'This PC',
    text: 'Use the Ollama running on the same device as LLD-Studio.',
  },
  {
    icon: 'server',
    title: 'Another server',
    text: 'Connect to an Ollama service running on a different machine.',
  },
];

export const promises = [
  { yes: true, text: 'Loads the Ollama models already on your device' },
  { yes: true, text: 'Creates new Ollama Modelfiles for your own custom models' },
  { yes: false, text: 'Cannot delete or edit your parent (base) models' },
];

export const roadmap = [
  {
    status: 'done',
    title: 'V1 — chat with one character',
    text: 'Where it started: send a chat to a single character.',
  },
  {
    status: 'done',
    title: 'The big integration',
    text: 'Memory, knowledge gathering, summaries, Take Role, rooms and group chat, sessions, lore and multiple image states are all implemented.',
  },
  {
    status: 'progress',
    title: 'Real-user testing',
    text: 'Every creation takes time to set up, so the best way to find rough edges is real people using it.',
  },
  {
    status: 'progress',
    title: 'Page editor',
    text: 'Customize every button and every panel — built on the image engine’s multi-state and image-editing support.',
  },
  {
    status: 'planned',
    title: 'Cloud providers',
    text: 'Connect to ChatGPT, Claude and DeepSeek in addition to Ollama.',
  },
];

export const statusLabel = {
  done: 'Done',
  progress: 'In progress',
  planned: 'Planned',
};
