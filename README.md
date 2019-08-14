# safe-assign

Extend your object without breaking its structure.

## Installtion

```
$ npm i safe-assign
```

## Usage

```javascript
// commonJs
const safeAssign = require('./safe-assign')
// or using esmodule
// import safeAssign from 'safe-assign'

// works like Object.assign
Object.assign({foo: 0}, {bar: 1}})
//=> {foo: 0, bar: 1}
safeAssign({foo: 0}, {bar: 1})
//=> {foo: 0, bar: 1}

Object.assign({foo: 0}, {foo: 1}, {foo: 2})
//=> {foo: 2}
safeAssign({foo: 0}, {foo: 1}, {foo: 2})
//=> {foo: 2}


// Difference
Object.assign({foo: 0}, {foo: '1'}, {foo: 1}, {foo: null})
//=> {foo: null} /* oops, foo is changed to another type */
safeAssign({foo: 0}, {foo: '1'}, {foo: 1}, {foo: null})
//=> {foo: 1} /* values whose type is different with original one will be omitted */

// Deep-copy
const target = {foo: 0}
const source = {bar: {baz: 1}}
safeAssign(target, source)
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
source.bar.baz = 2
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
```

## API

```
safeAssign(target, [source, ...])
```


