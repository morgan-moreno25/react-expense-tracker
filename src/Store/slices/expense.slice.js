import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tokenConfig from './tokenConfig';
import axios from 'axios';

export const getAllExpense = createAsyncThunk('expense/getAll', async (_, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.get('/api/expense', config);
		const payload = {
			expense: response.data.expense,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const addExpense = createAsyncThunk(
	'expense/add',
	async ({ category, amount }, thunkAPI) => {
		const body = JSON.stringify({ category, amount });
		const config = tokenConfig(thunkAPI.getState);

		try {
			const response = await axios.post('/api/expense', body, config);
			const payload = {
				expense: response.data.expense,
			};
			return payload;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const deleteExpense = createAsyncThunk('expense/delete', async ({ id }, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.delete(`/api/expense/${id}`, config);
		const payload = {
			id,
			expense: response.data.expense,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const expenseSlice = createSlice({
	name: 'expense',
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(addExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(deleteExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAllExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.expense;
		});
		builder.addCase(addExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data.push(payload.expense);
		});
		builder.addCase(deleteExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = state.data.filter(d => d.id !== payload.id);
		});
		builder.addCase(getAllExpense.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(addExpense.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(deleteExpense.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	},
});

export default expenseSlice.reducer;
