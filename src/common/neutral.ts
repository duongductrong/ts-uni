export type Unpacked<T extends any> = T extends (infer U)[] ? Unpacked<U> : T;

export type Nullable<T> = T | null;

export type Nullish<T> = T | null | undefined;
