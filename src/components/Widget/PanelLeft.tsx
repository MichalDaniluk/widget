import React from 'react'

import IntensityForm from '../IntensityForm'

const PanelLeft = ( {name}:any ) => {

  return (
	<div className="panel-left">
		<span className="widget-name">{name}</span>
		<IntensityForm  />
	</div>
  )
}

export default PanelLeft
