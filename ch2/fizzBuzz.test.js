function fizzBuzz(size) {
  let fizzBuzzArray = []

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
