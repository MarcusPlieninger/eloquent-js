/*
This fancy solution uses automatic type conversion as well as the conditional
or ternary operator. It is much more concise, but less obvious.
*/

function fizzBuzzFancy(size) {
  const fizzBuzzArray = []
  for (let i = 1; i <= 100; i++) {
    fizzBuzzArray.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
  }
  return fizzBuzzArray
}

describe('large inputs', () => {
  test('100', () => {
    expect(fizzBuzzFancy(100)).toEqual(
      [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz',
        'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz',
        31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz',
        41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz',
        'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz',
        61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz',
        71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz',
        'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz',
        91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']
    )
  })
})
