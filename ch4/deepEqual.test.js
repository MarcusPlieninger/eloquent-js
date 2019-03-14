function deepEqual(obj1, obj2) {
  if (typeof (obj1) !== 'object' || typeof (obj1) !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2
  }
  if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {
    return false
  }
  for (const key in obj1) {
  }
}

describe('inputs that are not objects', () => {
  test('Boolean', () => {
    expect(deepEqual(true, false)).toEqual(false)
    expect(deepEqual(true, 3)).toEqual(false)
  })
  test('null', () => {
    expect(deepEqual(null, null)).toEqual(true)
    expect(deepEqual(null, 3)).toEqual(false)
  })
  test('undefined', () => {
    expect(deepEqual(undefined, undefined)).toEqual(true)
    expect(deepEqual(undefined, 'cat')).toEqual(false)
  })
  test('number', () => {
    expect(deepEqual(3, 4)).toEqual(false)
    expect(deepEqual(5, 5)).toEqual(true)
  })
  test('string', () => {
    expect(deepEqual('cat', 'dog')).toEqual(false)
    expect(deepEqual('cat', 'cat')).toEqual(true)
  })
})

describe('inputs that are objects', () => {
  test('objects of unequal length', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 2, b: 5, c: 4 })).toEqual(false)
  })
  test('deep comparison examples from text', () => {
    const obj = { here: { is: 'an' }, object: 2 }
    expect(deepEqual(obj, obj)).toEqual(true)
    expect(deepEqual(obj, { here: 1, object: 2 })).toEqual(false)
    expect(deepEqual(obj, { here: { is: 'an' }, object: 2 })).toEqual(true)
  })
})
