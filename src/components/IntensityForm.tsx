import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increaseLevel, deacreaseLevel } from '../features/lightLevel/lightLevelSlice'
import { getLevels } from '../utils/Common'

const IntensityForm = ({showError, clearError}:any) => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const dispatch = useAppDispatch()
	const levels = getLevels()

	const [index, setIndex] = useState(useAppSelector(state => state.lightLevels.index))

	const simulateResponse = () => {
		return new Promise((resolve, reject) => {
			resolve({
				response: 'OK'
			})
		})
	}

	const getData = (param:string) => {
		//const data = fetch( `${apiUrl}/${param}` )
		const data = simulateResponse()
		return data
	}

	const increase = () => {
		clearError()
		getData('increase-light-level')
		.then(() => {
			dispatch(increaseLevel())
			clearTimeout(time)
			clearError()
		})
		.catch(() => {
			showError(1)
		})

		const time = setTimeout(() => {
			showError(0)
		},5000)

	}

	const decrease = () => {
		clearError()
		getData('decrease-light-level')
		.then(() => {
			dispatch(deacreaseLevel())
			clearTimeout(time)
		})
		.catch(() => {
			showError(2)
		})

		const time = setTimeout(() => {
			showError(0)
		},5000)
	}


  return (
	<div className="intensity-form" data-testid="intensity-form">
		<div>
			<button className="button button-increase" onClick={ increase }> + </button>
		</div>
		<div className="button label-light-level">
			{levels[index]}%
		</div>
		<div>
			<button className="button button-decrease" onClick={ decrease } > - </button>
		</div>
	</div>
  )
}

export default IntensityForm
