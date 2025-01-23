import React from 'react'
import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'
import RoutesApp from './routes.jsx'
//import Dashboard from './components/Dashboard'
import { getUserMainData } from './services/api.js'
import { getUserActivity } from './services/api.js'
import { getUserAverageSessions } from './services/api.js'
import { getUserPerformance } from './services/api.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    getUserMainData(12)
    getUserActivity(12)
    getUserAverageSessions(12)
    getUserPerformance(12)
    return (
        <Router>
            <HorizontalNav />
            <RoutesApp />
            <VerticalNav />
        </Router>
    )
}

export default App
