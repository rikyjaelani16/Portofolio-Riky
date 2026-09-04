import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <a href="#hero" className="footer__logo">
                            <span className="footer__logo-bracket">&lt;</span>
                            <span className="footer__logo-text">Riky Jaelani</span>
                            <span className="footer__logo-bracket">&gt;</span>
                        </a>
                        <p className="footer__tagline">
                            Crafting immersive digital experiences with code & creativity.
                        </p>
                    </div>

                    <div className="footer__divider"></div>

                    <div className="footer__bottom">
                        <p className="footer__copy">
                            &copy; {currentYear} Portfolio. Built with
                            <span className="gradient-text"> React</span> &
                            <span className="gradient-text"> Three.js</span>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}
