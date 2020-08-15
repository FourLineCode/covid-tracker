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
			<Grid container>
				<Grid item sm={1} />
				<Stats />
				<Grid item sm={1} />
				<Grid item sm={1} />
				<CountriesTable />
				<Grid item sm={1} />
			</Grid>
		</StatsContextProvider>
	)
}

export default App
