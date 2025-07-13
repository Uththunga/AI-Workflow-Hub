import { useState, useEffect, useRef } from 'react'
import { generateLLMResponse, generateStreamingLLMResponse, type ChatMessage } from '../services/llmService'

// Types and Interfaces
export interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}



export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Machan, your AI Workflow Assistant. I can help you navigate our website, explain our services, and guide you through AI workflow automation. What would you like to know?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const streamingMessageRef = useRef<string>('')

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when assistant opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Generate AI response using LLM
  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await generateLLMResponse(userMessage, conversationHistory)

      if (response.error) {
        console.warn('LLM API Error:', response.error)
        // Still return the fallback content even if there was an error
      }

      return response.content
    } catch (error) {
      console.error('Failed to generate LLM response:', error)
      return 'Hi! I\'m Machan. I\'m currently experiencing technical difficulties, so I can\'t provide my usual detailed responses right now. Please try asking your question again in a moment. If the issue persists, you can explore our website sections for information about AI workflow automation, or I\'ll do my best to help with basic questions using my offline capabilities.'
    }
  }

  // Generate streaming AI response using LLM
  const generateStreamingResponse = async (userMessage: string): Promise<void> => {
    try {
      setIsStreaming(true)
      const response = await generateStreamingLLMResponse(userMessage, conversationHistory)

      if (response.error) {
        console.warn('LLM Streaming API Error:', response.error)
      }

      // Create a new message for the streaming response
      const streamingMessageId = (Date.now() + 1).toString()
      const streamingMessage: Message = {
        id: streamingMessageId,
        content: '',
        isUser: false,
        timestamp: new Date()
      }

      // Add the empty message to start streaming
      setMessages(prev => [...prev, streamingMessage])
      streamingMessageRef.current = ''

      // Read the stream
      const reader = response.stream.getReader()

      try {
        while (true) {
          const { done, value } = await reader.read()

          if (done) break

          streamingMessageRef.current += value

          // Update the streaming message content
          setMessages(prev => prev.map(msg =>
            msg.id === streamingMessageId
              ? { ...msg, content: streamingMessageRef.current }
              : msg
          ))
        }
      } finally {
        reader.releaseLock()
      }

    } catch (error) {
      console.error('Failed to generate streaming LLM response:', error)

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Hi! I\'m Machan. I\'m having trouble processing your request right now, so I can\'t generate a proper response to your question. This is a technical issue on my end, not a problem with your question. Please try again in a moment, and I should be able to help you better. If you need immediate information, you can explore our website sections or ask me simple questions that I might be able to handle offline.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsStreaming(false)
    }
  }

  const handleSendMessage = async (useStreaming: boolean = true) => {
    if (!inputValue.trim() || isLoading || isStreaming) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    }

    // Add user message to conversation history
    const newUserChatMessage: ChatMessage = {
      role: 'user',
      content: userMessage.content
    }

    setMessages(prev => [...prev, userMessage])
    setConversationHistory(prev => [...prev, newUserChatMessage])
    setInputValue('')
    setError(null)

    try {
      if (useStreaming) {
        // Use streaming response for better UX
        await generateStreamingResponse(userMessage.content)

        // Add AI response to conversation history after streaming is complete
        const aiChatMessage: ChatMessage = {
          role: 'assistant',
          content: streamingMessageRef.current
        }
        setConversationHistory(prev => [...prev, aiChatMessage])
      } else {
        // Use non-streaming response as fallback
        setIsLoading(true)
        const response = await generateResponse(userMessage.content)

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          isUser: false,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, aiMessage])

        // Add AI response to conversation history
        const aiChatMessage: ChatMessage = {
          role: 'assistant',
          content: response
        }
        setConversationHistory(prev => [...prev, aiChatMessage])
      }
    } catch (err) {
      setError('Sorry, I encountered an error. Please try again.')
      console.error('AI Assistant error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(true)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end pointer-events-none
                    md:p-4">
      <div className="pointer-events-auto
                      w-full h-full
                      md:w-full md:max-w-md md:h-[600px] md:max-h-[80vh] md:rounded-2xl
                      bg-gradient-to-br from-dark-800/95 to-dark-900/95 backdrop-blur-xl
                      border-0 md:border border-cyber-500/30
                      shadow-2xl shadow-cyber-500/20
                      flex flex-col overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-cyber-600/20 to-electric-600/20 border-b border-cyber-500/30
                        p-4 md:p-4
                        min-h-[60px] md:min-h-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative
                              w-12 h-12 md:w-10 md:h-10
                              bg-gradient-to-br from-cyber-500 to-electric-500 rounded-xl flex items-center justify-center pulse-glow">
                <svg className="w-7 h-7 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="9" cy="9" r="1.5"/>
                  <circle cx="15" cy="9" r="1.5"/>
                  <circle cx="12" cy="15" r="1"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-lg font-bold text-white font-tech">Machan</h3>
                <p className="text-sm md:text-xs text-cyber-300 font-mono">AI.ASSISTANT.ONLINE</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200
                         p-3 md:p-2
                         hover:bg-cyber-600/20 rounded-lg
                         min-w-[44px] min-h-[44px] md:min-w-auto md:min-h-auto
                         flex items-center justify-center"
              aria-label="Close Machan"
            >
              <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto
                        p-3 md:p-4
                        space-y-3 md:space-y-4
                        scrollbar-thin scrollbar-thumb-cyber-600 scrollbar-track-dark-800
                        overscroll-behavior-contain">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[80%]
                           rounded-2xl
                           px-3 py-3 md:px-4 md:py-3
                           text-sm md:text-sm
                           ${
                  message.isUser
                    ? 'bg-gradient-to-r from-cyber-600 to-cyber-500 text-white ml-2 md:ml-4'
                    : 'bg-gradient-to-r from-dark-700 to-dark-600 text-gray-100 mr-2 md:mr-4 border border-cyber-500/20'
                }`}
              >
                {!message.isUser && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 md:w-6 md:h-6 bg-gradient-to-br from-cyber-500 to-electric-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5l-4.24 4.24M7.76 7.76L3.52 3.52m12.96 12.96l-4.24-4.24M7.76 16.24l-4.24 4.24"/>
                      </svg>
                    </div>
                    <span className="text-xs md:text-xs text-cyber-300 font-mono">MACHAN</span>
                  </div>
                )}
                <div className="text-sm md:text-sm leading-relaxed whitespace-pre-line break-words">
                  {message.content}
                </div>
                <div className="text-xs opacity-60 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {(isLoading || isStreaming) && (
            <div className="flex justify-start">
              <div className="max-w-[85%] md:max-w-[80%]
                              rounded-2xl
                              px-3 py-3 md:px-4 md:py-3
                              bg-gradient-to-r from-dark-700 to-dark-600 text-gray-100
                              mr-2 md:mr-4
                              border border-cyber-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 md:w-6 md:h-6 bg-gradient-to-br from-cyber-500 to-electric-500 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5l-4.24 4.24M7.76 7.76L3.52 3.52m12.96 12.96l-4.24-4.24M7.76 16.24l-4.24 4.24"/>
                    </svg>
                  </div>
                  <span className="text-xs md:text-xs text-cyber-300 font-mono">MACHAN</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-cyber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-cyber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm md:text-sm text-gray-300">
                    {isStreaming ? 'Generating response...' : 'Processing...'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 text-red-300 text-sm">
                {error}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-cyber-500/30
                        p-3 md:p-4
                        bg-dark-800/50 md:bg-transparent">
          <div className="flex items-end space-x-2 md:space-x-3">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about our services, navigation, or AI workflows..."
                disabled={isLoading || isStreaming}
                className="w-full bg-dark-700/50 border border-cyber-500/30 rounded-xl
                           px-4 py-4 md:px-4 md:py-3
                           text-base md:text-sm text-white placeholder-gray-400
                           focus:outline-none focus:border-cyber-400 focus:ring-2 focus:ring-cyber-400/20
                           transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                           min-h-[48px] md:min-h-auto"
              />
              {inputValue && (
                <button
                  onClick={() => setInputValue('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors
                             p-2 md:p-1
                             min-w-[32px] min-h-[32px] md:min-w-auto md:min-h-auto
                             flex items-center justify-center"
                >
                  <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={() => handleSendMessage(true)}
              disabled={!inputValue.trim() || isLoading || isStreaming}
              className="bg-gradient-to-r from-cyber-600 to-cyber-500 hover:from-cyber-500 hover:to-cyber-400 disabled:from-gray-600 disabled:to-gray-500 text-white
                         p-4 md:p-3
                         rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-cyber-500/25 hover:shadow-cyber-500/40
                         min-w-[48px] min-h-[48px] md:min-w-auto md:min-h-auto
                         flex items-center justify-center"
              aria-label="Send message"
            >
              <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-2 md:gap-2 mt-3">
            {[
              { label: 'Services', query: 'What services do you offer?' },
              { label: 'Navigation', query: 'How do I navigate the website?' },
              { label: 'Features', query: 'What features are available?' },
              { label: 'Getting Started', query: 'How do I get started with AI workflows?' },
              { label: 'Case Studies', query: 'Show me some case studies' },
              { label: 'Risk Assessment', query: 'Tell me about risk assessment' },
              { label: 'Test: Count R', query: 'How many r in Strawberry?' },
              { label: 'Test: Math', query: 'What is 25 + 17?' },
              { label: 'Test: Unclear Q', query: 'How do I implement this?' },
              { label: 'Test: Unknown', query: 'What is the weather today?' }
            ].map((action) => (
              <button
                key={action.label}
                onClick={() => setInputValue(action.query)}
                disabled={isLoading || isStreaming}
                className="text-xs md:text-xs
                           bg-cyber-600/20 hover:bg-cyber-600/30 active:bg-cyber-600/40
                           text-cyber-300
                           px-3 py-2 md:px-3 md:py-1
                           rounded-full border border-cyber-500/30 hover:border-cyber-400/50
                           transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                           min-h-[36px] md:min-h-auto
                           touch-manipulation"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
