import { v4 } from 'uuid';

import { WithId } from '@app/entities/service/WithId';

export interface Expense extends WithId {
	cardId: string;
	name: string;
	category: string;
	amount: number;
	date: number;
}

export function getDefaultExpense(cardId: string): Expense {
	return {
		id: v4(),
		cardId,
		name: '',
		category: '',
		amount: 0,
		date: 0,
	};
}
