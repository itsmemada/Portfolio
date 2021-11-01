import React from "react"
import "./projects.scss"
import dtp from '../../assets/projects/dptmini.png';
import holi from '../../assets/projects/holi.png';
import iss from '../../assets/projects/iss.png';
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
  img={dtp}
  name = 'Dom pod Topolami'
  desc= 'Autorski projekt i wykonanie prostej strony internetowej dla agroturystyki "Dom pod Topolami"'
  adress = 'http://www.dompodtopolami.com.pl' />
<Project 
  img={CBD_shop}
  name = 'Sklep CBD'
  desc= 'Projekt sklepu e-commerce stworzony za pomocą biblioteki React wraz z MaterialUI, wykorzystujący infrastrukturę commercejs'
  adress = 'https://kup-se-cbd.netlify.app/' />
<Project 
  img={iss}
  name = 'ISS'
  desc= 'Projekt z wykorzystaniem api nasa, śledzący aktualne położenie ISS'
  adress = 'https://cojestmordo.github.io/iss_project' />
<Project 
  img={holi}
  name = 'Holistyczne'
  desc= 'Pomoc w utrzymaniu i administracja strony'
  adress = 'http://www.holistyczne.com.pl' />
  
</section>
    )
}
export default Projects
