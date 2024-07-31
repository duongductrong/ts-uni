> [!WARNING]  
> This package is still in development, so it may not be stable yet.

## Overview

`ts-typex` package to help you to work with typescript type easier.

## Installation

```bash
# npm
npm install ts-typex

# yarn
yarn add ts-typex

# pnpm
pnpm install ts-typex
```

## Usage

Just import the utility type you need and use it like this

```ts
import { Unpacked } from "ts-typex";

type InferMyType = Unpacked<string[]>; // string | number | boolean
```

## Available utility types

In progress...
