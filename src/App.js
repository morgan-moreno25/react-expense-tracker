import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Ledger from './components/Ledger';

export default function App() {
	return (
		<div className='App' id='app'>
			<Header />
			<Nav />
			<Ledger />
		</div>
	);
}
