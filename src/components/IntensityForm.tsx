import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { increaseLevel, deacreaseLevel } from '../features/lightLevel/lightLevelSlice'
import { Fetcher } from '../utils/Fetcher'
import { getLevels } from '../utils/Common'

function IntensityForm() {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const dispatch = useAppDispatch()
	const levels = getLevels()

	const [index, setIndex] = useState(useAppSelector(state => state.lightLevels.index))

	const increase = () => {

		Fetcher.fetchTimeout( apiUrl + "/increaselight", 5000 )
		.then(response => response.json())
		.then(()=>dispatch(increaseLevel()))
		.catch(() => {
			dispatch(increaseLevel()) // for test only
			//alert('Nie mozna zwiekszyc wartosci, brak powierdzenia z urzadzenia')
		});
	}

	const decrease = () => {

		Fetcher.fetchTimeout( apiUrl + "/decreaselight", 5000 )
		.then(response => response.json())
		.then(()=>dispatch(deacreaseLevel()))
		.catch(() => {
			dispatch(deacreaseLevel()) // for test only
			//alert('Nie mozna zmniejszyc wartosci, brak powierdzenia z urzadzenia')
		});
	}


  return (
	<div className="intensity-form" data-testid="intensity-form">
		<div>
			<button className="button button-increase" onClick={() => { increase() }}> + </button>
		</div>
		<div className="button label-light-level">
			{levels[index]}%
		</div>
		<div>
			<button className="button button-decrease" onClick={ () => { decrease() }} > - </button>
		</div>
	</div>
  )
}

export default IntensityForm
