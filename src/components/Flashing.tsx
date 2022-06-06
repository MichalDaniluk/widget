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

		Fetcher.fetchTimeout( apiUrl+'/flashing/', 5000 )
		.then(response => response.json())
		.then(()=> dispatch(setFlashing(status)))
		.catch(() => {
			dispatch(setFlashingError())
		});
	}

  return (
	<div className="grid grid-cols-2 form-check form-switch mt-4">
    	<label className={`${error ? "error form-check-label inline-block text-white" : "form-check-label inline-block text-white"}`} htmlFor="flexSwitchCheckChecked">Flashing</label>
		<input onChange={ () => set(currentStatus) } className="ml-12 form-check-input appearance-none w-9  rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={currentStatus}/>
  	</div>
  )
}

export default Flashing
