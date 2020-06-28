# Building tree-shakable library with RollupJS

This is an example repository of a JavaScript library for the [Building tree-shakable library with RollupJS](#) article on the [Redd Developer](https://redd.one) portal.

## Getting started

```bash
$ git clone https://github.com/Redd-Developer/rollup-tree-shaking.git
$ cd rollup-tree-shaking
$ yarn install
```

## Verify

### One-line verification

Running the command below will build the library and the consumer application, and verify that the latter doesn't contain any unused modules from the library.

```bash
$ yarn test
```

### Manual verification

#### Build the library

```bash
$ yarn build
```

#### Build the consumer

Our library is tree-shakable if it's consumer's build only contains the library's modules that were used in the consumer application.

```bash
$ yarn build:consumer
```

> Note: This **is not** something you need to have as a part of your library's setup. This is a verification step of this article.

Inspect the `consumer/build/index.js` to see that the unused modules (`b.js`, and its `funcB`) are not present in the consumer's build.
