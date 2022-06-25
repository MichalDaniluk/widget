import React, { useState} from 'react'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

import lightLevelSlice from '../features/lightLevel/lightLevelSlice'
import IntensityForm from './IntensityForm'
import Stripes from './Stripes'
import TimeLeft from './TimeLeft'
import Options from './Options'

import './Widget.css'

export type Props = {
	name:string
}

const Widget:React.FC<Props> = ( {name} ) => {

	const store = configureStore({
		reducer: {
			lightLevels: lightLevelSlice,
		}
	})

	const [errorInfo, setErrorInfo] = useState('')


const showError = (status:number) => {
	if( status === 0 ) setErrorInfo('Brak komunikacji z urzadzeniem')
	else if( status === 1 ) setErrorInfo('Nie mozna zwiekszyc poziomu oswietlenia')
	else if( status === 2 ) setErrorInfo('Nie mozna zmniejszyc poziomu oswietlenia')
	else setErrorInfo('Nie mozna zmienic poziomu oswietlenia')
}

const clearError = () => {
	setErrorInfo('')
}

  return (
	<Provider store={store} >
	<div className="main-container relative" data-testid="widget">
		<div className="panel-left">
			<span className="widget-name">{name}</span>
			<IntensityForm showError={showError} clearError={clearError} />
		</div>
		<div className="panel-right">
			<Stripes />
			{/*<TimeLeft />*/}
			<Options />
			<span className="text-red-600 absolute bottom-4 right-4">{errorInfo}</span>
		</div>
	</div>
	</Provider>
  )
}

export default Widget
