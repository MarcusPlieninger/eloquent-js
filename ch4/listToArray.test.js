function listToArray(inputList) {
  const outputArray = []
  while ('value' in inputList) {
    outputArray.push(inputList.value)
    inputList = Object.assign({}, inputList.rest)
  }
  return outputArray
}

function prepend(element, inputList) {
  const outputList = {}
  outputList.value = element
  outputList.rest = Object.assign({}, inputList)
  return outputList
}

function nth(element, inputList) {
  let i = 0
  if (inputList.value === element) return i
  i++
  nth(element, inputList.rest)
  return 'The element is not in the list.'
}

describe('listToArray()', () => {
  test('empty list', () => {
    expect(listToArray({})).toEqual([])
  })
  test('list with 1 value', () => {
    expect(listToArray({ value: 3, rest: null })).toEqual([3])
  })
  test('list with 3 values', () => {
    expect(listToArray({ value: 1, rest: { value: 3, rest: { value: 5, rest: null } } })).toEqual(
      [1, 3, 5]
    )
  })
})

describe('prepend()', () => {
  test('prepend 1 element to list with 3 values', () => {
    expect(prepend(10, { value: 1, rest: { value: 3, rest: { value: 5, rest: null } } })).toEqual(
      {
        value : 10,
        rest  : {
          value : 1,
          rest  : {
            value : 3,
            rest  : {
              value : 5,
              rest  : null
            }
          }
        }
      }
    )
  })
})

describe('nth()', () => {
  test('empty list', () => {
    expect(nth({}, 5)).toBe('The element is not in the list.')
  })
  test('3-element list', () => {
    expect(nth({ value: 1, rest: { value: 3, rest: { value: 5, rest: null } } }, 5)).toBe(2)
  })
})
