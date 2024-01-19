import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/search';

const bigReducer = combineReducers({
	search: searchReducer,
});

const store = configureStore({
	reducer: bigReducer,
});

export default store;
