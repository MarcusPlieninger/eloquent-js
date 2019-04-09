class Group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    this.members = this.members.filter(item => item !== value)
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(collection) {
    const group = new Group()
    for (const value of collection) {
      group.add(value)
    }
    return group
  }
}

class GroupIterator {
  constructor(group) {
    this.member = 0
    this.group = group
  }

  next() {
    if (this.member === this.member.length) return { done: true }

    const value = { member: this.group[this.member] }
    this.member++
    return { value, done: false }
  }
}

Group.prototype[Symbol.iterator] = function returnIterator() {
  return new GroupIterator(this)
}

function testIteration() {
  const testOutput = []
  for (const value of Group.from(['a', 'b', 'c'])) {
    testOutput.push(value)
    return testOutput
  }
}

describe('Group', () => {
  test('examples from text', () => {
    const group = Group.from([10, 20])
    expect(group.has(10)).toBe(true)
    expect(group.has(30)).toBe(false)
    group.add(10)
    expect(group.members).toEqual([10, 20])
    group.delete(10)
    expect(group.members).toEqual([20])
    expect(group.has(10)).toBe(false)
  })
})

describe('GroupIterator', () => {
  test('example from text', () => {
    expect(testIteration()).toEqual(['a', 'b', 'c'])
  })
})
