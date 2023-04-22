import { AppState } from '@app/store/states/AppState';

export enum ItemActionType {
	Set = 'IA_SET',
	Update = 'IA_UPDATE',
	Clear = 'IA_CLEAR',
}

// TODO: restrict store not by keyof state, but by typeof AppStore[keyof AppState] === ItemState

export interface SetItemAction<T> {
	item: T;
	type: ItemActionType.Set;
	store: keyof AppState;
}

export interface UpdateItemAction<T> {
	item: Partial<T>;
	type: ItemActionType.Update;
	store: keyof AppState;
}

export interface ClearItemAction {
	type: ItemActionType.Clear;
	store: keyof AppState;
}

export interface ItemActionFactory {
	set: <T>(item: T) => SetItemAction<T>;
	update: <T>(item: Partial<T>) => UpdateItemAction<T>;
	clear: () => ClearItemAction;
}

export type ItemAction<T> = SetItemAction<T> | UpdateItemAction<T> | ClearItemAction;

export function isItemAction<T>(action: ItemAction<T> | unknown): action is ItemAction<T> {
	return (
		action.type === ItemActionType.Set
		|| action.type === ItemActionType.Update
		|| action.type === ItemActionType.Clear
	);
}

export function itemActionFactory(store: keyof AppState): ItemActionFactory {
	return {
		set: <T>(item: T) => ({
			item,
			type: ItemActionType.Set,
			store,
		}),
		update: <T>(item: Partial<T>) => ({
			item,
			type: ItemActionType.Update,
			store,
		}),
		clear: () => ({
			type: ItemActionType.Clear,
			store,
		}),
	};
}
