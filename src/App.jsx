import React from 'react'
import HorizontalNav from './components/horizontalNav/HorizontalNav.jsx'
import VerticalNav from './components/verticalNav/VerticalNav.jsx'
import RoutesApp from './routes.jsx'
//import Dashboard from './components/Dashboard'

import { BrowserRouter as Router } from 'react-router-dom'

/**
 * Composant principal de l'application.
 *
 * Ce composant structure l'application en incluant un système de navigation horizontal et vertical,
 * ainsi qu'une zone principale pour afficher le contenu des différentes pages.
 *
 * - `HorizontalNav` : Barre de navigation horizontale en haut de la page.
 * - `VerticalNav` : Barre de navigation verticale sur la gauche de la page.
 * - `RoutesApp` : Affiche les routes et les pages correspondantes.
 *
 * Le tout est encapsulé dans un `Router` pour gérer la navigation entre les pages.
 *
 * @returns {JSX.Element} Le layout complet de l'application.
 */
function App() {
    return (
        <Router>
            <div className="app-container">
                <HorizontalNav />
                <div className="content-wrapper">
                    <VerticalNav />
                    <div className="main-content">
                        <RoutesApp />
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
