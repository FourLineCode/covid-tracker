import React from 'react'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import { StatsContextProvider } from './store/StatsContext'
import CountriesTable from './components/CountriesTable'

import { Grid } from '@material-ui/core'

const App = () => {
	return (
		<StatsContextProvider>
			<Navbar />
			<Grid container justify='center'>
				<Stats />
				<CountriesTable />
			</Grid>
		</StatsContextProvider>
	)
}

export default App
