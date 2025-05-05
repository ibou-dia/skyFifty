import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TeamMembers from './components/sections/TeamMembers';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TeamMembers />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
