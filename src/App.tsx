import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
