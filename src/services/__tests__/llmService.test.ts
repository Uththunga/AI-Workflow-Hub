import { describe, it, expect, vi, beforeEach } from 'vitest'
import { generateLLMResponse, formatMessages, checkLLMHealth } from '../llmService'

// Mock the OpenAI module
vi.mock('openai', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [{
              message: {
                content: 'This is a test response from Mistral AI about our AI Workflow Hub services.'
              }
            }]
          })
        }
      }
    }))
  }
})

// Mock environment variables
vi.mock('../config/llm', () => ({
  LLM_CONFIG: {
    apiKey: 'test-api-key',
    model: 'mistralai/mistral-small-3.2-24b-instruct:free',
    baseURL: 'https://openrouter.ai/api/v1',
    maxTokens: 1000,
    temperature: 0.7,
    stream: false,
  },
  SYSTEM_PROMPT: 'You are an AI assistant for testing.',
  validateLLMConfig: vi.fn().mockReturnValue(true)
}))

describe('LLM Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('formatMessages', () => {
    it('should format messages correctly with system prompt', () => {
      const userMessage = 'What services do you offer?'
      const conversationHistory = [
        { role: 'user' as const, content: 'Hello' },
        { role: 'assistant' as const, content: 'Hi there!' }
      ]

      const formatted = formatMessages(userMessage, conversationHistory)

      expect(formatted).toHaveLength(4) // system + 2 history + current user message
      expect(formatted[0].role).toBe('system')
      expect(formatted[1].role).toBe('user')
      expect(formatted[1].content).toBe('Hello')
      expect(formatted[2].role).toBe('assistant')
      expect(formatted[2].content).toBe('Hi there!')
      expect(formatted[3].role).toBe('user')
      expect(formatted[3].content).toBe(userMessage)
    })

    it('should filter out system messages from conversation history', () => {
      const userMessage = 'Test message'
      const conversationHistory = [
        { role: 'system' as const, content: 'System message' },
        { role: 'user' as const, content: 'User message' },
        { role: 'assistant' as const, content: 'Assistant message' }
      ]

      const formatted = formatMessages(userMessage, conversationHistory)

      expect(formatted).toHaveLength(4) // system + 2 filtered history + current user message
      expect(formatted.filter(msg => msg.role === 'system')).toHaveLength(1)
    })
  })

  describe('generateLLMResponse', () => {
    it('should generate a response successfully', async () => {
      const userMessage = 'What services do you offer?'
      const response = await generateLLMResponse(userMessage)

      expect(response.content).toBe('This is a test response from Mistral AI about our AI Workflow Hub services.')
      expect(response.error).toBeUndefined()
    })

    it('should handle API errors gracefully', async () => {
      // Mock OpenAI to throw an error
      const OpenAI = await import('openai')
      const mockCreate = vi.fn().mockRejectedValue(new Error('API Error'))
      
      vi.mocked(OpenAI.default).mockImplementation(() => ({
        chat: {
          completions: {
            create: mockCreate
          }
        }
      } as any))

      const userMessage = 'Test message'
      const response = await generateLLMResponse(userMessage)

      expect(response.error).toBeDefined()
      expect(response.content).toContain('AI Workflow Hub') // Should contain fallback content
    })
  })

  describe('checkLLMHealth', () => {
    it('should return true when LLM is healthy', async () => {
      const isHealthy = await checkLLMHealth()
      expect(isHealthy).toBe(true)
    })

    it('should return false when LLM is unhealthy', async () => {
      // Mock the validateLLMConfig to return false
      const { validateLLMConfig } = await import('../config/llm')
      vi.mocked(validateLLMConfig).mockReturnValue(false)

      const isHealthy = await checkLLMHealth()
      expect(isHealthy).toBe(false)
    })
  })
})
