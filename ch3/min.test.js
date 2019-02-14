function min(input1, input2) {
  // input validation - I explain why the order of the if statements matters here
  // then tests for array since isNaN would be positive for an array as well
  if (Array.isArray(input1) || Array.isArray(input2)) return 'Input cannot be an array.'
  // then tests for NaN (e.g., String, true)
  if (Number.isNaN(Number(input1)) || Number.isNaN(Number(input2))) return 'Please enter a number or floating point.'
  
  
  if input1 < input2 {
      return input2
  } else {
      return input1
  }
}
describe('invalid inputs', () => {  
    test('string', () => {
      expect(min('Dog', 5)).toBe('Please enter a number or floating point.')
    })
  
    test('empty string', () => {
      expect(min(10, '')).toBe('Please enter a number or floating point.')
    })
  
    test('zero', () => {
      expect(min(0)).toBe('Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.')
    })
  
    test('Boolean', () => {
      expect(min(false)).toBe('Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.')
    })
  
    test('floating point', () => {
      expect(min(2.4325)).toBe('Triangle size cannot be floating point.')
    })
  })