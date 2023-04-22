import { ItemState } from '@app/store/states/ItemState';
import { User } from '@app/entities/User';

export interface AppState {
	user: ItemState<User>;
}
