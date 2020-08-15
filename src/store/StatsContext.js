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

			setState(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<statsContext.Provider value={state}>{children}</statsContext.Provider>
	)
}
