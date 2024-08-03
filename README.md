<p align="center">
  <!-- <img src="logo.svg" width="200px" align="center" alt="Zod logo" /> -->
  <h1 align="center">ts-uni</h1>
  <p align="center">
    ✨ <a href="https://github.com/duongductrong/ts-uni">ts-uni.dev</a> ✨
    <br/>
    Universal TypeScript Utilities
  </p>
</p>

<!-- [![Build Status](https://img.shields.io/github/actions/workflow/status/duongductrong/ts-uni/lint-and-type.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/duongductrong/ts-uni/actions?query=workflow%3ALint) -->

<!-- [![Build Size](https://img.shields.io/bundlephobia/minzip/ts-uni?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=ts-uni) -->

<p align="center">
<a href="https://github.com/duongductrong" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@duongductrong-4BBAAB.svg" alt="Created by Dan"></a>
<!-- <a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/colinhacks/ts-uni" alt="License"></a> -->
<a href="https://www.npmjs.com/package/ts-uni" rel="nofollow"><img src="https://img.shields.io/npm/dw/ts-uni.svg" alt="npm"></a>
<a href="https://www.npmjs.com/package/ts-uni" rel="nofollow"><img src="https://img.shields.io/github/stars/duongductrong/ts-uni" alt="stars"></a>
</p>

> [!WARNING]  
> This package is still in development, so it may not be stable yet.
> Please use it with caution.
> And the documentation may not be complete yet.

## Overview

`ts-uni` package to help you to work with typescript type easier.

## Installation

```bash
# npm
npm install ts-uni

# yarn
yarn add ts-uni

# pnpm
pnpm install ts-uni
```

## Basic Usage

Import and use a simple utility type

```ts
import { Chain } from "ts-uni";

const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

type Result = Chain<typeof obj>; // "a" | "a.b" | "a.b.c"
```

## React Usage

Utility types for React import from `ts-uni/react`

```tsx
import { ReactEventHandler } from "ts-uni/react";

const handleSomething: ReactEventHandler<"button", "onClick"> = (event) => {
  console.log("clicked", event);
};
```

## Contributing

If you have any useful types, please submit a pull request to the `src/` folder.

We will review and merge it as soon as possible.
