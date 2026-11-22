import "./footer.scss";

function Footer() {
  return (
    <footer className="footer" data-testid="footer-1">
      <div className="container footer__inner">
        <p className="footer__title">Let&rsquo;s work together</p>

        <a className="footer__email" href="mailto:info@nexus404.pl">
          info@nexus404.pl
        </a>

        <div className="footer__meta">
          <a
            href="https://github.com/itsmemada"
            target="_blank"
            rel="noreferrer"
          >
            github.com/itsmemada
          </a>
          <span>2020&ndash;2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
