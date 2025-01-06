import { Link } from "react-router-dom";
import './footerComponent.css';

function Footer() {
    return (
        <div className="p">
            <div className="containeur">
                <div className="row justify-content-center footer1">
                    {/* Colonne 1 */}
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>John Doe</h6>
                        <p>
                            40 Rue Laure Diebold <br />
                            69009 Lyon, France<br />
                            Téléphone : 06 20 30 40 50
                        </p>
                    </div>

                    {/* Colonne 2 */}
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Liens utiles</h6>
                        <ul className="list">
                            <li>
                                <span className="footer-arrow"></span>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <span className="footer-arrow"></span>
                                <Link to="/About">À propos de</Link>
                            </li>
                            <li>
                                <span className="footer-arrow"></span>
                                <Link to="/Services">Prestations de service</Link>
                            </li>
                            <li>
                                <span className="footer-arrow"></span>
                                <Link to="/Contact">Me contacter</Link>
                            </li>
                            <li>
                                <span className="footer-arrow"></span>
                                <Link to="/legal-mention">Mentions légales</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 */}
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes dernières réalisations</h6>
                        <ul>
                            <li>
                                <span className="footer-arrow"></span>Fresh food
                            </li>
                            <li>
                                <span className="footer-arrow"></span>Restaurant Akira
                            </li>
                            <li>
                                <span className="footer-arrow"></span>Espace bien-être
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4 */}
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes derniers articles</h6>
                        <ul>
                            <li>
                                <span className="footer-arrow"></span>Coder son site en HTML/CSS
                            </li>
                            <li>
                                <span className="footer-arrow"></span>Vendre ses produits sur le web
                            </li>
                            <li>
                                <span className="footer-arrow"></span>Se positionner sur Google
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pied de page */}
                <div className="footer2">
                    <p>&copy; Designed by John Doe</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
