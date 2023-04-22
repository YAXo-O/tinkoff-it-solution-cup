export enum ItemActionType {
	Set = 'IA_SET',
	Update = 'IA_UPDATE',
	Clear = 'IA_CLEAR',
}

export interface SetItemAction<T> {
	item: T;
	type: ItemActionType.Set;
}

export interface UpdateItemAction<T> {
	item: Partial<T>;
	type: ItemActionType.Update;
}

export interface ClearItemAction {
	type: ItemActionType.Clear;
}

export interface ItemActionFactory {
	set: <T>(item: T) => SetItemAction<T>;
	update: <T>(item: Partial<T>) => UpdateItemAction<T>;
	clear: () => ClearItemAction;
}

export type ItemAction<T> = SetItemAction<T> | UpdateItemAction<T> | ClearItemAction;

export function isItemAction<T>(action: ItemAction<T> | never): action is ItemAction<T> {
	return (
		action.type === ItemActionType.Set
		|| action.type === ItemActionType.Update
		|| action.type === ItemActionType.Clear
	);
}

export const itemActionFactory: ItemActionFactory = {
	set: <T>(item: T) => ({
		item,
		type: ItemActionType.Set,
	}),
	update: <T>(item: Partial<T>) => ({
		item,
		type: ItemActionType.Update,
	}),
	clear: () => ({
		type: ItemActionType.Clear,
	}),
};
