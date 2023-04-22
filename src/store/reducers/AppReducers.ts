import { Reducer, Action } from 'redux';

import { AppState } from '@app/store/states/AppState';
import { itemReducerFactory } from '@app/store/reducers/ItemReducer';
import { User } from '@app/entities/User';
import { Card } from '@app/entities/Card';
import { listReducerFactory } from '@app/store/reducers/ListReducers';
import { Expense } from '@app/entities/Expense';

export type AppReducers = {
	[K in keyof AppState]: Reducer<AppState[K], Action>;
}

export const appReducers: AppReducers = {
	user: itemReducerFactory<User>('user'),
	card: itemReducerFactory<Card>('card'),

	cards: listReducerFactory<Card>('cards'),
	expenses: listReducerFactory<Expense>('expenses'),
};
