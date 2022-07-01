import React from 'react'

const  WidgetContainer = (props:any)  => {
  return (
	<div className="main-container relative" data-testid="widget">
		{props.children}
	</div>
  )
}

export default WidgetContainer
