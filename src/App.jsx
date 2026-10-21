import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Hero from './sections/hero/Hero.jsx';
import Studio from './sections/studio/Studio.jsx';
import Novel from './sections/novel/Novel.jsx';

import './components/components.css';
import './layout/layout.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Novel />
      </main>
      <Footer />
    </>
  );
}
