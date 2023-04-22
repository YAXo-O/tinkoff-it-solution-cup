import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { appReducers } from '@app/store/reducers/AppReducers';

const config = {
	key: 'root',
	storage,
};

const reducer = combineReducers(appReducers);
const persistedReducer = persistReducer(config, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
