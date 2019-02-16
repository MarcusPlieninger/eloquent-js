function countCharacter(theString, theCharacter) {
  let counter = 0
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] === theCharacter) {
      counter++
    }
  }
  return counter
}
