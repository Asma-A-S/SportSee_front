import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profil from './pages/profilUser/ProfilUser'
import Settings from './pages/settings/Settings'
import Community from './pages/community/Community'

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user/:userId" element={<Profil />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
            <Route path="/Community" element={<Community />}></Route>
        </Routes>
    )
}
export default RoutesApp
