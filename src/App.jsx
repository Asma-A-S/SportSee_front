import React from 'react'
import HorizontalNav from './components/horizontalNav/HorizontalNav.jsx'
import VerticalNav from './components/verticalNav/VerticalNav.jsx'
import RoutesApp from './routes.jsx'
//import Dashboard from './components/Dashboard'

import { BrowserRouter as Router } from 'react-router-dom'

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
