import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profil from './pages/profilUser/ProfilUser'
import Settings from './pages/settings/Settings'
import Community from './pages/community/Community'
import NotFound from './pages/notFound/NotFound'

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
