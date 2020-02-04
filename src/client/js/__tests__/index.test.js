import { formatResponse } from '../formHandler'

function itF(){
    expect(formatResponse(['test'])).toEqual('<ul><li>test</li></ul>')
}

function testF(){
    it('formatResponse', itF)
}

describe('formatResponse', testF)