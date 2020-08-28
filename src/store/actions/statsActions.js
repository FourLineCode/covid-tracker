import axios from 'axios'
import * as actions from '../types'

export const getStats = () => async (dispatch) => {
	try {
		const response = await axios.get('https://api.covid19api.com/summary')
		const data = await response.data

		if (data) {
			// localStorage.setItem('state', JSON.stringify(data))
			dispatch({ type: actions.GET_STATS, payload: data })
		}
	} catch (error) {
		dispatch({ type: actions.GET_STATS_ERROR, payload: error })
	}
}
