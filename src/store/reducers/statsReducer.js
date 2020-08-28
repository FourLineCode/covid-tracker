import * as actions from '../types'

const initState = {
	Global: null,
	Countries: [],
	Date: null,
}

export const statsReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.GET_STATS:
			return {
				...state,
				Global: action.payload.Global,
				Countries: action.payload.Countries,
				Date: action.payload.Date,
			}
		case actions.GET_STATS_ERROR:
			console.log(action.payload)
			return state
		default:
			return state
	}
}
