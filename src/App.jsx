import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { Reveal } from './components/ReactBits';

function App() {
  const handlePointerMove = (event) => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
  };

  return (
    <div className="app" onPointerMove={handlePointerMove}>
      <ParticleField />
      <Navbar />
      <main className="main-content">
        <Reveal><Hero /></Reveal>
        <Reveal delay={80}><About /></Reveal>
        <Reveal delay={140}><Skills /></Reveal>
        <Reveal delay={200}><Projects /></Reveal>
        <Reveal delay={260}><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
