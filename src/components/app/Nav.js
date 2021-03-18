import React from 'react';

import { Container, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<Container id='nav'>
			<List component='nav'>
				<ListItem button>
					<Link to='/app'>Dashboard</Link>
				</ListItem>
				<ListItem button>
					<Link to='/app/income'>Income</Link>
				</ListItem>
				<ListItem button>
					<Link to='/app/expenses'>Expenses</Link>
				</ListItem>
			</List>
		</Container>
	);
}
