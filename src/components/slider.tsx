import React, {useState} from "react";
import { SliderData } from "./sliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft  }from 'react-icons/fa'
import './slider.scss'

const Slider = ({ slides }) => {
    const [current, SetCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        SetCurrent(current === length -1 ? 0 : current+1);
    };
    const prevSlide = () =>{
        SetCurrent(current === 0 ? length -1  : current-1);
    };


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    return(
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}  />

            <div className='slider__content'>
                {SliderData.map((slide:any, index)=>{
                    return(
                        <div className={index === current ? 'sildeactive' : 'slide'} key={index}>
                            {index === current &&   <img src ={slide.image} alt='trees' className='image'/>}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default Slider

