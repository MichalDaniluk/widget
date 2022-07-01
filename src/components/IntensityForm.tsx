import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increaseLevel, deacreaseLevel, setErrorInfo } from '../features/lightLevel/lightLevelSlice'
import { getLevels, getData } from '../utils/Common'

const IntensityForm = () => {

	const dispatch = useAppDispatch()
	const levels = getLevels()

	const index = useAppSelector(state => state.lightLevels.index)
	const [statusIncrease, setStatusIncrease] = useState('button button-increase')
	const [statusDecrease, setStatusDecrease] = useState('button button-decrease')
	const [error, setError] = useState('')


	const errorInfoHandle = (status:number) => {
		if( status === 0 ) setError('Brak komunikacji z urzadzeniem')
		else if( status === 1 ) setError('Nie mozna zwiekszyc poziomu oswietlenia')
		else if( status === 2 ) setError('Nie mozna zmniejszyc poziomu oswietlenia')
		else setError('Nie mozna zmienic poziomu oswietlenia')

		dispatch( setErrorInfo(error) )
	}

	const clearError = () => {
		setError('')
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
			errorInfoHandle(1)
		})

		const time = setTimeout(() => {
			errorInfoHandle(0)
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
			errorInfoHandle(2)
		})

		const time = setTimeout(() => {
			errorInfoHandle(0)
		},5000)

	}

	useEffect(() => {
		if( index > 4 ) setStatusIncrease('button button-increase disabled')
		else setStatusIncrease('button button-increase')

		if( index < 1 ) setStatusDecrease('button button-decrease disabled')
		else setStatusDecrease('button button-decrease')

	}, [index])

  return (
	<div className="intensity-form" data-testid="intensity-form">
		<div>
			<button className={statusIncrease} onClick={ ()=>increase() }> + </button>
		</div>
		<div className="button label-light-level">
			{levels[index]}%
		</div>
		<div>
			<button className={statusDecrease} onClick={ ()=>decrease() } > - </button>
		</div>
	</div>
  )
}

export default IntensityForm
