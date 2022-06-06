import React, { useEffect, useState} from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setTimeLeft } from '../features/lightLevel/lightLevelSlice'
import { Fetcher } from '../utils/Fetcher'

const TimeLeft:React.FC = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const time = useAppSelector(state => state.lightLevels.timeLeft)
	const [error, setError] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() =>{

		Fetcher.fetchTimeout( apiUrl+'/gettime', 5000 )
		.then(response => response.json())
		.then(res=> dispatch(setTimeLeft( parseInt(res))))
		.catch(() => {
			setError(true)
		});

	},[])

  return (
	<div className="option time-left">{error ? 'not data' : time.toString()}</div>
  )
}

export default TimeLeft
