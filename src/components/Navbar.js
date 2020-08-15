import React from 'react'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'

const useStyles = makeStyles(() => ({
	appBar: {
		backgroundColor: '#8458B3',
	},
	title: {
		margin: 'auto',
	},
	icon: {
		marginRight: '10px',
	},
}))

const Navbar = () => {
	const classes = useStyles()

	return (
		<>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar variant='dense' className={classes.title}>
					<TrendingUpIcon
						color='error'
						fontSize='large'
						className={classes.icon}
					/>
					<Typography variant='h4' color='inherit'>
						Coronavirus Tracker
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Navbar
