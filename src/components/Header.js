import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import MonetizationIcon from '@material-ui/icons/MonetizationOn';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Header() {
	const title = useSelector(state => state.app.title);

	return (
		<AppBar id='main-header'>
			<Icon id='logo'>
				<MonetizationIcon fontSize='large'></MonetizationIcon>
			</Icon>
			<Typography variant='h2' id='header-title'>
				{title}
			</Typography>
			<div id='header-buttons'>
				<Link component={Button} to='/login' variant='contained' id='login-button'>
					Login
				</Link>
				<Link component={Button} variant='contained' to='/register' id='register-button'>
					Register
				</Link>
			</div>
		</AppBar>
	);
}
