import React from 'react'
import { headCells } from '../utils/tableHeadCells'
import CountUp from 'react-countup'
import { TableHead, TableCell, TableRow } from '@material-ui/core'

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

const StatTableCell = (props) => {
	return (
		<TableCell align='right' className={props.value.givenClass}>
			<strong>
				<CountUp
					start={props.value.givenStat - props.value.givenStat * 0.1}
					end={props.value.givenStat}
					duration={1}
					separator=','
				/>
			</strong>
		</TableCell>
	)
}

export { EnhancedTableHead, StatTableCell }
