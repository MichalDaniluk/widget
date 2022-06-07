import React, { useEffect, useState} from 'react'

import { useAppSelector } from '../app/hooks'

const Stripes = () => {

	const Levelindex = useAppSelector(state => state.lightLevels.index)
	const stripes = new Array(Levelindex).fill(1)

	return (
	<div className="stripe-container">
		{
			stripes.map((_idx, key) => <div key={key} className="stripe-item"></div>)
		}
	</div>
  )
}

export default Stripes
