import React, { useEffect, useState} from 'react'

import { useAppSelector } from '../app/hooks'

const Stripes = () => {

	const index = useAppSelector(state => state.lightLevels.index)
	const [arr, setArr] = useState(new Array(index))

	const initArray = () => {
		let _arr = []
		for(let i = 0; i < index; i++) {
			_arr.push(1)
		}
		return _arr
	}

	useEffect(() => {
		setArr( initArray() )
	},[index])


	return (
	<div className="stripe-container">
		{arr.map((i,key) => <div key={key} className="stripe-item"></div>)}
	</div>
  )
}

export default Stripes
