/**
 * Represents a chain key for accessing nested properties of an object.
 * @template T - The type of the object.
 * @returns The chain key.
 * @example
 * ```ts
 * type Result = Chain<{ a: { b: { c: string } } }>; // "a" | "a.b" | "a.b.c"
 * ```
 */
export type Chain<T> = T extends object
  ? {
      [K in keyof T]:
        | K
        // @ts-ignore
        | `${K}${Chain<T[K]> extends "" ? "" : "."}${Chain<T[K]>}`;
    }[keyof T]
  : "";

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
