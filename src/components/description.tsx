import React from 'react';

const desc =  <article className='description__content'>
Witaj na moim portfolio, jestem początkującym web developerem,
znajdziesz tutaj moje projekty, oraz technologie z których korzystam.
</article>

function Description(){
return(
<section className='description '>
  {desc}
</section>
)
}
 export default Description