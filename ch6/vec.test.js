class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus({ a, b }) {
    const sumX = this.x + a
    const sumY = this.y + b
    return new Vec(sumX, sumY)
  }

  minus({ a, b }) {
    const diffX = this.x - a
    const diffY = this.y - b
    return new Vec(diffX, diffY)
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

describe('Vec', () => {
  test('examples from text', () => {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).toMatchObject({ x: 3, y: 5 })
    expect(new Vec(1, 2).minus(new Vec(2, 3))).toMatchObject({ x: -1, y: -1 })
    expect((new Vec(3, 4).length)).toBe(5)
  })
})
