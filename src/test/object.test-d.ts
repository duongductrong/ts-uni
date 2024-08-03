import { Chain, Get } from "@/common/object";
import { test } from "vitest";

test("Checking type: Chain", () => {
  type Simple = { a: { b: string } };

  type Input = {
    a: {
      b: { d: string };
      x: [
        { y: string; k: { l: number } },
        { z2: string; k2: { l: number; m: [{ nested: number }] } }
      ];
      y: {
        a: {
          dddd: string;
        };
      };
    };
  };

  type Other = {
    a: { b: { c: string; d: number } };
    e: string;
    x: symbol;
    complex: [
      {
        k1: string;
      }
    ];
  };

  type Res = Chain<Other>;

  type test1 = Expect<Equal<Chain<Simple>, "a" | "a.b">>;
  type test2 = Expect<
    Equal<
      Chain<Input>,
      | "a"
      | "a.b"
      | "a.x"
      | "a.y"
      | "a.b.d"
      | "a.x.0"
      | "a.x.1"
      | "a.x.0.y"
      | "a.x.0.k"
      | "a.x.0.k.l"
      | "a.x.1.z2"
      | "a.x.1.k2"
      | "a.x.1.k2.l"
      | "a.x.1.k2.m"
      | "a.x.1.k2.m.0"
      | "a.x.1.k2.m.0.nested"
      | "a.y.a"
      | "a.y.a.dddd"
    >
  >;
  type test3 = Expect<
    Equal<
      Chain<Other>,
      | "a"
      | "e"
      | "x"
      | "complex"
      | "a.b"
      | "a.b.c"
      | "complex.0"
      | "a.b.d"
      | "complex.0.k1"
    >
  >;
});

test("Checking type: Get", () => {
  type Other = {
    a: { b: { c: string; d: number } };
    e: string;
    x: symbol;
    complex: [
      {
        k1: string;
      }
    ];
  };

  type test1 = Expect<Equal<Get<Other, "a.b.c">, string>>;
  type test2 = Expect<Equal<Get<Other, "x">, symbol>>;
  type test3 = Expect<Equal<Get<Other, "a.b.d">, number>>;
  type test4 = Expect<Equal<Get<Other, "complex.0.k1">, string>>;
});
