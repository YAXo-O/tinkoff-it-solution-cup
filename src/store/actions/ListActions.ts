import { WithId } from '@app/entities/service/WithId';

export enum ListActionType {
	Push = 'LA_PUSH',
	Remove = 'LA_REMOVE',
	Update = 'LA_UPDATE',
	Clear = 'LA_CLEAR',
}

export interface PushListAction<T extends WithId> {
	item: T;
	type: ListActionType.Push;
}

export interface UpdateListAction<T extends WithId> {
	item: Partial<T> & WithId;
	type: ListActionType.Update;
}

export interface RemoveListAction {
	id: string;
	type: ListActionType.Remove;
}

export interface ClearListAction {
	type: ListActionType.Clear;
}

export interface ListActionFactory {
	push: <T extends WithId>(item: T) => PushListAction<T>;
	update: <T extends WithId>(item: Partial<T> & WithId) => UpdateListAction<T>;
	remove: (id: string) => RemoveListAction;
	clear: () => ClearListAction;
}

export type ListAction<T extends WithId> = PushListAction<T> | UpdateListAction<T> | RemoveListAction | ClearListAction;

export function isListAction<T extends WithId>(action: ListAction<T> | never): action is ListAction<T> {
	return (
		action.type === ListActionType.Push
		|| action.type === ListActionType.Update
		|| action.type === ListActionType.Remove
		|| action.type === ListActionType.Clear
	);
}

export const listActionFactory: ListActionFactory = {
	push: <T extends WithId>(item: T) => ({
		item,
		type: ListActionType.Push,
	}),
	update: <T extends WithId>(item: Partial<T> & WithId) => ({
		item,
		type: ListActionType.Update,
	}),
	remove: (id: string) => ({
		id,
		type: ListActionType.Remove,
	}),
	clear: () => ({
		type: ListActionType.Clear,
	}),
};
