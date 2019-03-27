// in order to work with data in this file
const SCRIPTS = require('./scripts.js')

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script
    }
  }
  return null
}

function countBy(items, groupName) {
  const counts = []
  for (const item of items) {
    const name = groupName(item)
    const known = counts.findIndex(c => c.name === name)
    if (known === -1) {
      counts.push({ name, count: 1 })
    } else {
      counts[known].count++
    }
  }
  return counts
}

function dominantDirection(text) {
  const scripts = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ direction }) => direction !== 'none')

  const dominant = scripts.reduce((a, b) => (a.count > b.count ? a.name : b.name))
  return dominant
}

describe('dominantDirection()', () => {
  test('examples from text', () => {
    expect(dominantDirection('Hello!')).toEqual('ltr')
    expect(dominantDirection('Hey, مساء الخير')).toEqual('rtl')
  })
})

/* Describe how this code works */
