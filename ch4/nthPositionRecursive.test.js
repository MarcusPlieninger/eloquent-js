function nthPositionRecursive(inputList, position) {
  if (position === 0) return inputList.value
  if (inputList.rest === undefined) return undefined
  nthPositionRecursive(inputList.rest, position--)
}

// easier way is to convert list to array and then return the index of the array
function nthPostionRecursiveEasy(inputList, position) {
  const inputListAsArray = listToArrayRecursive(inputList)
  // indexOf returns -1 if the element is not in the array, hence this conditional statement
  if (position <= inputListAsArray.length && position >= 0) return inputListAsArray[position]
  return undefined
}

function listToArrayForLoop(inputList) {
  const outputArray = []
  for (let node = inputList; node; node = node.rest) {
    outputArray.push(node.value)
  }
  return outputArray
}

describe('nthPostionRecursive()', () => {
  test('3-element list, position in range', () => {
    expect(nthPositionRecursive(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 2
    )).toBe(5)
  })
  test('3-element list, position not in range', () => {
    expect(nthPositionRecursive(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 7
    )).toBe(undefined)
  })
})

describe('nthPostionRecursiveEasy()', () => {
  test('3-element list, property in list', () => {
    expect(nthPostionRecursiveEasy(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 2
    )).toBe(5)
  })
  test('3-element list, position not in range', () => {
    expect(nthPostionRecursiveEasy(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 7
    )).toBe(undefined)
  })
})
