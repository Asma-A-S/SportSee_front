import React from 'react'
import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'
import Dashboard from './components/Dashboard'
import { getUserMainData } from './services/api.js'
import { getUserActivity } from './services/api.js'
import { getUserAverageSessions } from './services/api.js'
import { getUserPerformance } from './services/api.js'

function App() {
    getUserMainData(12)
    getUserActivity(12)
    getUserAverageSessions(12)
    getUserPerformance(12)
    return (
        <>
            <HorizontalNav />
            <VerticalNav />
            <Dashboard />
        </>
    )
}

export default App
