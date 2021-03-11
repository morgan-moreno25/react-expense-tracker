import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/auth.slice';

import {
	Container,
	Button,
	FormControl,
	InputLabel,
	Paper,
	Typography,
	Input,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export default function LoginForm() {
	const dispatch = useDispatch();

	const authenticated = useSelector(state => state.auth.authenticated);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	if (authenticated) {
		return <Redirect to='/app' />;
	}

	const handleSubmit = async e => {
		e.preventDefault();

		const resultAction = await dispatch(login({ username, password }));

		if (login.fulfilled.match(resultAction)) {
			const { user } = resultAction.payload;

			console.log(user);
		} else {
			console.log(resultAction.payload);
		}
	};

	return (
		<Container id='login'>
			<Paper component='form' elevation={10} id='login-form'>
				<Typography variant='h3'>Login</Typography>
				<FormControl>
					<InputLabel htmlFor='username'>Username</InputLabel>
					<Input
						type='text'
						name='username'
						id='username'
						onChange={e => setUsername(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor='password'>Password</InputLabel>
					<Input
						type='password'
						name='password'
						id='password'
						onChange={e => setPassword(e.target.value)}
					/>
				</FormControl>
				<Link to='/register'>New user? Register here.</Link>
				<Button type='button' color='primary' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</Paper>
		</Container>
	);
}
