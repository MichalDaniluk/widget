import React from 'react'

import { useAppSelector } from '../../app/hooks'
import StripesContainer from './StripesContainer'

const Stripes = () => {

	const Levelindex = useAppSelector(state => state.lightLevels.index)
	const stripes = new Array(Levelindex).fill(1)

	return (
		<StripesContainer stripes={stripes} />
  )
}

export default Stripes
