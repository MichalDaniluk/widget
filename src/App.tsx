import React from 'react'

import Widget from './components/Widget'

import './App.css';

const App = () => {

  return (

    <div className="App">
		<div className="panel" data-testid="app">
			<Widget name="HT8"/>
			<Widget name="HT8" />
			<Widget name="HT8" />
			<Widget name="HT8" />
			<Widget name="HT8" />
			<Widget name="HT8" />
			<Widget name="HT8" />
			<Widget name="HT8" />
		</div>
    </div>
  );
}

export default App;
