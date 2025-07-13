import { useState } from 'react'
import { generateLLMResponse, checkLLMHealth } from '../services/llmService'
import { LLM_CONFIG } from '../config/llm'

export function LLMTestComponent() {
  const [testResult, setTestResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [healthStatus, setHealthStatus] = useState<boolean | null>(null)

  const testLLMConnection = async () => {
    setIsLoading(true)
    setTestResult('')
    
    try {
      // Test basic connection
      const response = await generateLLMResponse('Hello Machan, can you tell me about AI Workflow Hub?')
      
      if (response.error) {
        setTestResult(`❌ AI Error: ${response.error}\n\nFallback Response: ${response.content}`)
      } else {
        setTestResult(`✅ Machan Connected Successfully!\n\nResponse: ${response.content}`)
      }
    } catch (error) {
      setTestResult(`❌ Connection Failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const testHealthCheck = async () => {
    setIsLoading(true)
    try {
      const isHealthy = await checkLLMHealth()
      setHealthStatus(isHealthy)
    } catch (error) {
      setHealthStatus(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed top-4 left-4 z-50 bg-dark-800/95 backdrop-blur-xl rounded-xl border border-cyber-500/30 p-4 max-w-md">
      <h3 className="text-lg font-bold text-white mb-4">🧪 Machan AI Test</h3>
      
      {/* Configuration Info */}
      <div className="mb-4 text-sm">
        <div className="text-cyber-300">Model: {LLM_CONFIG.model}</div>
        <div className="text-cyber-300">API Key: {LLM_CONFIG.apiKey ? '✅ Configured' : '❌ Missing'}</div>
        <div className="text-cyber-300">Base URL: {LLM_CONFIG.baseURL}</div>
      </div>

      {/* Test Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={testHealthCheck}
          disabled={isLoading}
          className="btn-secondary text-xs px-3 py-2"
        >
          Health Check
        </button>
        <button
          onClick={testLLMConnection}
          disabled={isLoading}
          className="btn-primary text-xs px-3 py-2"
        >
          Test Machan
        </button>
      </div>

      {/* Health Status */}
      {healthStatus !== null && (
        <div className={`mb-2 text-sm ${healthStatus ? 'text-neon-400' : 'text-red-400'}`}>
          Health: {healthStatus ? '✅ Healthy' : '❌ Unhealthy'}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="text-cyber-300 text-sm mb-2">
          🔄 Testing connection...
        </div>
      )}

      {/* Test Results */}
      {testResult && (
        <div className="bg-dark-700/50 rounded-lg p-3 text-sm text-gray-300 whitespace-pre-wrap max-h-40 overflow-y-auto">
          {testResult}
        </div>
      )}
    </div>
  )
}
