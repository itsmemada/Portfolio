import React from "react"
import "./projects.scss"
import dtp from '../assets/projects/dptmini.png';
import holi from '../assets/projects/holi.png';
import iss from '../assets/projects/iss.png';
import rgb from '../assets/projects/koła rgb.png'


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
      <p><a href="http://www.dompodtopolami.com.pl">{props.adress}</a></p>
    </div>
  </div>
</div>
);
}

function Projects(){
    return(
<section className='projects'>

  <Project 
  img={dtp}
  name = 'Dom pod Topolami'
  desc= 'Projekt strony internetowej "Dom pod Topolami"'
  adress = 'dompodtopolami.com.pl' />
<Project 
  img={rgb}
  name = 'Koła rgb'
  desc= 'Projekt artystyczny wykonany za pomocą biblioteki p5.js'
  adress = 'cojestmordo.github.io/rgb' />
<Project 
  img={iss}
  name = 'ISS'
  desc= 'Projekt z wykorzystaniem api nasa'
  adress = 'cojestmordo.github.io/iss_project' />
<Project 
  img={holi}
  name = 'Holistyczne'
  desc= 'Pomoc w utrzymaniu i administracja strony'
  adress = 'holistyczne.com.pl' />
  
</section>
    )
}
export default Projects
