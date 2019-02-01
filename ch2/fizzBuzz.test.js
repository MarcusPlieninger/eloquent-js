function fizzBuzz(size) {
  const fizzBuzzArray = []

  for (let counter = 1; counter <= size; counter++) {
    // the test for 3 must precede the test for 5 because Buzz is valid if
    // and only if the number is not divisible by 3, otherwise Fizz applies
    if (counter % 3 === 0) {
      console.log('Fizz')
      fizzBuzzArray.push('Fizz')
      continue
    }
    if (counter % 5 === 0) {
      console.log('Buzz')
      fizzBuzzArray.push('Buzz')
      continue
    } else {
      console.log(counter)
      fizzBuzzArray.push(counter)
    }
  }
  return fizzBuzzArray
}

describe('small inputs', () => {
  test('5', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz'])
  })
  test('10', () => {
    expect(fizzBuzz(10)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
    )
  })
  test('15', () => {
    expect(fizzBuzz(15)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz']
    )
  })
})

describe('large inputs', () => {
  test('50', () => {
    expect(fizzBuzz(50)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'Fizz', 16, 17, 'Fizz', 19, 'Buzz',
        'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'Fizz',
        31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz',
        41, 'Fizz', 43, 44, 'Fizz', 46, 47, 'Fizz', 49, 'Buzz']
    )
  })
  test('100', () => {
    expect(fizzBuzz(100)).toEqual(
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
