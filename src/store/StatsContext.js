import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const statsContext = createContext()

export const StatsContextProvider = ({ children }) => {
	const [state, setState] = useState({})

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://api.covid19api.com/summary'
			)
			const data = await response.data

			if (data) {
				setState(data)
				localStorage.setItem('state', JSON.stringify(data))
				localStorage.setItem('lastCalled', Date.now())
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('state'))
		const lastTime = JSON.parse(localStorage.getItem('lastCalled'))
		const delayTime = 3600 * 1000 // 1 hour
		if (data && Date.now() < lastTime + delayTime) {
			setState(data)
		} else {
			fetchData()
		}
	}, [])

	return (
		<statsContext.Provider value={state}>{children}</statsContext.Provider>
	)
}
