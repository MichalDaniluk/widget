import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setDuskTillDawn, setDuskTillDawnError } from '../features/lightLevel/lightLevelSlice'
import { Fetcher } from '../utils/Fetcher'
import { toggleOption } from '../utils/Common'

const DaskTillDawn = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl)
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.duskTillDawn)
	const error = useAppSelector(state => state.lightLevels.duskTillDawnError)

	async function set(value:boolean) {
		const status = toggleOption(value)

		Fetcher.fetchTimeout( apiUrl+'/duskTillDawn/'+status, 5000 )
		.then(response => response.json())
		.then(()=> dispatch(setDuskTillDawn(status)))
		.catch(() => {
			dispatch(setDuskTillDawnError())
		});
	}

  return (
	<div className="grid grid-cols-2 form-check form-switch mt-4">
    	<div><label className={`${error ? "error form-check-label inline-block text-white" : "form-check-label inline-block text-white"}`} htmlFor="flexSwitchCheckChecked">Dusk Till Dawn</label></div>
		<div><input onChange={ () => set(currentStatus) } className="items-end ml-12 form-check-input appearance-none w-9  rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={currentStatus}/></div>
  	</div>
  )
}

export default DaskTillDawn
