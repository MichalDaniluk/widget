import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increaseLevel, deacreaseLevel } from '../features/lightLevel/lightLevelSlice'
import { getLevels, getData } from '../utils/Common'

const IntensityForm = ({showError, clearError}:any) => {

	const dispatch = useAppDispatch()
	const levels = getLevels()

	const index = useAppSelector(state => state.lightLevels.index)

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
			<button className="button button-increase" onClick={ ()=>increase() }> + </button>
		</div>
		<div className="button label-light-level">
			{levels[index]}%
		</div>
		<div>
			<button className="button button-decrease" onClick={ ()=>decrease() } > - </button>
		</div>
	</div>
  )
}

export default IntensityForm
