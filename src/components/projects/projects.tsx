import React from "react"
import "./projects.scss"
import dtp from '../../assets/projects/dptmini.png';
import digital from '../../assets/projects/digital.png.png';
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
  img={Ace}
  name = 'Acedesign'
  desc= 'Projekt mojego portfolio graficznego, z wykorzystaniem frameworka vue'
  adress = 'https://acedesign.netlify.app' />
<Project 
  img={digital}
  name = 'Digital Organism'
  desc= 'Projekt prostej strony internetowej wykonanej z naciskiem na minimalizm'
  adress = 'http://www.yth404.pl' />
  
</section>
    )
}
export default Projects
