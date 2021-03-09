import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tokenConfig from './tokenConfig';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
	const body = JSON.stringify({ username, password });
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const response = await axios.post('/api/auth', body, config);

		const payload = {
			token: response.data.access_token,
			user: response.data.user,
		};

		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const register = createAsyncThunk(
	'/auth/register',
	async ({ username, password }, thunkAPI) => {
		const body = JSON.stringify({ username, password });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const response = await axios.post('/auth/register', body, config);
			const payload = {
				token: response.data.access_token,
				user: response.data.user,
			};
			return payload;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const loadUser = createAsyncThunk('auth/loadUser', async (_, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.get('/api/auth/user', config);
		const payload = {
			user: response.data.user,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
		user: null,
		authenticated: false,
		isLoading: false,
		error: null,
	},
	reducers: {
		logout: state => {
			localStorage.removeItem('token');

			state.token = '';
			state.user = null;
			state.authenticated = false;
			state.isLoading = false;
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.error = null;
			state.isLoading = true;
		});
		builder.addCase(register.pending, state => {
			state.error = null;
			state.isLoading = true;
		});
		builder.addCase(loadUser.pending, state => {
			state.user = null;
			state.authenticated = false;
			state.error = null;
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			localStorage.setItem('token', payload.token);

			state.token = payload.token;
			state.user = payload.user;
			state.authenticated = true;
			state.isLoading = false;
		});
		builder.addCase(register.fulfilled, (state, { payload }) => {
			localStorage.setItem('token', payload.token);

			state.token = payload.token;
			state.user = payload.user;
			state.authenticated = true;
			state.isLoading = false;
		});
		builder.addCase(loadUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
			state.authenticated = true;
			state.isLoading = false;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(register.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});
		builder.addCase(loadUser.rejected, (state, { payload }) => {
			localStorage.removeItem('token');

			state.token = '';
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
