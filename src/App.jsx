import React from 'react'

import './App.scss'
import Navbar from './components/navbar/Navbar.component'
import Sidebar from './components/sidebar/Sidebar.component';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
		</div>
	)
}
export default App