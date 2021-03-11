import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './store/slices/auth.slice';

import Header from './components/Header';
import Nav from './components/Nav';
import Ledger from './components/Ledger';
import LoginForm from './components/auth/LoginForm';

import { Container } from '@material-ui/core';

import './App.scss';
import RegisterForm from './components/auth/RegisterForm';

export default function Site() {
	const dispatch = useDispatch();

	const authenticated = useSelector(state => state.auth.authenticated);

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<Router>
			{authenticated ? <Redirect to='/app' /> : null}
			<div id='site'>
				<Header />
				<Container id='content' maxWidth='xl'>
					<Switch>
						<Route path='/' exact></Route>
						<Route path='/login'>
							<LoginForm />
						</Route>
						<Route path='/register'>
							<RegisterForm />
						</Route>
						<Route path='/app'>
							<Nav />
							<Ledger />
						</Route>
					</Switch>
				</Container>
			</div>
		</Router>
	);
}
