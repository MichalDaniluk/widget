import React from 'react'

import Widget from './components/Widget'

import './App.css';

const App = () => {

  return (

    <div className="App">
		<div className="panel" data-testid="app">
			<Widget name="APH 08"/>
			<Widget name="THR 08" />
			<Widget name="PAPI 08" />
			<Widget name="RWE REH" />
			<Widget name="SFL 26" />
			<Widget name="APH 26" />
			<Widget name="THR 26" />
			<Widget name="PAPI 26" />
		</div>
    </div>
  );
}

export default App;
