import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../reducers/favourite';
import searchReducer from '../reducers/search';

const bigReducer = combineReducers({
	search: searchReducer,
	favourite: favouriteReducer,
});

const store = configureStore({
	reducer: bigReducer,
});

export default store;
