export type Nullable<T> = T | null;
export type Optional<T> = Nullable<T> | undefined;

/**
 * isPresent - check if item is present (not null and not undefined)
 * @param item - item to check
 */
export function isPresent<T>(item: Optional<T>): item is T {
	return item !== null && item !== undefined;
}
