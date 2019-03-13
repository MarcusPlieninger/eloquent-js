function deepEqual(obj1, obj2) {
  if (typeof (obj1) !== 'object' || typeof (obj1) !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2
  }
  if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {
    return false
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
/*   test('symbol', () => {
    expect(deepEqual( , ).toBe()
    expect(deepEqual( , ).toBe()
  }) */
})

describe('objects', () => {
  test('objects of unequal length', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 2, b: 5, c: 4 })).toBe(false)
  })
})
