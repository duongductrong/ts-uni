import { Nullable, Maybe, Unpacked } from "@/common/neutral";
import { test } from "vitest";

test("Checking type: Unpacked", () => {
  type test1 = Expect<Equal<Unpacked<string[][]>, string>>;
  type test2 = Expect<Equal<Unpacked<number[][]>, number>>;
  type test3 = Expect<Equal<Unpacked<symbol>, symbol>>;
  type test4 = Expect<Equal<Unpacked<string[][][][]>, string>>;
});

test("Checking type: Nullable", () => {
  type test1 = Expect<Equal<Nullable<string>, string | null>>;
  type test2 = Expect<Equal<Nullable<number>, number | null>>;
  type test3 = Expect<Equal<Nullable<symbol>, symbol | null>>;
  type test4 = Expect<Equal<Nullable<string[][][][]>, string[][][][] | null>>;
});

test("Checking type: Maybe", () => {
  type test1 = Expect<Equal<Maybe<string>, string | null | undefined>>;
  type test2 = Expect<Equal<Maybe<number>, number | null | undefined>>;
  type test3 = Expect<Equal<Maybe<symbol>, symbol | null | undefined>>;
  type test4 = Expect<
    Equal<Maybe<string[][][][]>, string[][][][] | null | undefined>
  >;
});
