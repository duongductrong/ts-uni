export type ChainKey<T> = T extends object
  ? {
      [K in keyof T]:
        | K
        // @ts-ignore
        | `${K}${ChainKey<T[K]> extends "" ? "" : "."}${ChainKey<T[K]>}`;
    }[keyof T]
  : "";
