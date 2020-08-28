import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middlewares)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store
