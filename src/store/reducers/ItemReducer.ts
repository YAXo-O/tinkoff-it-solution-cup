import { Action } from 'redux';

import { ItemState } from '@app/store/states/ItemState';
import { isItemAction, ItemActionType } from '@app/store/actions/ItemActions';
import { isPresent, Optional } from '@app/entities/Nullable';

export function itemReducer<T>(_state: Optional<ItemState<T>>, action: Action): ItemState<T> {
	const state: ItemState<T> = _state ?? { item: null };
	if (!isItemAction<T>(action)) return state;

	switch (action.type) {
	case ItemActionType.Set:
		return {
			item: action.item,
		};

	case ItemActionType.Clear:
		return {
			item: null,
		};

	case ItemActionType.Update:
		if (!isPresent(state.item)) return state;

		return {
			item: {
				...state.item,
				...action.item,
			},
		};

	default:
		return state;
	}
}
