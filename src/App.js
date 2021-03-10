import React, { useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import Ledger from './components/Ledger';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';

export default function App() {
	return (
		<Router>
			<div className='App' id='app'>
				<Header />
				<Switch>
					<Route path='/' exact></Route>
					<Route path='/login'>
						<LoginForm />
					</Route>
					<Route path='/app'>
						<Nav />
						<Ledger />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
