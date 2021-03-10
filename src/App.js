import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Ledger from './components/Ledger';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div className='App' id='app'>
				<Header />
				<Switch>
					<Route path='/' exact></Route>
					<Route path='/auth'></Route>
					<Route path='/app'>
						<Nav />
						<Ledger />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
