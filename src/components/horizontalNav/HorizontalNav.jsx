import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../horizontalNav/horizontalNav.scss'
/**
 * Composant qui représente la barre de navigation horizontale.
 * Cette barre affiche le logo et les liens de navigation vers les autres pages de l'application
 * @returns {JSX.Element} le composant de la navigation horizentale
 */

function HorizontalNav() {
    const id = 12
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <nav>
                <ul className="header_nav">
                    <li>
                        <NavLink to="/" className="header_nav_item">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/user/${id}`} className="header_nav_item">
                            Profil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Settings" className="header_nav_item">
                            Réglages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Community" className="header_nav_item">
                            Communauté
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default HorizontalNav
