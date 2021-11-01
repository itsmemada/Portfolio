import React from 'react';
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
      <p>Amadeusz Sopot</p>
      </section>
      </header>
      <Description />
      <Projects />
      <Technologies />
      <Slider slides={SliderData} />
      <Footer />

    </div>
  );
}

export default App;
