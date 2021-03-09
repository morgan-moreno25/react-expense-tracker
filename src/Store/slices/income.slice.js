import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tokenConfig from './tokenConfig';
import axios from 'axios';

export const getAllIncome = createAsyncThunk('income/getAll', async (_, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.get('/api/income', config);
		const payload = {
			income: response.data.income,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const addIncome = createAsyncThunk('income/add', async ({ category, amount }, thunkAPI) => {
	const body = JSON.stringify({ category, amount });
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.post('/api/income', body, config);
		const payload = {
			income: response.data.income,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const deleteIncome = createAsyncThunk('income/delete', async ({ id }, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.delete(`/api/income/${id}`, config);
		const payload = {
			id,
			income: response.data.income,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const incomeSlice = createSlice({
	name: 'income',
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllIncome.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(addIncome.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(deleteIncome.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAllIncome.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.income;
		});
		builder.addCase(addIncome.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data.push(payload.income);
		});
		builder.addCase(deleteIncome.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = state.data.filter(d => d.id !== payload.id);
		});
		builder.addCase(getAllIncome.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(addIncome.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(deleteIncome.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export default incomeSlice.reducer;
