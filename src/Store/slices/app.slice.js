import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'app',
	initialState: {
		title: 'Rocket Finance',
		githubLink: 'https://www.github.com/morgan-moreno25',
	},
	reducers: {},
});

export const titleSelector = state => state.app.title;
export const githubSelector = state => state.app.githubLink;

export default appSlice.reducer;
