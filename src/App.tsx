import './App.scss';

import Description from './components/description/description';
import Projects from './components/projects/projects';
import Technologies from './components/technologies/technologies';
import Slider from './components/slider/slider';
import Footer from './components/footer/footer';
import { SliderData } from './components/slider/sliderData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className = 'name'>
          <h1>Amadeusz Sopot</h1>
        </section>
      </header>
      <Description />
      <h2>Projekty</h2>
      <Projects />
      <h2>Technologie</h2>
      <Technologies />
      <h2>Zdjęcia</h2>
      <Slider slides={SliderData} />
      <Footer />
    </div>
  );
}

export default App;
