import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import CountriesTable from './components/CountriesTable'
import { connect } from 'react-redux'
import { getStats } from './store/actions/statsActions'
import { Grid } from '@material-ui/core'

const App = (props) => {
	const { getStats } = props

	useEffect(() => {
		getStats()
	})

	return (
		<>
			<Navbar />
			<Grid container justify='center'>
				<Stats />
				<CountriesTable />
			</Grid>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		getStats: () => dispatch(getStats()),
	}
}

export default connect(null, mapDispatchToProps)(App)
