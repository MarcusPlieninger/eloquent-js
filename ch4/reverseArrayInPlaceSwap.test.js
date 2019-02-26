function reverseArrayInPlaceSwap(arrayInput) {
  for (let i = 0; i < Math.floor(arrayInput.length / 2); i++) {
    const placeholder = arrayInput[i]
    arrayInput[i] = arrayInput[arrayInput.length - 1 - i]
    arrayInput[arrayInput.length - 1 - i] = placeholder
  }
  return arrayInput
}


describe('tests taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayInPlaceSwap(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
  test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(reverseArrayInPlaceSwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    )
  })
})

/*
Thinking back to the notes about side effects and pure functions in the previous chapter
(https://eloquentjavascript.net/03_functions.html#pure), which variant do you expect to be useful
in more situations? Which one runs faster?

As the array grows large, reverseArray using the unshift() method will be faster because there is
only one operation for each array element. If the array is really large, returning the new array
may be slower, in which case reverseArrayInPlace may be more efficient.

If the original input is still required for some reason (for example, for another piece
of code which requires the input in its original form), it is better to use the reverseArray
function. This will be useful in more situations where there are dependencies on the original
input.

If there are storage limitations with large arrays, it would make more sense to use
reverseArrayInPlace.
*/
