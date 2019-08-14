# safe-assign

Extend your object without break its structure.

## Usage

```javascript
const safeAssign = require('./safe-assign')

// works like Object.assign
Object.assign({foo: 0}, {bar: 1}})
//=> {foo: 0, bar: 1}
safeAssign({foo: 0}, {bar: 1})
//=> {foo: 0, bar: 1}

safeAssign({foo: 0}, {foo: 1}, {foo: 2})
//=> {foo: 2}
safeAssign({foo: 0}, {foo: 1}, {foo: 2})
//=> {foo: 2}


// Diference
Object.assign({foo: 0}, {foo: '1'}, {foo: null})
//=> {foo: null} oops, foo is changed to another type
safeAssign({foo: 0}, {foo: '1'}, {foo: null})
//=> {foo: 0} foo is unchanged as typeof 0 !== typeof '1' !== typeof null

const target = {foo: 0}
const source = {bar: {baz: 1}}
safeAssign(target, source)
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
target.bar.baz = 2
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
```

## API

**safeAssign(target, [source, ...])**


