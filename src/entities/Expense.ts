import { WithId } from '@app/entities/service/WithId';

export interface Expense extends WithId {
	cardId: string;
	title: string;
	category: string;
	amount: number;
	date: number;
}
