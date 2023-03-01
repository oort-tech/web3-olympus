# web3-olympus

[![NPM Package][npm-image]][npm-url]

This is a javascript package of [Olymplus][repo] with useful rpc interface.

Please read the [documentation][docs] for more.

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/web3-olympus) or using [Yarn](https://yarnpkg.com/package/web3-olympus)

### Using NPM

```bash
npm install web3-olympus
```

### Using Yarn

```bash
yarn add web3-olympus
```

## Usage

```js
const Olympus = require('web3-olympus');

const provider = 'https://dev-rpc.oortech.com';

const olympusRequest = new Olympus(provider);

// such as get block detail
olympusRequest.block(blockHash).then(r => console.log(r));
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: https://docs.computecoin.com/oort/for-developers/mainnet/rpc-interfaces/mcp
[repo]: https://github.com/computecoin-network/Olympus
[npm-image]: https://img.shields.io/npm/v/web3-olympus.svg
[npm-url]: https://npmjs.org/package/web3-olympus
