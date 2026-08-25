import NavigationPanel from "./reusables/NavigationPanel"
import StatusPill from "./reusables/StatusPill";
import { Hero, About, Experience, Portfolio, Contact } from "./pages"
import './index.css';
import './pages.scss';

const app_container = "relative w-full h-screen overflow-hidden bg-dark_background text-white";
const main_styling = "h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth";
const section_styling = "h-[100dvh] w-full snap-start flex items-center justify-center";

function App() {
  return (
    <div className={app_container}>
      <NavigationPanel />

      <StatusPill />

      <main className={main_styling}>
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