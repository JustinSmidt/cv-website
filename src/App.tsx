import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Terminal from './components/Terminal';
import ScrollProgress from './components/ScrollProgress';
import BootSequence from './components/BootSequence';
import Toaster from './components/Toaster';
import StatusWidget from './components/StatusWidget';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('booted') === '1');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const active = useActiveSection();

  const handleBooted = () => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '`') setTerminalOpen((o) => !o);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {!booted && <BootSequence onDone={handleBooted} />}
      <ScrollProgress />
      <CursorGlow />
      <Navbar active={active} onTerminal={() => setTerminalOpen((o) => !o)} />
      <main>
        <Hero onTerminal={() => setTerminalOpen(true)} />
        <Stats />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <StatusWidget />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <Toaster />
    </>
  );
}

export default App;
