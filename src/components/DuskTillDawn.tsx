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
	<div className="option option-item">
		<label className={`${error ? "error" : ""}`}>Dusk Till Dawn</label>
		<input type="checkbox" onClick={ () => set(currentStatus) } />
	</div>
  )
}

export default DaskTillDawn
