import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../reducers/favourite';
import musicPlayerReducer from '../reducers/musicPlayer';
import searchReducer from '../reducers/search';

const bigReducer = combineReducers({
	search: searchReducer,
	favourite: favouriteReducer,
	musicPlayer: musicPlayerReducer,
});

const store = configureStore({
	reducer: bigReducer,
});

export default store;
