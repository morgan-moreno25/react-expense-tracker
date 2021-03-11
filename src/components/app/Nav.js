import React, { useState } from 'react';

import { Container, Button, Paper, List, ListItem, ListItemIcon } from '@material-ui/core';
import { DashboardSharp, AttachMoneySharp, ExitToAppSharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Form from './Form';

export default function Nav() {
	return (
		<Container id='nav'>
			<List component='nav'>
				<ListItem button>
					<ListItemIcon>
						<DashboardSharp />
					</ListItemIcon>
					<Link to='/app'>Dashboard</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<AttachMoneySharp />
					</ListItemIcon>
					<Link to='/app/income'>Income</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ExitToAppSharp />
					</ListItemIcon>
					<Link to='/app/expenses'>Expenses</Link>
				</ListItem>
			</List>
		</Container>
	);
}
