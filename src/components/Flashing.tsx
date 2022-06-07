import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setFlashing, setFlashingError } from '../features/lightLevel/lightLevelSlice'
import Switch from '../components/Switch'
import { toggleOption, setSwitchStatusFromDevice } from '../utils/Common'

const Flashing = () => {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl) + '/flashing/'
	const dispatch = useAppDispatch()

	const currentStatus = useAppSelector(state => state.lightLevels.flashing)
	const error = useAppSelector(state => state.lightLevels.flashingError)

	async function setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setFlashing(status), () =>setFlashingError() )
	}

  return (

	<Switch title="Night Vision" error={error} currentStatus={currentStatus} SetSwitch={setSwitch} />

	)
}

export default Flashing
