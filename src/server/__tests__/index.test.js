const { 
    getURL,
    unpackSummary
} = require('../utils')

it('should unpack req', () => {
    expect(getURL({})).toBe('')
    expect(getURL({ query: { url: 'http://test.com' } })).toBe('http://test.com')
})

it('should unpack summary', () => {
    expect(unpackSummary(null, { sentences: ['a', 'b']})).toEqual(['a', 'b'])
})
