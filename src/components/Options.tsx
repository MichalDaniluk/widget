import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setDuskTillDawn, setDuskTillDawnError, setNightVision, setNightVisionError, setFlashing, setFlashingError } from '../features/lightLevel/lightLevelSlice'
import Switch from '../components/Switch'
import { toggleOption, setSwitchStatusFromDevice } from '../utils/Common'

function Options() {

	const apiUrl = useAppSelector(state => state.lightLevels.apiUrl) + '/nightvision/'
	const dispatch = useAppDispatch()


	const NV_currentStatus = useAppSelector(state => state.lightLevels.nightVision)
	const NV_error = useAppSelector(state => state.lightLevels.nightVisionError)

	async function NV_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setNightVision(status), () =>setNightVisionError() )
	}

	const DTD_currentStatus = useAppSelector(state => state.lightLevels.duskTillDawn)
	const DTD_error = useAppSelector(state => state.lightLevels.duskTillDawnError)

	async function DTD_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setDuskTillDawn(status), () =>setDuskTillDawnError() )
	}

	const FL_currentStatus = useAppSelector(state => state.lightLevels.flashing)
	const FL_error = useAppSelector(state => state.lightLevels.flashingError)

	async function FL_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(status, apiUrl, dispatch, () => setFlashing(status), () =>setFlashingError() )
	}

  return (
	<div>
		<Switch title="Night Vision" error={NV_error} currentStatus={NV_currentStatus} SetSwitch={NV_setSwitch} />
		<Switch title="Dusk Till Dawn" error={DTD_error} currentStatus={DTD_currentStatus} SetSwitch={DTD_setSwitch} />
		<Switch title="Flashing" error={FL_error} currentStatus={FL_currentStatus} SetSwitch={FL_setSwitch} />
	</div>
  )
}

export default Options
