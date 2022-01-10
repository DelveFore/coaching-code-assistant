/**
 * Full Credit to https://www.codewars.com/kata/5526fc09a1bbd946250002dc/typescript
 */
import findOutlier from './index'

describe('findOutlier', () => {
  it('Should return: 11 (the only odd number)', () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toStrictEqual(11)
  })
})
