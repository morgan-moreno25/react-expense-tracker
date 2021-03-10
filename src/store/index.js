import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/app.slice';
import authReducer from './slices/auth.slice';
import expenseReducer from './slices/expense.slice';
import incomeReducer from './slices/income.slice';

export default configureStore({
	reducer: {
		app: appReducer,
		auth: authReducer,
		expense: expenseReducer,
		income: incomeReducer,
	},
});
