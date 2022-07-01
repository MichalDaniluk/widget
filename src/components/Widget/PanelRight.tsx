import React from 'react'
import { useAppSelector } from '../../app/hooks'

import Stripes from '../Stripes/Stripes'
import Options from '../Options'
import TimeLeft from '../TimeLeft'
import Error from './Error'

function PanelRight() {
	const errorInfo = useAppSelector(state => state.lightLevels.errorInfo)

  return (
	<div className="panel-right">
		<Stripes />
		<TimeLeft />
		<Options />
		<Error error={errorInfo}/>
	</div>
  )
}

export default PanelRight
