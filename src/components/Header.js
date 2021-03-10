import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import MonetizationIcon from '@material-ui/icons/MonetizationOn';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Header() {
	const title = useSelector(state => state.app.title);
	const github = useSelector(state => state.app.githubLink);

	return (
		<AppBar id='main-header'>
			<Icon id='logo'>
				<MonetizationIcon fontSize='large'></MonetizationIcon>
			</Icon>
			<Typography variant='h3'>{title}</Typography>
			<div id='header-buttons'>
				<Link component={Button} to='/login' color='primary' variant='contained'>
					Login
				</Link>
				<Link component={Button} color='secondary' variant='contained' to='/register'>
					Register
				</Link>
			</div>
		</AppBar>
	);
}
