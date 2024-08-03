import {
  Concat,
  ExtractIndex,
  Pop,
  Push,
  Reverse,
  Shift,
  Unshift,
} from "@/common/array";
import { test } from "vitest";

test("Checking type: Push", () => {
  type test1 = Expect<Equal<Push<[], string>, [string]>>;
  type test2 = Expect<
    Equal<Push<[number, string], string>, [number, string, string]>
  >;
});

test("Checking type: Unshift", () => {
  type test1 = Expect<Equal<Unshift<[1, 2, 3], 4>, [4, 1, 2, 3]>>;
  type test2 = Expect<
    Equal<Unshift<[string, boolean], number>, [number, string, boolean]>
  >;
});

test("Checking type: Shift", () => {
  type test1 = Expect<Equal<Shift<[1, 2, 3]>, [2, 3]>>;
});

test("Checking type: Pop", () => {
  type test1 = Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>;
  type test2 = Expect<Equal<Pop<[string, number, boolean]>, [string, number]>>;
});

test("Checking type: Reverse", () => {
  type test1 = Expect<Equal<Reverse<[1, 2, 3, 4]>, [4, 3, 2, 1]>>;
  type test2 = Expect<
    Equal<Reverse<[string, number, boolean]>, [boolean, number, string]>
  >;
});

test("Checking type: Concat", () => {
  type test1 = Expect<Equal<Concat<[2], [1]>, [2, 1]>>;
  type test2 = Expect<
    Equal<Concat<[string, number], [symbol]>, [string, number, symbol]>
  >;
  type test3 = Expect<Equal<Concat<[], [1]>, [1]>>;
  type test4 = Expect<Equal<Concat<[], []>, []>>;
});

test("Checking type: ExtractIndex", () => {
  type test1 = Expect<Equal<ExtractIndex<[]>, "0">>;
  type test2 = Expect<Equal<ExtractIndex<[""]>, "0">>;
  type test3 = Expect<Equal<ExtractIndex<["", ""]>, "0" | "1">>;
  type test4 = Expect<Equal<ExtractIndex<symbol>, never>>;
  type test5 = Expect<Equal<ExtractIndex<number>, never>>;
  type test6 = Expect<Equal<ExtractIndex<string>, never>>;
  type test7 = Expect<Equal<ExtractIndex<never>, never>>;
  type test8 = Expect<Equal<ExtractIndex<[1, 2, 3, 4]>, "0" | "1" | "2" | "3">>;
});
