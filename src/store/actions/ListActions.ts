import { WithId } from '@app/entities/service/WithId';
import { AppState } from '@app/store/states/AppState';

export enum ListActionType {
	Push = 'LA_PUSH',
	Remove = 'LA_REMOVE',
	Update = 'LA_UPDATE',
	Clear = 'LA_CLEAR',
}

export interface PushListAction<T extends WithId> {
	item: T;
	type: ListActionType.Push;
	store: keyof AppState;
}

export interface UpdateListAction<T extends WithId> {
	item: Partial<T> & WithId;
	type: ListActionType.Update;
	store: keyof AppState;
}

export interface RemoveListAction {
	id: string;
	type: ListActionType.Remove;
	store: keyof AppState;
}

export interface ClearListAction {
	type: ListActionType.Clear;
	store: keyof AppState;
}

export interface ListActionFactory {
	push: <T extends WithId>(item: T) => PushListAction<T>;
	update: <T extends WithId>(item: Partial<T> & WithId) => UpdateListAction<T>;
	remove: (id: string) => RemoveListAction;
	clear: () => ClearListAction;
}

export type ListAction<T extends WithId> = PushListAction<T> | UpdateListAction<T> | RemoveListAction | ClearListAction;

export function isListAction<T extends WithId>(action: ListAction<T> | unknown): action is ListAction<T> {
	return (
		(action as ListAction<T>).type === ListActionType.Push
		|| (action as ListAction<T>).type === ListActionType.Update
		|| (action as ListAction<T>).type === ListActionType.Remove
		|| (action as ListAction<T>).type === ListActionType.Clear
	);
}

export function listActionFactory(store: keyof AppState): ListActionFactory {
	return {
		push: <T extends WithId>(item: T) => ({
			item,
			type: ListActionType.Push,
			store,
		}),
		update: <T extends WithId>(item: Partial<T> & WithId) => ({
			item,
			type: ListActionType.Update,
			store,
		}),
		remove: (id: string) => ({
			id,
			type: ListActionType.Remove,
			store,
		}),
		clear: () => ({
			type: ListActionType.Clear,
			store,
		}),
	};
}
