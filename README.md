# Judging Question Toolkit

[![version](https://img.shields.io/npm/v/judging-question-toolkit.svg)](https://www.npmjs.com/package/judging-question-toolkit)
[![download](https://img.shields.io/npm/dm/judging-question-toolkit.svg)](https://www.npmjs.com/package/judging-question-toolkit)

Toolkit for Judging Question

## Getting Started

```shell
npm install judging-question-toolkit
# yarn
yarn add judging-question-toolkit
# pnpm
pnpm install judging-question-toolkit
```

### Usage

- Diff the same part of **strings** between `Answer` and `Input`

```typescript
import { DiffAnsSame } from "judging-question-toolkit"

const res = DiffAnsSame("abcdfg", "cdefh")
console.log(res)

/**
 * Output:
 * [ [ 2, 3, 4 ], [ 0, 1, 3 ] ]
 */
```

For more, see the source code

### Thanks

The git commit messages are generated by [developer-helper-cli (DHC)](https://github.com/HerbertHe/developer-helper-cli)

### LICENSE

Open source under MIT
