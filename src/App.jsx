import React, { useState, useEffect } from 'react'

import './App.scss'
import Navbar from './components/navbar/Navbar.component'
import Sidebar from './components/sidebar/Sidebar.component';
import Playground from './components/playground/Playground.component'

import AppContext from './context/App.context';

function App() {
	let title = null;
	useEffect(() => {
		document.title = "Web Editor"
		title = document.title
		const darkMode = localStorage.getItem('darkmode')
		console.log(darkMode)
		if(darkMode) {
			document.querySelector('html').setAttribute('data-bs-theme', 'dark')
		}
		else {
			document.querySelector('html').setAttribute('data-bs-theme', 'light')
		}
		
	}, [])
	const [show, setShow] = useState(true)
	return (
		<AppContext.Provider value={{ title, show, setShow }}>
			<div className="App">
				<Navbar />
				<Sidebar />
				<Playground />
			</div>
		</AppContext.Provider>
	)
}
export default App