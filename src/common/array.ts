/**
 * Adds a value to the end of an array.
 *
 * @template T - The type of the array.
 * @template V - The type of the value to be added.
 * @param {T} arr - The array to which the value will be added.
 * @param {V} value - The value to be added to the array.
 * @returns {Push<T, V>} - The resulting array after adding the value.
 * @example
 * ```ts
 * type Result = Push<[1, 2], 3>; // [1, 2, 3]
 * ```
 */
export type Push<T extends any[], V> = [...T, V];

/**
 * Adds an element to the beginning of an array type.
 * @template T - The original array type.
 * @template V - The type of the element to be added.
 * @returns The resulting array type after adding the element.
 * @example
 * ```ts
 * type Result = Unshift<[2, 3], 1>; // [1, 2, 3]
 * ```
 */
export type Unshift<T extends any[], V> = [V, ...T];

/**
 * Removes the first element from an array type.
 * @template T - The array type.
 * @returns The remaining elements of the array type.
 * @example
 * ```ts
 * type Result = Shift<[1, 2, 3]>; // [2, 3]
 * ```
 */
export type Shift<T extends any[]> = T extends [unknown, ...infer U]
  ? U
  : never;

/**
 * Removes the last element from an array type.
 * @template T - The input array type.
 * @returns The array type without the last element.
 * @example
 * ```ts
 * type Result = Pop<[1, 2, 3]>; // [1, 2]
 * ```
 */
export type Pop<T extends any[]> = T extends [...infer U, unknown] ? U : never;

/**
 * Type-level utility to reverse the elements of an array.
 * @template T - The input array.
 * @template R - The resulting reversed array.
 * @returns The reversed array.
 * @example
 * ```ts
 * type Result = Reverse<[1, 2, 3]>; // [3, 2, 1]
 * ```
 */
export type Reverse<T extends any[], R extends any[] = []> = {
  0: R;
  1: Reverse<Shift<T>, Unshift<R, T[0]>>;
}[T extends [] ? 0 : 1];

/**
 * Concatenates two arrays.
 *
 * @template T - The type of the first array.
 * @template U - The type of the second array.
 * @param {T[]} arr1 - The first array.
 * @param {U[]} arr2 - The second array.
 * @returns {Concat<T, U>} - The concatenated array.
 * @example
 * ```ts
 * type Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
 * ```
 */
export type Concat<T extends any[], U extends any[]> = [...T, ...U];

/**
 * Extracts the index of each element in a tuple type.
 *
 * @template T - The tuple type from which to extract the indexes.
 * @template Indexes - The array of indexes.
 * @returns A string literal union representing the indexes of the elements in the tuple type.
 * @example
 * ```ts
 * type Result = ExtractIndex<[5, 3, 3, 10, 500]>; // "0" | "1" | "2" | "3" | "4"
 * ```
 */
export type ExtractIndex<
  T,
  Indexes extends number[] = []
> = T extends readonly [infer First, ...infer Rest]
  ? Rest extends never[]
    ? `${Indexes["length"]}`
    :
        | `${Indexes["length"]}`
        | ExtractIndex<Rest, [...Indexes, Indexes["length"]]>
  : T extends never[]
  ? "0"
  : never;
