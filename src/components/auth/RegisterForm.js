import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
	Container,
	Button,
	FormControl,
	InputLabel,
	Paper,
	Typography,
	Input,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container id='register'>
			<Paper component='form' elevation={10} id='register-form'>
				<Typography variant='h3'>Register</Typography>
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
				<Link to='/login'>Already have an account? Login here.</Link>
				<Button type='button' color='primary' variant='contained'>
					Submit
				</Button>
			</Paper>
		</Container>
	);
}
