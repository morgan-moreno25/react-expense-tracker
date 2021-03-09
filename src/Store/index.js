import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth.slice';
import expenseReducer from './slices/expense.slice';
import incomeReducer from './slices/income.slice';

export default configureStore({
	reducer: {
		auth: authReducer,
		expense: expenseReducer,
		income: incomeReducer,
	},
});
