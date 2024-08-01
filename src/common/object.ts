/**
 * Represents a chain key for accessing nested properties of an object.
 * @template T - The type of the object.
 * @returns The chain key.
 * @example
 * ```ts
 * type Result = ChainKey<{ a: { b: { c: string } } }>; // "a" | "a.b" | "a.b.c"
 * ```
 */
export type ChainKey<T> = T extends object
  ? {
      [K in keyof T]:
        | K
        // @ts-ignore
        | `${K}${ChainKey<T[K]> extends "" ? "" : "."}${ChainKey<T[K]>}`;
    }[keyof T]
  : "";
