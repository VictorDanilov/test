const some = require('../some')

describe('some', () => {
  it('should return 3', () => {
    const obj = {
      some: 3
    }

    expect(some(obj)).toBe(3)
  })
})
