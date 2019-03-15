function deepEqual(obj1, obj2) {
  if (typeof (obj1) !== 'object' || typeof (obj1) !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2
  }
  if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {
    return false
  }
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (!(key in obj2) || deepEqual(obj1.key, obj2.key)) {
        return false
      }
    }
  }
}

describe('inputs that are not objects', () => {
  test('Boolean', () => {
    expect(deepEqual(true, false)).toBe(false)
    expect(deepEqual(true, 3)).toBe(false)
  })
  test('null', () => {
    expect(deepEqual(null, null)).toBe(true)
    expect(deepEqual(null, 3)).toBe(false)
  })
  test('undefined', () => {
    expect(deepEqual(undefined, undefined)).toBe(true)
    expect(deepEqual(undefined, 'cat')).toBe(false)
  })
  test('number', () => {
    expect(deepEqual(3, 4)).toBe(false)
    expect(deepEqual(5, 5)).toBe(true)
  })
  test('string', () => {
    expect(deepEqual('cat', 'dog')).toBe(false)
    expect(deepEqual('cat', 'cat')).toBe(true)
  })
})

describe('inputs that are objects', () => {
  test('objects of unequal length', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 2, b: 5, c: 4 })).toBe(false)
  })
  test('examples from text', () => {
    const obj = { here: { is: 'an' }, object: 2 }
    expect(deepEqual(obj, obj)).toBe(true)
    expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false)
    expect(deepEqual(obj, { here: { is: 'an' }, object: 2 })).toBe(true)
  })
// use deep copy here to manipulate objects for test cases
  test('objects 1 to multiple layers deep', () => {
    const obj = { here: { is: 'an' }, object: 2 }
    expect(deepEqual(obj, obj)).toBe(true)
    expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false)
    expect(deepEqual(obj, { here: { is: 'an' }, object: 2 })).toBe(true)
  })
  test('object multiple layers deep', () => {
    const obj = { here: { is: 'an' }, object: 2 }
    expect(deepEqual(obj, obj)).toBe(true)
    expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false)
    expect(deepEqual(obj, { here: { is: 'an' }, object: 2 })).toBe(true)
  })
})

/* 
Sources used for this solution:
Raymond Gan's comments:
https://linkedin-jr-engineers.slack.com/archives/CDGH3LF2B/p1539795977000100
== vs ===: 
https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
Copying objects:
https://scotch.io/bar-talk/copying-objects-in-javascript
Object.prototype.hasOwnProperty.call():
https://stackoverflow.com/a/1963179/2175188
https://eslint.org/docs/rules/no-prototype-builtins
https://github.com/eslint/eslint/issues/7071
*/