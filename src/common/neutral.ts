/**
 * A unpacked type from primitive types.
 * @example
 * ```ts
 * const foo: Unpacked<string[][]> = "hello";
 * ```
 */
export type Unpacked<T extends any> = T extends (infer U)[] ? Unpacked<U> : T;

/**
 * A type that can be `null`.
 * @example
 * ```ts
 * const foo: Nullable<string> = null;
 * const bar: Nullable<number> = 42;
 * ```
 */
export type Nullable<T> = T | null;

/**
 * A type that can be `null` or `undefined`.
 * @example
 * ```ts
 * const foo: Nullish<string> = null;
 * const bar: Nullish<number> = undefined;
 * ```
 */
export type Nullish<T> = T | null | undefined;
