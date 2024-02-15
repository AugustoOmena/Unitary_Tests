const { sum } = require('./my-code')
const { sub } = require('./my-code')
const { mult } = require('./my-code')
const { div } = require('./my-code')

describe('calc functions', () => {
    it('sums 2 numbers', () => {
        expect(sum(1,2)).toBe(3)
    })

    it('subs 2 numbers', () => {
        expect(sub(2,1)).toBe(1)
    })

    it('mult 2 numbers', () => {
        expect(mult(2,2)).toBe(4)
    })

    it('div 2 numbers', () => {
        expect(div(2,2)).toBe(1)
    })
})
