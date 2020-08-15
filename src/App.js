import React from 'react'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import { StatsContextProvider } from './store/StatsContext'

function App() {
	return (
		<StatsContextProvider>
			<Navbar />
			<Stats />
		</StatsContextProvider>
	)
}

export default App
