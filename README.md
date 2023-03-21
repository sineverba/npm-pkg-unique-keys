Unique Keys
===========

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Funique-keys.svg)](https://badge.fury.io/js/%40sineverba%2Funique-keys) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-unique-keys/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-unique-keys) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-unique-keys.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-unique-keys) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-unique-keys/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-unique-keys?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-unique-keys&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-unique-keys) |

> Generates unique keys for an array.

`uniqueKeys` adds __unique__ ID to an object.

## Why is it useful?

I use it when I need to iterate on an array, to fix the warning "Each Child in a List Should Have a Unique 'key' Prop"

### Installation
`npm install @sineverba/unique-keys`

### Usage

```js
import { uniqueKeys } from "@sineverba/unique-keys";

const data = [
    {
        key: "fooKey",
        value: "fooValue"
    },
    {
        key: "barKey",
        value: "barValue"
    }
];

const newData = uniqueKeys(data);

console.log(newData);

/**
 * It prints
 * 
 * [
    {
        key: "fooKey",
        value: "fooValue",
        uniqueKey: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
    },
    {
        key: "barKey",
        value: "barValue",
        uniqueKey: "710b962e-041c-11e1-9234-0123456789ab"
    }
];
 */

```

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
