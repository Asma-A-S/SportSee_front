import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
function HorizontalNav() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <nav className="header_nav">
                <NavLink to="/" className="header_nav_item">
                    Accueil
                </NavLink>
                <NavLink to="/user/:userId" className="header_nav_item">
                    Profil
                </NavLink>
                <NavLink to="/Settings" className="header_nav_item">
                    Réglages
                </NavLink>
                <NavLink to="/Community" className="header_nav_item">
                    Communité
                </NavLink>
            </nav>
        </div>
    )
}
export default HorizontalNav
