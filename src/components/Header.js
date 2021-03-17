import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/auth.slice';

import { MonetizationOnRounded, AccountCircleSharp } from '@material-ui/icons';
import { AppBar, Button, Typography, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

function AuthButtons() {
	return (
		<div id='header-buttons'>
			<Button variant='contained' id='login-button'>
				<Link to='/login' variant='contained'>
					Login
				</Link>
			</Button>
			<Button variant='contained' id='register-button'>
				<Link to='/register' variant='contained' id='register-button'>
					Register
				</Link>
			</Button>
		</div>
	);
}
function NavButtons({ user }) {
	const dispatch = useDispatch();

	const handleLogout = async e => {
		dispatch(logout());
	};

	return (
		<div id='header-buttons'>
			<Button variant='contained' id='profile-button'>
				<Link to={`/profile/${user.username}`} id='profile-button'>
					<AccountCircleSharp /> Profile
				</Link>
			</Button>
			<Button id='logout-button' variant='contained'>
				<Link to='/' onClick={handleLogout}>
					Logout
				</Link>
			</Button>
		</div>
	);
}

export default function Header() {
	const title = useSelector(state => state.app.title);
	const { user, authenticated } = useSelector(state => state.auth);

	return (
		<AppBar id='main-header'>
			<Icon id='logo'>
				<MonetizationOnRounded fontSize='large' />
			</Icon>
			<Typography variant='h2' id='header-title'>
				{title}
			</Typography>
			{authenticated ? <NavButtons user={user} /> : <AuthButtons />}
		</AppBar>
	);
}
