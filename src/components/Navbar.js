import React from 'react'

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import GitHubIcon from '@material-ui/icons/GitHub'

const Navbar = (props) => {
	const classes = useStyles()

	return (
		<>
			<AppBar position='static' className={classes.appBar}>
				<Toolbar variant='dense' disableGutters className={classes.title}>
					<TrendingUpIcon
						color='error'
						fontSize='large'
						className={classes.icon}
					/>
					<Typography variant='h4' color='inherit'>
						<strong>Corona Tracker</strong>
					</Typography>
					<IconButton>
						<a
							href='https://github.com/ItzAkmal/corona-tracker'
							target='_blank'
							rel='noopener noreferrer'>
							<GitHubIcon />
						</a>
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	)
}

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

export default Navbar
