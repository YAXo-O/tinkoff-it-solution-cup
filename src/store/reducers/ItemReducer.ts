import { Action } from 'redux';

import { ItemState } from '@app/store/states/ItemState';
import { isItemAction, ItemActionType, ItemAction } from '@app/store/actions/ItemActions';
import { isPresent, Optional } from '@app/entities/service/Nullable';
import { AppState } from '@app/store/states/AppState';

function itemReducer<T>(state: ItemState<T>, action: ItemAction<T>): ItemState<T> {
	switch (action.type) {
	case ItemActionType.Set:
		return {
			item: action.item,
		};

	case ItemActionType.Update:
		if (!isPresent(state.item)) return state;

		return {
			item: {
				...state.item,
				...action.item,
			},
		};

	case ItemActionType.Clear:
		return {
			item: null,
		};

	default:
		return state;
	}
}

export function itemReducerFactory<T>(store: keyof AppState) {
	return (_state: Optional<ItemState<T>>, action: Action) => {
		const state: ItemState<T> = _state ?? { item: null };
		if (!isItemAction<T>(action)) return state;

		if (store !== action.store) return state;

		return itemReducer(state, action);
	};
}
