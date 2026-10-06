import React from "react"
import "./projects.scss"
import nexus404_img from '../../assets/projects/nexus404-screenshot.png';
import digital from '../../assets/projects/digital.png';
import nexus from '../../assets/projects/nexus.png';
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
    img={nexus404_img}
    name = 'Nexus 404'
    desc= 'Nexus 404 landing page'
    adress = 'https://www.nexus404.pl/' />
<Project 
  img={CBD_shop}
  name = 'Windeye'
  desc= 'Landing page for windeye company wich uses drones to monitor wind turbines'
  adress = 'https://www.windeye.pl' />
<Project 
img={nexus}
name = 'Home | Nexus Remote Hub'
desc= 'Discover the best remote work tools, tips, and strategies for digital nomads and remote professionals'
adress = 'https://www.nexusremotehub.com/' />
<Project 
  img={digital}
  name = 'Digital Organism'
  desc= 'Music collective website'
  adress = 'https://digitalorganism.netlify.app/' />
  
</section>
    )
}
export default Projects
