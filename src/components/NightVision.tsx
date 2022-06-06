import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setNightVision, setNightVisionError } from '../features/lightLevel/lightLevelSlice'
import { Fetcher } from '../utils/Fetcher'
import { toggleOption } from '../utils/Common'

const NightVision = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.nightVision)
	const error = useAppSelector(state => state.lightLevels.nightVisionError)

	async function set(value:boolean) {
		const status = toggleOption(value)

		Fetcher.fetchTimeout( apiUrl+'/nightvision/'+status, 5000 )
		.then(response => response.json())
		.then(()=> dispatch(setNightVision(status)))
		.catch(() => {
			dispatch(setNightVisionError())
		});
	}

  return (
	<div className="option option-item">
		<label className={`${error ? "error" : ""}`}>Night Vision</label>
		<input type="checkbox" onClick={ () => set(currentStatus) } />
	</div>
  )
}

export default NightVision
