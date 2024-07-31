> [!WARNING]  
> This package is still in development, so it may not be stable yet.

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

## Usage

Just import the utility type you need and use it like this

```ts
import { Unpacked } from "ts-uni";

type A = Unpacked<string[]>; // string
type B = Unpacked<number[][][]>; // number
```

## Available utility types

In progress...
