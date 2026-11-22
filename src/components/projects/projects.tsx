import React from "react";
import "./projects.scss";

import nexus404_img from "../../assets/projects/nexus404.jpg";
import windeye_img from "../../assets/projects/windeye.jpg";
import remotehub_img from "../../assets/projects/remotehub.jpg";
import digital_img from "../../assets/projects/digital-organism.jpg";

type ProjectData = {
  img: string;
  name: string;
  desc: string;
  address: string;
};

const PROJECTS: ProjectData[] = [
  {
    img: nexus404_img,
    name: "Nexus 404",
    desc: "Nexus 404 landing page",
    address: "https://www.nexus404.net/",
  },
  {
    img: windeye_img,
    name: "Windeye",
    desc: "Landing page for Windeye — a company using drones to monitor wind turbines",
    address: "https://www.windeye.pl",
  },
  {
    img: remotehub_img,
    name: "Nexus Remote Hub",
    desc: "Discover the best remote work tools, tips, and strategies for digital nomads",
    address: "https://www.nexusremotehub.com/",
  },
  {
    img: digital_img,
    name: "Digital Organism",
    desc: "Music collective website",
    address: "https://digitalorganism.netlify.app/",
  },
];

const prettyUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function Project({ img, name, desc, address }: ProjectData) {
  const [flipped, setFlipped] = React.useState(false);

  /*
   * Pierwsze klikniecie obraca karte, drugie wchodzi w projekt.
   * Wczesniej obrot dzialal tylko dzieki "sticky hover" przegladarki,
   * ktory jest kruchy i roznie zachowuje sie na Safari / Firefoksie.
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!flipped) {
      event.preventDefault();
      setFlipped(true);
    }
  };

  return (
    <a
      className={`flip-card${flipped ? " is-flipped" : ""}`}
      href={address}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      onMouseLeave={() => setFlipped(false)}
      onBlur={() => setFlipped(false)}
    >
      <div className="flip-card__inner">
        <div className="flip-card__face flip-card__front">
          <img src={img} alt={`${name} — website preview`} loading="lazy" />
        </div>
        <div className="flip-card__face flip-card__back">
          <h3 className="flip-card__title">{name}</h3>
          <p className="flip-card__desc">{desc}</p>
          <span className="flip-card__url">
            {prettyUrl(address)}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section className="projects">
      {PROJECTS.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </section>
  );
}

export default Projects;
