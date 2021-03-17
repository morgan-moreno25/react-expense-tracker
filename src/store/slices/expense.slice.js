import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tokenConfig from './tokenConfig';
import axios from 'axios';

export const getAllExpenses = createAsyncThunk('expense/getAll', async (_, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		const response = await axios.get('/api/expenses', config);
		const payload = {
			expenses: response.data.expenses,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
});
export const addExpense = createAsyncThunk(
	'expense/add',
	async ({ date, category, amount }, thunkAPI) => {
		const body = JSON.stringify({ date, category, amount });
		const config = tokenConfig(thunkAPI.getState);

		try {
			const response = await axios.post('/api/expenses', body, config);
			const payload = {
				expense: response.data.expense,
			};
			return payload;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
export const updateExpense = createAsyncThunk(
	'expense/update',
	async ({ id, expense: { category, amount } }, thunkAPI) => {
		const body = JSON.stringify({ category, amount });
		const config = tokenConfig(thunkAPI.getState);

		try {
			const response = await axios.put(`/api/expenses/${id}`, body, config);
			const payload = {
				id,
				updatedExpense: response.data.updatedExpense,
			};
			return payload;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
export const deleteExpense = createAsyncThunk('expense/delete', async ({ id }, thunkAPI) => {
	const config = tokenConfig(thunkAPI.getState);

	try {
		await axios.delete(`/api/expenses/${id}`, config);
		const payload = {
			id,
		};
		return payload;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
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
		builder.addCase(getAllExpenses.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(addExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(updateExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(deleteExpense.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAllExpenses.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.expenses;
		});
		builder.addCase(addExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data.push(payload.expense);
		});
		builder.addCase(updateExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			const index = state.data.findIndex(x => x.id === payload.id);
			if (index !== -1) {
				state.data.splice(index, 1, payload.updatedExpense);
			}
		});
		builder.addCase(deleteExpense.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = state.data.filter(d => d.id !== payload.id);
		});
		builder.addCase(getAllExpenses.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(addExpense.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(updateExpense.rejected, (state, { payload }) => {
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
