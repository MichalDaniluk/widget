import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setNightVision, setNightVisionError } from '../features/lightLevel/lightLevelSlice'
import Switch from '../components/Switch'
import { toggleOption, setSwitchStatusFromDevice } from '../utils/Common'

const NightVision = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl) + '/nightvision/'
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.nightVision)
	const error = useAppSelector(state => state.lightLevels.nightVisionError)

	async function setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setNightVision(status), () =>setNightVisionError() )
	}

  return (

	<Switch title="Night Vision" error={error} currentStatus={currentStatus} SetSwitch={setSwitch} />

  )
}

export default NightVision
