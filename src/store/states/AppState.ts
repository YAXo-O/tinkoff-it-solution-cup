import { ItemState } from '@app/store/states/ItemState';
import { User } from '@app/entities/User';
import { ListState } from '@app/store/states/ListState';
import { Card } from '@app/entities/Card';

export interface AppState {
	user: ItemState<User>; // Current user
	card: ItemState<Card>; // Active Card

	cards: ListState<Card>; // Card List
}
