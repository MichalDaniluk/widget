import React from 'react'
import StripesItem from './StripesItem'

const StripesContainer = ({stripes}:any) => {
  return (
	<div className="stripe-container">
		{
			stripes.map((_item:any,index:any) => <StripesItem key={index} />)
		}
	</div>
  )
}

export default StripesContainer
