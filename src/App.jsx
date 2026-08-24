import NavigationPanel from "./reusables/NavigationPanel"
import { Hero, About, Experience, Portfolio, Contact } from "./pages"
import './index.css';
import './pages.scss';

const section_styling = "h-[100dvh] w-full snap-start flex items-center justify-center";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d0d11] text-white">
      <NavigationPanel />

      <main className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="hero" className={section_styling}>
          <Hero />
        </section>
        <section id="about" className={section_styling}>
          <About />
        </section>
        <section id="experience" className={section_styling}>
          <Experience />
        </section>
        <section id="portfolio" className={section_styling}>
          <Portfolio />
        </section>
        <section id="contact" className={section_styling}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;