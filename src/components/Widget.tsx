import React from 'react'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

import lightLevelSlice from '../features/lightLevel/lightLevelSlice'
import IntensityForm from './IntensityForm'
import Stripes from './Stripes'
import TimeLeft from './TimeLeft'
import Options from './Options'

import './Widget.css'

type Props = {
	name:string
}

const Widget:React.FC<Props> = ( {name} ) => {

	const store = configureStore({
		reducer: {
			lightLevels: lightLevelSlice,
		}
	})

  return (
	<Provider store={store} >
	<div className="main-container">
		<div className="panel-left">
			<span className="widget-name">{name}</span>
			<IntensityForm />
		</div>
		<div className="panel-right">
			<Stripes />
			<TimeLeft />
			<Options />
		</div>
	</div>
	</Provider>
  )
}

export default Widget
