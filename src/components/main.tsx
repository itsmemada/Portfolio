import React from 'react';

import './main.scss';
import Description from './description';
import Projects from './projects';
import Technologies from './technologies';
import Slider from './slider';
import Footer from './footer';
import { SliderData } from './sliderData';


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
