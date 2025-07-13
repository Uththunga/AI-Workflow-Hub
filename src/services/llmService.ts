import OpenAI from 'openai'
import { LLM_CONFIG, SYSTEM_PROMPT, validateLLMConfig } from '../config/llm'

// Types
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface LLMResponse {
  content: string
  error?: string
}

export interface StreamingLLMResponse {
  stream: ReadableStream<string>
  error?: string
}

// Initialize OpenAI client for OpenRouter
let openai: OpenAI | null = null

const initializeClient = (): OpenAI | null => {
  if (!validateLLMConfig()) {
    return null
  }

  if (!openai) {
    openai = new OpenAI({
      apiKey: LLM_CONFIG.apiKey,
      baseURL: LLM_CONFIG.baseURL,
      dangerouslyAllowBrowser: true, // Required for client-side usage
    })
  }

  return openai
}

// Convert conversation history to OpenAI format
export const formatMessages = (userMessage: string, conversationHistory: ChatMessage[] = []): ChatMessage[] => {
  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT }
  ]

  // Add conversation history (excluding system messages)
  const historyMessages = conversationHistory.filter(msg => msg.role !== 'system')
  messages.push(...historyMessages)

  // Add current user message
  messages.push({ role: 'user', content: userMessage })

  return messages
}

// Generate response using Mistral AI
export const generateLLMResponse = async (
  userMessage: string,
  conversationHistory: ChatMessage[] = []
): Promise<LLMResponse> => {
  try {
    const client = initializeClient()
    if (!client) {
      throw new Error('LLM client not initialized. Please check your API configuration.')
    }

    const messages = formatMessages(userMessage, conversationHistory)

    const completion = await client.chat.completions.create({
      model: LLM_CONFIG.model,
      messages: messages,
      max_tokens: LLM_CONFIG.maxTokens,
      temperature: LLM_CONFIG.temperature,
      stream: false,
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      throw new Error('No response content received from the model')
    }

    return { content }
  } catch (error) {
    console.error('LLM API Error:', error)
    
    // Return fallback response with error info
    return {
      content: getFallbackResponse(userMessage),
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

// Generate streaming response using Mistral AI
export const generateStreamingLLMResponse = async (
  userMessage: string,
  conversationHistory: ChatMessage[] = []
): Promise<StreamingLLMResponse> => {
  try {
    const client = initializeClient()
    if (!client) {
      throw new Error('LLM client not initialized. Please check your API configuration.')
    }

    const messages = formatMessages(userMessage, conversationHistory)

    const completion = await client.chat.completions.create({
      model: LLM_CONFIG.model,
      messages: messages,
      max_tokens: LLM_CONFIG.maxTokens,
      temperature: LLM_CONFIG.temperature,
      stream: true,
    })

    // Create a readable stream from the OpenAI stream
    const stream = new ReadableStream<string>({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content
            if (content) {
              controller.enqueue(content)
            }
          }
          controller.close()
        } catch (error) {
          console.error('Streaming error:', error)
          controller.error(error)
        }
      }
    })

    return { stream }
  } catch (error) {
    console.error('LLM Streaming API Error:', error)
    
    // Return fallback stream with error info
    const fallbackContent = getFallbackResponse(userMessage)
    const fallbackStream = new ReadableStream<string>({
      start(controller) {
        // Simulate streaming by sending chunks
        const words = fallbackContent.split(' ')
        let index = 0
        
        const sendNextWord = () => {
          if (index < words.length) {
            controller.enqueue(words[index] + ' ')
            index++
            setTimeout(sendNextWord, 50) // 50ms delay between words
          } else {
            controller.close()
          }
        }
        
        sendNextWord()
      }
    })

    return {
      stream: fallbackStream,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

// Fallback responses when API is unavailable
const getFallbackResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()

  // Handle character counting questions
  const charCountMatch = userMessage.match(/how many ['"]?(\w)['"]? in ['"]?(\w+)['"]?/i)
  if (charCountMatch) {
    const [, targetChar, word] = charCountMatch
    const count = (word.toLowerCase().match(new RegExp(targetChar.toLowerCase(), 'g')) || []).length
    return `Hi! I'm Machan. Even though I'm experiencing connectivity issues, I can help with this!

In the word "${word}", the letter '${targetChar}' appears **${count} times**.

Let me break it down: ${word.split('').map((char, index) =>
      char.toLowerCase() === targetChar.toLowerCase() ? `${char}(${index + 1})` : char
    ).join('-')}

This demonstrates the kind of analytical capabilities I provide! Once I'm back online, I can help with more complex questions about our AI Workflow Hub.`
  }

  // Handle simple math questions
  const mathMatch = userMessage.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/i)
  if (mathMatch) {
    try {
      const result = eval(mathMatch[0])
      return `Hi! I'm Machan. Even offline, I can help with that calculation: ${mathMatch[0]} = ${result}

This showcases the computational power I bring to our workflow automation platform!`
    } catch {
      // Fall through to general response
    }
  }
  
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you offer')) {
    return `I'm currently experiencing connectivity issues, but I can tell you about our core services:

• **Neural Workflow Assessment** - AI algorithms with 99.7% accuracy to identify automation opportunities
• **Quantum Best Practices** - Machine learning strategies for 10x faster implementation
• **AI Risk Management** - Predictive analytics maintaining 0.1% risk factor
• **Data-Driven Case Studies** - 500+ analyzed real-world examples
• **Automated Implementation** - 24-hour deployment capability
• **AI Onboarding System** - Adaptive learning that grows with your needs

Please try again in a moment for more detailed assistance, or explore our website sections for comprehensive information.`
  }
  
  if (lowerMessage.includes('navigate') || lowerMessage.includes('help')) {
    return `Hi! I'm Machan, but I'm temporarily offline. Here's how to navigate our platform:

• **Introduction** - Start here for AI workflow fundamentals
• **Workflow Guide** - Detailed implementation guidance
• **Best Practices** - Proven strategies and methodologies
• **Case Studies** - Real-world success stories
• **Risk Assessment** - Evaluation and mitigation tools
• **Implementation** - Step-by-step deployment guide

Please refresh and try again for personalized assistance!`
  }
  
  return `Hi! I'm Machan, your AI assistant. I'm currently experiencing connectivity issues, so I can't access my full knowledge base or provide real-time responses.

However, I can share some basic information about our AI Workflow Hub platform based on what I know:
- We offer comprehensive automation solutions
- Our platform includes workflow assessment, best practices, and implementation guidance

For detailed and current information, I recommend:
- Exploring our website sections (Introduction, Workflow Guide, Best Practices, Case Studies, Implementation)
- Trying your question again in a moment when my connection is restored
- Browsing the navigation menu for specific topics

I apologize for the limitation and will provide much better assistance once I'm back online!`
}

// Health check for the LLM service
export const checkLLMHealth = async (): Promise<boolean> => {
  try {
    const client = initializeClient()
    if (!client) return false

    // Simple test request
    const response = await generateLLMResponse('Hello', [])
    return !response.error
  } catch {
    return false
  }
}

// Export configuration for debugging
export { LLM_CONFIG }
