import { Reducer, Action } from 'redux';

import { AppState } from '@app/store/states/AppState';
import { itemReducer } from '@app/store/reducers/ItemReducer';
import { User } from '@app/entities/User';
import { Card } from '@app/entities/Card';
import { listReducer } from '@app/store/reducers/ListReducers';

export type AppReducers = {
	[K in keyof AppState]: Reducer<AppState[K], Action>;
}

export const appReducers: AppReducers = {
	user: itemReducer<User>,
	cards: listReducer<Card>,
};
