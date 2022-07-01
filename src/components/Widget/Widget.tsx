import React from 'react'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

import lightLevelSlice from '../../features/lightLevel/lightLevelSlice'
import WidgetContainer from './WidgetContainer'
import PanelLeft from './PanelLeft'
import PanelRight from './PanelRight'

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

  return (
	<Provider store={store} >
		<WidgetContainer>
			<PanelLeft name={name} />
			<PanelRight />
		</WidgetContainer>
	</Provider>
  )
}

export default Widget
