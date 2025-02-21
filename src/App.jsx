import React, {useState} from 'react'

import './App.scss'
import Navbar from './components/navbar/Navbar.component'
import Sidebar from './components/sidebar/Sidebar.component';
import Playground from './components/playground/Playground.cpmponent'

import AppContext from './context/App.context';

function App() {
	const [show, setShow] = useState(false)
	return (
		<AppContext.Provider value={{ show, setShow }}>
			<div className="App">
				<Navbar />
				<Sidebar />
				<Playground />
			</div>
		</AppContext.Provider>
	)
}
export default App