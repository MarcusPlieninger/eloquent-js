/* function loop(value, test, update, body) {
  while (test(value)) {
    body(value)
    value = update(value)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1 */


function loopWhile(n, test, update, body) {
  const result = []
  while (test(n)) {
    result.push(body(n))
    n = update(n)
  }
  return result
}

function loopFor(n, test, update, body) {
  const result = []
  for (n; test(n); update(n)) {
    result.push(body(n))
  }
  return result
}

describe('loopWhile()', () => {
  test('example from text', () => {
    expect(loopWhile(3, n => n > 0, n => n - 1, n => String(n))).toEqual(['3', '2', '1'])
  })
})

describe('loopFor()', () => {
  test('example from text', () => {
    expect(loopFor(3, n => n > 0, n => n - 1, n => String(n))).toEqual(['3', '2', '1'])
  })
})

// Note: Instead of console.log which does not return a value,
// the value is converted to a string and returned in an array
