function fizzBuzzPrelude(size) {
  const fizzBuzzArray = []

  for (let counter = 1; counter <= size; counter++) {
    if (counter % 3 === 0) {
      fizzBuzzArray.push('Fizz')
    } else if (counter % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    } else {
      fizzBuzzArray.push(counter)
    }
  }
  return fizzBuzzArray
}

describe('small inputs', () => {
  test('5', () => {
    expect(fizzBuzzPrelude(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz'])
  })
  test('10', () => {
    expect(fizzBuzzPrelude(10)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
    )
  })
  test('15', () => {
    expect(fizzBuzzPrelude(15)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']
    )
  })
})

describe('large inputs', () => {
  test('50', () => {
    expect(fizzBuzzPrelude(50)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'Fizz', 16, 17, 'Fizz', 19, 'Buzz',
        'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizz',
        31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz',
        41, 'Fizz', 43, 44, 'Fizz', 46, 47, 'Fizz', 49, 'Buzz']
    )
  })
  test('100', () => {
    expect(fizzBuzzPrelude(100)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'Fizz', 16, 17, 'Fizz', 19, 'Buzz',
        'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizz',
        31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz',
        41, 'Fizz', 43, 44, 'Fizz', 46, 47, 'Fizz', 49, 'Buzz',
        'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'Fizz',
        61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz',
        71, 'Fizz', 73, 74, 'Fizz', 76, 77, 'Fizz', 79, 'Buzz',
        'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'Fizz',
        91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']
    )
  })
})
