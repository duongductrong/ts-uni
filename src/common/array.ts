export type Push<T extends any[], V> = [...T, V];

export type Unshift<T extends any[], V> = [V, ...T];

export type Shift<T extends any[]> = T extends [unknown, ...infer U]
  ? U
  : never;

export type Pop<T extends any[]> = T extends [...infer U, unknown] ? U : never;

export type Reverse<T extends any[], R extends any[] = []> = {
  0: R;
  1: Reverse<Shift<T>, Unshift<R, T[0]>>;
}[T extends [] ? 0 : 1];

export type Concat<T extends any[], U extends any[]> = [...T, ...U];
