import React from 'react'

import IntensityForm from './IntensityForm'
import Stripes from './Stripes'
import TimeLeft from './TimeLeft'
import Options from './Options'

function MainContainer() {
  return (
	<div className="main-container">
		<div className="panel-left">
			<span className="widget-name">Nazwa</span>
			<IntensityForm />
		</div>
		<div className="panel-right">
			<Stripes />
			<TimeLeft />
			<Options />
		</div>
	</div>
  )
}

export default MainContainer
