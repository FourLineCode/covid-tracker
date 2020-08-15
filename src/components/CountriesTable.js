import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	TableBody,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Toolbar,
	Typography,
	Paper,
	Grid,
	CircularProgress,
	TextField,
	Button,
} from '@material-ui/core'
import { statsContext } from '../store/StatsContext'
import { headCells } from '../utils/tableHeadCells'
import CountUp from 'react-countup'

const EnhancedTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={'default'}>
						<strong>{headCell.label}</strong>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

const CountriesTable = () => {
	const classes = useStyles()
	const [rowsPerPage, setRowsPerPage] = React.useState(10)
	const [page, setPage] = React.useState(0)
	const [input, setInput] = React.useState('')
	const [filteredCountries, setFilteredCountries] = React.useState([])

	const { Countries } = useContext(statsContext)
	if (Countries) {
		Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleInput = (event) => {
		setInput(event.target.value)
		handleSearch(event.target.value)
	}

	const handleSearch = (name = input) => {
		if (input === '') return
		const newCountries = Countries.filter((country) => {
			return (
				country.Country.toLowerCase().includes(name.toLowerCase()) ||
				country.CountryCode.toLowerCase().includes(name.toLowerCase())
			)
		})
		setFilteredCountries(newCountries)
	}

	React.useEffect(() => {
		setFilteredCountries(Countries)
	}, [Countries])

	let emptyRows
	if (filteredCountries) {
		emptyRows =
			rowsPerPage -
			Math.min(rowsPerPage, filteredCountries.length - page * rowsPerPage)
	}

	return filteredCountries ? (
		<Grid item sm={10} className={classes.root}>
			<Paper className={classes.paper}>
				<Toolbar className={classes.toolroot}>
					<Grid container>
						<Grid item xs={12}>
							<Typography
								className={classes.tooltitle}
								variant='h4'
								id='tableTitle'
								component='div'>
								<strong>Stats By Country</strong>
							</Typography>
						</Grid>
						<Grid item xs={12} className={classes.search}>
							<TextField
								value={input}
								onChange={handleInput}
								id='outlined-basic'
								label='Search'
								placeholder='Country Name'
								variant='outlined'
								size='small'
								className={classes.field}
							/>
							<Button
								onClick={handleSearch}
								variant='contained'
								color='primary'
								size='large'
								className={classes.field}>
								Search
							</Button>
						</Grid>
					</Grid>
				</Toolbar>

				<TableContainer>
					<Table className={classes.table} size={'medium'}>
						<EnhancedTableHead />
						<TableBody>
							{filteredCountries
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map((row, index) => {
									return (
										<TableRow
											hover
											tabIndex={-1}
											key={row.Country}>
											<TableCell
												component='th'
												id={index}
												scope='row'
												padding='default'>
												<strong>
													{row.Country} (
													{row.CountryCode})
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.confirmed}>
												<strong>
													<CountUp
														start={
															row.TotalConfirmed -
															row.TotalConfirmed *
																0.1
														}
														end={row.TotalConfirmed}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.confirmed}>
												<strong>
													<CountUp
														start={
															row.NewConfirmed -
															row.NewConfirmed *
																0.1
														}
														end={row.NewConfirmed}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.recovered}>
												<strong>
													<CountUp
														start={
															row.TotalRecovered -
															row.TotalRecovered *
																0.1
														}
														end={row.TotalRecovered}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.recovered}>
												<strong>
													<CountUp
														start={
															row.NewRecovered -
															row.NewRecovered *
																0.1
														}
														end={row.NewRecovered}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.deaths}>
												<strong>
													<CountUp
														start={
															row.TotalDeaths -
															row.TotalDeaths *
																0.1
														}
														end={row.TotalDeaths}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
											<TableCell
												align='right'
												className={classes.deaths}>
												<strong>
													<CountUp
														start={
															row.NewDeaths -
															row.NewDeaths * 0.1
														}
														end={row.NewDeaths}
														duration={1}
														separator=','
													/>
												</strong>
											</TableCell>
										</TableRow>
									)
								})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: 53 * emptyRows,
									}}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 20, 30]}
					component='div'
					count={filteredCountries.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</Grid>
	) : (
		<CircularProgress className={classes.spinner} />
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
		backgroundColor: 'lightgrey',
	},
	table: {
		minWidth: 750,
	},
	toolroot: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	tooltitle: {
		flex: '1 1 100%',
		color: '#0466AD',
		textAlign: 'center',
		marginTop: '10px',
		marginBottom: '10px',
	},
	spinner: {
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
	confirmed: {
		color: 'orange',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
	},
	recovered: {
		color: 'green',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
	},
	deaths: {
		color: 'red',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
	},
	search: {
		textAlign: 'center',
	},
	field: {
		marginLeft: '10px',
		marginRight: '10px',
	},
}))

export default CountriesTable
