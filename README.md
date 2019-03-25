# lib-quote-scoring

Library for quote scoring calculations

## Installation

Add lib-quote-scoring to `package.json`
```json
"dependencies": {
  "lib-quote-scoring": "github:karhoo/lib-quote-scoring#semver:v0.2.0",
}
```

And then:
```console
npm i
```

## Usage

In app entry:

```js
import { init } from 'lib-quote-scoring'

init()
```

This will fetch remote scores config to be used in algorithm.

> Note: Library uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) - make sure to provide polyfill, if necessary.

Use library in a non-blocking manner:
```js
import { getPreferredQuote } from 'lib-quote-scoring'

const quote = getPreferredQuote([])
```

Or make sure that initialization is finished, before usage:
```js
import { init, getPreferredQuote } from 'lib-quote-scoring'

init().then(() => {
  const quote = getPreferredQuote([])
})
```

If you need more control over how config is provided, it is possible to use `createGetPreferredQuote` function:

```js
import { createGetPreferredQuote } from 'lib-quote-scoring/src/createGetPreferredQuote'

const getCustomConfig = () => {
  const config = {} // get custom config object somehow
  return config
}

const getPreferredQuote = createGetPreferredQuote(getCustomConfig)
```
