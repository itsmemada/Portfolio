import React from "react"
import "./projects.scss"
import instytut_ludzi from '../../assets/projects/Instytut_ludzi.png';
import digital from '../../assets/projects/digital.png';
import Ace from '../../assets/projects/Acedesign.png';
import CBD_shop from '../../assets/projects/CBD_shop.png'


function Project(props :any){
return(
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="flip-card-img"
      src={props.img}
      alt={props.name}/>
    </div>
    <div className="flip-card-back">
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <p><a href={props.adress} target='_blank' rel="noreferrer">{props.adress}</a></p>
    </div>
  </div>
</div>
);
}

function Projects(){
    return(
<section className='projects'>

  <Project 
  img={instytut_ludzi}
  name = 'Instytut ludzi'
  desc= 'Minimal landing page for "Instytut ludzi" conference'
  adress = 'http://www.instytutludzi.pl' />
<Project 
  img={CBD_shop}
  name = 'Windeye'
  desc= 'Landing page for windeye company wich uses drones to monitor wind turbines'
  adress = 'https://www.windeye.pl' />
<Project 
  img={Ace}
  name = 'Acedesign'
  desc= 'My art portfolio presented using vue'
  adress = 'https://acedesign.netlify.app' />
<Project 
  img={digital}
  name = 'Digital Organism'
  desc= 'Music collective website'
  adress = 'https://digitalorganism.netlify.app/' />
  
</section>
    )
}
export default Projects
