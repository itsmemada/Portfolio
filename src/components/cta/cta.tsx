import "./cta.scss";

/*
 * Jedyne miejsce, ktore laczy portfolio ze strona sprzedazowa.
 * Portfolio mowi kim jestem i co zrobilem — Nexus404 sprzedaje.
 * Nie rozbudowywac tego w sekcje uslug ani cennik: wtedy obie strony
 * zaczynaja odpowiadac na to samo pytanie i traca wiarygodnosc.
 */
function Cta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <h2 className="cta__title" id="cta-title">
          Need a website?
        </h2>
        <p className="cta__desc">
          I run Nexus404 — websites, hosting and care for small businesses.
        </p>
        <a
          className="cta__link"
          href="https://www.nexus404.net/"
          target="_blank"
          rel="noreferrer"
        >
          nexus404.net &rarr;
        </a>
      </div>
    </section>
  );
}

export default Cta;
