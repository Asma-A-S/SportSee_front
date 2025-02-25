import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profil from './pages/profilUser/ProfilUser'
import Settings from './pages/settings/Settings'
import Community from './pages/community/Community'
import NotFound from './pages/notFound/NotFound'

/**
 * Composant gérant les routes de l'application.
 * Définit les chemins et les composants associés pour la navigation.
 *
 * - "/" : Affiche la page d'accueil (`Home`).
 * - "/user/:userId" : Affiche le profil de l'utilisateur (`Profil`).
 * - "/settings" : Affiche la page des paramètres (`Settings`).
 * - "/community" : Affiche la page de la communauté (`Community`).
 * - "*" : Affiche la page "NotFound" pour les chemins inconnus.
 *
 * @returns {JSX.Element} La configuration des routes de l'application.
 */
function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user/:userId" element={<Profil />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/community" element={<Community />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}
export default RoutesApp
