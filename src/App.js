import React, { useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Ledger from './Components/Ledger';

export default function App() {
	return (
		<div className='App' id='app'>
			<Header />
			<Nav />
			<Ledger />
		</div>
	);
}
export default App;
