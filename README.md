# config-merge

A special utility for merging configuration files together. Intended to be used when combining multiple templates for Jest or Babel configurations.

## What Is It?

The `lodash.merge` function wrapped in a function that accepts variable arguments. Each argument should be a JavaScript object, and they all get merged together into a single object.

## How to Use

Install the library with `yarn add --dev @craigmiller160/config-merge`. Then use the library like this:

```javascript
const configMerge = require('@craigmiller160/config-merge');

const result = configMerge(obj1, obj2, obj3);
```
