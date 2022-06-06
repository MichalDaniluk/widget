import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setFlashing, setFlashingError } from '../features/lightLevel/lightLevelSlice'
import { Fetcher } from '../utils/Fetcher'
import { toggleOption } from '../utils/Common'

const Flashing = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.flashing)
	const error = useAppSelector(state => state.lightLevels.flashingError)

	async function set(value:boolean) {
		const status = toggleOption(value)

		Fetcher.fetchTimeout( apiUrl+'/flashing/'+status, 5000 )
		.then(response => response.json())
		.then(()=> dispatch(setFlashing(status)))
		.catch(() => {
			dispatch(setFlashingError())
		});
	}

  return (
	<div className="option option-item">
		<label className={`${error ? "error" : ""}`}>Flashing</label>
		<input type="checkbox" onClick={ () => set(currentStatus) } />
	</div>
  )
}

export default Flashing
