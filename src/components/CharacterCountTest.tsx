import { useState } from 'react'

export function CharacterCountTest() {
  const [testResult, setTestResult] = useState<string>('')

  const testCharacterCounting = () => {
    // Test the same logic used in fallback responses
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

    // Test cases
    const testCases = [
      { question: 'how many r in Strawberry', expected: 3 },
      { question: 'how many l in hello', expected: 2 },
      { question: 'how many a in banana', expected: 3 },
      { question: 'how many s in Mississippi', expected: 4 },
      { question: 'how many e in cheese', expected: 3 }
    ]

    let results = '🧪 Character Counting Test Results:\n\n'

    testCases.forEach(({ question, expected }) => {
      const parsed = parseCharCountQuestion(question)
      if (parsed) {
        const actual = countCharInWord(parsed.word, parsed.targetChar)
        const status = actual === expected ? '✅' : '❌'
        results += `${status} "${question}" → Expected: ${expected}, Got: ${actual}\n`
        
        // Show breakdown for Strawberry
        if (parsed.word.toLowerCase() === 'strawberry' && parsed.targetChar.toLowerCase() === 'r') {
          const breakdown = parsed.word.split('').map((char, index) => 
            char.toLowerCase() === parsed.targetChar.toLowerCase() ? `${char}(${index + 1})` : char
          ).join('-')
          results += `   Breakdown: ${breakdown}\n`
        }
      } else {
        results += `❌ Failed to parse: "${question}"\n`
      }
    })

    setTestResult(results)
  }

  return (
    <div className="fixed top-20 left-4 z-50 bg-dark-800/95 backdrop-blur-xl rounded-xl border border-cyber-500/30 p-4 max-w-md">
      <h3 className="text-lg font-bold text-white mb-4">🔤 Character Count Test</h3>
      
      <button
        onClick={testCharacterCounting}
        className="btn-primary text-sm px-4 py-2 mb-4"
      >
        Test Character Counting
      </button>

      {testResult && (
        <div className="bg-dark-700/50 rounded-lg p-3 text-sm text-gray-300 whitespace-pre-wrap max-h-60 overflow-y-auto font-mono">
          {testResult}
        </div>
      )}
    </div>
  )
}
