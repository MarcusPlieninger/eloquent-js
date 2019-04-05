class Group {
  constructor() {
    this.items = [] 
  }

  add(value) {
    if (!this.items.includes(value)) this.items.push(value)
    return this.items
    }
  }

  delete(value) {
    if (this.items.includes(value)) {
      itemToDelete = this.items.Indexof(value)
      this.items = filter(this.items, value => this.items[i] !== value)
    } return this.items
  
  }

  has(value) {
    if (this.items.Indexof(value) !== -1) return true
    return false

  }

  static from() {
    for i of iterableObject
  }

}

describe('Group', () => {
  test('examples from text', () => {
    const group = Group.from([10, 20])
    expect(group.has(10)).toBe(true)
    expect(group.has(30)).toBe(false)
    expect(group.add(10)).toEqual([10, 20])
    expect(group.delete(10)).toEqual([20])
    expect(group.has(10)).toBe(false)
  })
})
