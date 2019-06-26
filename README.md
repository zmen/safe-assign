# safe-assign

Substitution to Object.assign with deep assign and type safe

## Usage

```javascript
const safeAssign = require('./safe-assign')

safeAssign({foo: 0}, {bar: 1})
//=> {foo: 0, bar: 1}

safeAssign({foo: 0}, {foo: 1}, {foo: 2})
//=> {foo: 2}

safeAssign({foo: 0}, {foo: '1'}, {foo: null})
//=> {foo: 0}

const target = {foo: 0}
const source = {bar: {baz: 1}}
safeAssign(target, source)
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
target.bar.baz = 2
//=> JSON.stringify(target) === '{foo: 0, bar: {baz: 1}}'
```

## API

**safeAssign(target, [source, ...])**


