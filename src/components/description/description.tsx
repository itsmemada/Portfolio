import './description.scss'

const desc =  <article className='description__content'>
Cześć, mam na imię Amadeusz i jestem początkującym programistą,
na tej stronie znajdziesz projekty które zrealizowałem, oraz technologie z których korzystam.
</article>

function Description(){
return(
<section className='description '>
  {desc}
</section>
)
}
 export default Description
