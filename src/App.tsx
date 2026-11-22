import './App.scss';

import Description from './components/description/description';
import Projects from './components/projects/projects';
import Technologies from './components/technologies/technologies';
import Cta from './components/cta/cta';
import Footer from './components/footer/footer';
import DarkmodeButton from './components/darkmode-button/darkmode-button';

function App() {
  return (
    <div className="App">
      <div className="App__topbar container">
        <DarkmodeButton />
      </div>

      {/*
        Hero zajmuje pelny ekran i celowo nie odslania pierwszej karty projektu.
        Nie skracac i nie dodawac wskaznika "scroll" — to swiadoma decyzja z projektu.
      */}
      <header className="hero container">
        <h1 className="hero__hello">Hello</h1>
        <Description />
      </header>

      <main>
        <section className="section section--projects" aria-labelledby="projects-title">
          <div className="container">
            <h2 className="section__title" id="projects-title">
              Projects
            </h2>
            <Projects />
          </div>
        </section>

        <section className="section" aria-labelledby="technologies-title">
          <div className="container">
            <h2 className="section__title" id="technologies-title">
              Technologies
            </h2>
            <Technologies />
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </div>
  );
}

export default App;
