# node-random-string

To create random string.

## Installation

To install node-random-string, use [npm](http://github.com/npm/npm):

```
npm i node-random-string -S
```

## Usage

```javascript
import randomString from 'node-random-string';

randomString();
/* '1Uobd2CVV2mXwc7F7yKCvLRVgUBDH3DB' */

randomString(12);
/* 'uU4u1QyytM4U' */

randomString({
  length: 12,
  charset: 'alphabetic'
});
/* 'nORLfqUfkuxn' */

randomstring({
  chars: 'abc'
});
/* 'bbcaaccbacccccbabacacbacabbcbccb' */

randomString({
  length: 12,
  upperCase: true
});
/* 'FQVI8YMT1D81' */
```

## API

`randomstring.`

- `generate(options)`
  - `length` - define the length of the string. (default: 32) [OPTIONAL]
  - `charset` - define the character set for the string. (default: [0-9 a-z A-Z]) [OPTIONAL]
    - `alphabetic` - [a-z A-Z]
    - `numeric` - [0-9]
  - `chars` - define the characters of the string. (default: null) [OPTIONAL]
  - `lowerCase` - define whether the output should be lowercase only. (default: null) [OPTIONAL]
  - `upperCase` - define whether the output should be uppercase only. (default: null) [OPTIONAL]

## Tests

```
npm install
npm test
```