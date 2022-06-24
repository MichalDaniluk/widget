import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setDuskTillDawn, setDuskTillDawnError } from '../features/lightLevel/lightLevelSlice'
import Switch from '../components/Switch'
import { toggleOption, setSwitchStatusFromDevice } from '../utils/Common'

const DaskTillDawn = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl) + '/dusktilldawn/'
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.duskTillDawn)
	const error = useAppSelector(state => state.lightLevels.duskTillDawnError)

	async function setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setDuskTillDawn(status), () =>setDuskTillDawnError() )
	}

  return (
	<Switch title="Dusk Till Dawn" error={error} currentStatus={currentStatus} SetSwitch={setSwitch} />
  )
}

export default DaskTillDawn
