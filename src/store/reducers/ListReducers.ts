import { Action } from 'redux';

import { Optional } from '@app/entities/service/Nullable';
import { ListState } from '@app/store/states/ListState';
import { isListAction, ListActionType } from '@app/store/actions/ListActions';
import { WithId } from '@app/entities/service/WithId';

export function listReducer<T extends WithId>(_state: Optional<ListState<T>>, action: Action): ListState<T> {
	const state: ListState<T> = _state ?? { list: [] };
	if (!isListAction<T>(action)) return state;

	switch (action.type) {
	case ListActionType.Push:
		return {
			list: [...state.list, action.item],
		};

	case ListActionType.Update:
		return {
			list: state.list.map((item: T) => {
				if (item.id !== action.item.id) return item;

				return {
					...item,
					...action.item,
				};
			}),
		};

	case ListActionType.Remove:
		return {
			list: state.list.filter((item: T) => item.id !== action.id),
		};

	case ListActionType.Clear:
		return {
			list: [],
		};

	default:
		return state;
	}
}
