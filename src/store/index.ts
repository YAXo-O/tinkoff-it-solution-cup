import { createStore, combineReducers } from 'redux';

import { appReducers } from '@app/store/reducers/AppReducers';

export const store = createStore(combineReducers(appReducers));
