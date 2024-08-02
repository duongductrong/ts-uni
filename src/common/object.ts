/**
 * Represents a chain of keys in an object type.
 *
 * @template T - The object type.
 * @template K - The keys of the object type.
 * @returns The chain of keys.
 * @example
 * ```ts
 * type Example = {
 *  a: {
 *   b: { d: string };
 *   x: [
 *    { y: string; k: { l: number } },
 *    { z2: string; k2: { l: number; m: [{ nested: number }] } }
 *   ];
 *  y: {
 *   a: {
 *    dddd: string;
 *   };
 *  };
 * };
 *
 * type Result = Chain<Example>; // "a" | "a.b" | "a.x.0.y" | "a.x.0.k.l" | "a.x.1.z2" | "a.x.1.k2.l" | "a.x.1.k2.m.0.nested" | "a.y.a.dddd"
 * ```
 */
export type Chain<T, K extends keyof T = keyof T> = K extends string
  ? ExcludeArrayMethodsInChain<K> extends never
    ? never
    : T[K] extends Record<string, any>
    ? K | `${K}.${Chain<T[K]>}`
    : T[K] extends (infer U)[]
    ? K | `${K}.${number}.${Chain<U>}`
    : K
  : never;

type CheckArrayMethodsInChain = keyof any[];
type ExcludeArrayMethodsInChain<T> = T extends CheckArrayMethodsInChain
  ? never
  : T;

/**
 * Retrieves the value from an object based on the provided key.
 * Supports nested keys using dot notation.
 *
 * @template T - The type of the object.
 * @template K - The type of the key.
 * @param {T} obj - The object from which to retrieve the value.
 * @param {K} key - The key to retrieve the value for.
 * @returns {any} - The value associated with the provided key.
 * @example
 * ```ts
 * const obj = { a: { b: { c: "value" } } };
 * type CType = Get<typeof obj, "a.b.c"> // "string"
 * ```
 */
export type Get<T, K extends Chain<T>> = K extends `${infer K1}.${infer K2}`
  ? // @ts-ignore
    Get<T[K1], K2>
  : // @ts-ignore
    T[K];
