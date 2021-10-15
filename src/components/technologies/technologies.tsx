import React from "react";
import "./technologies.scss"

function Technologies(){
    return(
        <section className='technologies'>
  <article className = "tech">
      <figure className ="tech__icon"><i className="fab fa-html5 fa-4x"></i></figure>
      <figcaption className = "tech__description">html</figcaption>
  </article>
  <article className = "tech">
    <figure className ="tech__icon"><i className="fab fa-css3-alt fa-4x"></i></figure>
    <figcaption className = "tech__description">css</figcaption>
</article>
  <article className = "tech">
    <figure className ="tech__icon"><i className="fab fa-js fa-4x"></i></figure>
    <figcaption className = "tech__description">javascript</figcaption>
</article>
<article className = "tech">
  <figure className ="tech__icon"><i className="fab fa-git-alt fa-4x"></i></figure>
  <figcaption className = "tech__description">git</figcaption>
</article>
<article className = "tech">
  <figure className ="tech__icon"><i className="fab fa-node-js fa-4x"></i></figure>
  <figcaption className = "tech__description">node-js</figcaption>
</article>
<article className = "tech">
  <figure className ="tech__icon"><i className="fab fa-php fa-4x"></i></figure>
  <figcaption className = "tech__description">php</figcaption>
</article>
<article className = "tech">
  <figure className ="tech__icon"><i className="fab fa-react fa-4x"></i></figure>
  <figcaption className = "tech__description">react</figcaption>
</article>
<article className = "tech">
  <figure className ="tech__icon"><i className="fas fa-terminal fa-3x"></i></figure>
  <figcaption className = "tech__description">bash</figcaption>
</article>
</section>

    )
}

export default Technologies