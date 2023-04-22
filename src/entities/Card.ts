import { v4 } from 'uuid';

import { WithId } from '@app/entities/service/WithId';
import { Nullable } from '@app/entities/service/Nullable';

export enum CardType {
	Debit = 0,
	Credit = 1,
}

export interface Card extends WithId {
	name: string;
	limit: Nullable<number>;
	type: CardType;
}

export function toString(type: CardType): string {
	switch (type) {
	case CardType.Credit:
		return 'Кредитная карта';
	case CardType.Debit:
		return 'Дебетовая карта';

	default:
		return 'Неизвестный тип карты';
	}
}

export function getDefaultCard(): Card {
	return {
		id: v4(),
		name: '',
		limit: null,
		type: CardType.Debit,
	};
}
