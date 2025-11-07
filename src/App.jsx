import React, { useState } from 'react'

import './App.scss'
import Navbar from './components/navbar/Navbar.component'
import Sidebar from './components/sidebar/SIdebar.component'
import Playground from './components/playground/Playground.component'

import AppContext from './context/App.context'

import './tailwind.css';

function App() {
    let title = null
    const [show, setShow] = useState(true)
    return (
        <AppContext.Provider value={{ title, show, setShow }}>
            <div className="app">
                <Navbar />
                <Sidebar />
                <Playground />
            </div>
        </AppContext.Provider>
    )
}
export default App
