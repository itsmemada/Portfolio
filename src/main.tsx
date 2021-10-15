import React from 'react';

import './main.scss';
import Description from './components/description/description';
import Projects from './components/projects/projects';
import Technologies from './components/technologies/technologies';
import Slider from './components/slider/slider';
import Footer from './components/footer/footer';
import { SliderData } from './components/slider/sliderData';


function Main() {
  return (

<section className='xd '>
<section className = 'name'>
  <p>Amadeusz Sopot</p>
</section>
< Description/>
<Projects/>
<Technologies/>
<Slider slides={SliderData} />
<Footer/>
</section>

  );
}
export default Main;
