import React from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { setDuskTillDawn, setDuskTillDawnError, setNightVision, setNightVisionError, setFlashing, setFlashingError } from '../features/lightLevel/lightLevelSlice'
import Switch from '../components/Switch'
import { toggleOption, setSwitchStatusFromDevice } from '../utils/Common'

function Options() {

	function NV_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(
			status,
			useAppSelector(state => state.lightLevels.apiUrl) + '/nightvision/',
			useAppDispatch(),
			() => setNightVision(status),
			() =>setNightVisionError()
		)
	}

	async function DTD_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(
			status,
			useAppSelector(state => state.lightLevels.apiUrl) + '/dusktilldawn/',
			useAppDispatch(),
			() => setDuskTillDawn(status),
			() =>setDuskTillDawnError()
		)
	}

	async function FL_setSwitch(value:boolean) {
		const status = toggleOption(value)
		setSwitchStatusFromDevice(
			status,
			useAppSelector(state => state.lightLevels.apiUrl) + '/flashing/',
			useAppDispatch(),
			() => setFlashing(status),
			() =>setFlashingError()
		)
	}

  return (
	<div>
		<Switch
			title="Night Vision"
			error={useAppSelector(state => state.lightLevels.nightVisionError)}
			currentStatus={useAppSelector(state => state.lightLevels.nightVision)}
			setSwitch={NV_setSwitch} />

		<Switch
			title="Dusk Till Dawn"
			error={useAppSelector(state => state.lightLevels.duskTillDawnError)}
			currentStatus={useAppSelector(state => state.lightLevels.duskTillDawn)}
			setSwitch={DTD_setSwitch} />

		<Switch
			title="Flashing"
			error={useAppSelector(state => state.lightLevels.flashingError)}
			currentStatus={useAppSelector(state => state.lightLevels.flashing)}
			setSwitch={FL_setSwitch} />
	</div>
  )
}

export default Options
