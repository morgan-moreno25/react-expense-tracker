import React from 'react';

import { Container } from '@material-ui/core';
import Nav from './Nav';
import Ledger from './Ledger';

export default function App() {
	return (
		<Container id='content' maxWidth='xl'>
			<Nav />
			<Ledger />
		</Container>
	);
}
