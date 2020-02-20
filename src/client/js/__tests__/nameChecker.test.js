import { isUrlCorrect } from '../nameChecker'

describe('Name Checker', () => {
    it('should determine if URL is correct', () => {
        expect(isUrlCorrect('test')).toBe(false)
        expect(isUrlCorrect('http://test')).toBe(true)
        expect(isUrlCorrect('test.com')).toBe(false)
        expect(isUrlCorrect('http:')).toBe(false)
        expect(isUrlCorrect('https://levelup.gitconnected.com/kirill-novik-career-is-not-always-linear-it-is-a-journey-or-a-lab-experiment-132a72e74f4f')).toBe(true);
    })
})