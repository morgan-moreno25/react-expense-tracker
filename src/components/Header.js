import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import MonetizationIcon from '@material-ui/icons/MonetizationOn';
import GithubIcon from '@material-ui/icons/GitHub';
import { Typography } from '@material-ui/core';

export default function Header() {
	const title = useSelector(state => state.app.title);
	const github = useSelector(state => state.app.githubLink);

	return (
		<AppBar id='main-header'>
			<Icon id='logo'>
				<MonetizationIcon fontSize='large'></MonetizationIcon>
			</Icon>
			<Typography variant='h3'>{title}</Typography>
			<Link href={github} id='github'>
				<GithubIcon fontSize='large'></GithubIcon>
			</Link>
		</AppBar>
	);
}
