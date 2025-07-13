import { describe, it, expect } from 'vitest'

// Test the character counting logic that's used in fallback responses
describe('Character Counting Logic', () => {
  const countCharInWord = (word: string, targetChar: string): number => {
    return (word.toLowerCase().match(new RegExp(targetChar.toLowerCase(), 'g')) || []).length
  }

  const parseCharCountQuestion = (message: string) => {
    const charCountMatch = message.match(/how many ['"]?(\w)['"]? in ['"]?(\w+)['"]?/i)
    if (charCountMatch) {
      const [, targetChar, word] = charCountMatch
      return { targetChar, word }
    }
    return null
  }

  describe('Character counting', () => {
    it('should count characters correctly in "Strawberry"', () => {
      expect(countCharInWord('Strawberry', 'r')).toBe(3)
      expect(countCharInWord('Strawberry', 'R')).toBe(3) // Case insensitive
      expect(countCharInWord('Strawberry', 'a')).toBe(1)
      expect(countCharInWord('Strawberry', 'b')).toBe(1)
      expect(countCharInWord('Strawberry', 'z')).toBe(0)
    })

    it('should handle various words correctly', () => {
      expect(countCharInWord('hello', 'l')).toBe(2)
      expect(countCharInWord('programming', 'm')).toBe(2)
      expect(countCharInWord('javascript', 'a')).toBe(2)
      expect(countCharInWord('artificial', 'i')).toBe(3)
    })

    it('should be case insensitive', () => {
      expect(countCharInWord('Hello', 'h')).toBe(1)
      expect(countCharInWord('Hello', 'H')).toBe(1)
      expect(countCharInWord('HELLO', 'l')).toBe(2)
    })
  })

  describe('Question parsing', () => {
    it('should parse character counting questions correctly', () => {
      expect(parseCharCountQuestion('how many r in Strawberry')).toEqual({
        targetChar: 'r',
        word: 'Strawberry'
      })

      expect(parseCharCountQuestion('How many "l" in "hello"')).toEqual({
        targetChar: 'l',
        word: 'hello'
      })

      expect(parseCharCountQuestion("How many 'a' in 'banana'")).toEqual({
        targetChar: 'a',
        word: 'banana'
      })
    })

    it('should return null for non-matching questions', () => {
      expect(parseCharCountQuestion('What is the weather?')).toBeNull()
      expect(parseCharCountQuestion('Tell me about AI')).toBeNull()
    })
  })

  describe('Real-world examples', () => {
    it('should handle the classic "Strawberry" question', () => {
      const result = parseCharCountQuestion('how many r in Strawberry')
      expect(result).not.toBeNull()
      if (result) {
        const count = countCharInWord(result.word, result.targetChar)
        expect(count).toBe(3)
      }
    })

    it('should handle other common test cases', () => {
      const testCases = [
        { question: 'how many l in hello', expected: 2 },
        { question: 'how many a in banana', expected: 3 },
        { question: 'how many s in Mississippi', expected: 4 },
        { question: 'how many e in cheese', expected: 3 }
      ]

      testCases.forEach(({ question, expected }) => {
        const result = parseCharCountQuestion(question)
        expect(result).not.toBeNull()
        if (result) {
          const count = countCharInWord(result.word, result.targetChar)
          expect(count).toBe(expected)
        }
      })
    })
  })
})
