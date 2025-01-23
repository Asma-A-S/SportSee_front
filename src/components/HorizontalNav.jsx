import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
function HorizontalNav() {
    const id = 12
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <nav className="header_nav">
                <ul>
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
