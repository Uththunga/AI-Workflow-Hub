# Machan - AI Assistant Integration

This document explains how Machan, your AI Assistant, is integrated with advanced language models through OpenRouter.

## Overview

Machan uses advanced AI technology to provide intelligent, context-aware responses about your AI Workflow Hub platform. Machan can handle both platform-specific questions and general analytical tasks like character counting, math problems, and logic puzzles.

## Configuration

### Environment Variables

Create a `.env` file in your project root with:

```env
VITE_OPENROUTER_API_KEY=your_api_key_here
VITE_OPENROUTER_MODEL=mistralai/mistral-small-3.2-24b-instruct:free
VITE_OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
```

**Note**: Get your API key from [OpenRouter](https://openrouter.ai/keys) and replace `your_api_key_here` with your actual key.

### LLM Configuration

The LLM settings are configured in `src/config/llm.ts`:

- **Model**: Advanced language model (free tier)
- **Max Tokens**: 1000
- **Temperature**: 0.7 (balanced creativity/consistency)
- **Streaming**: Enabled for real-time responses

## Features

### 🚀 Real-time Streaming Responses
- Messages appear word-by-word as the AI generates them
- Better user experience with immediate feedback
- Fallback to non-streaming if needed

### 🧠 Context-Aware Conversations
- Maintains conversation history
- Understands previous messages in the chat
- Provides coherent, contextual responses

### 🛡️ Error Handling & Fallbacks
- Graceful degradation when API is unavailable
- Fallback responses based on user queries
- Comprehensive error logging

### 📊 Health Monitoring
- Built-in health check functionality
- API status monitoring
- Configuration validation

### 🧮 Analytical Capabilities
- **Character Counting**: "How many 'r' in Strawberry?" → Detailed breakdown
- **Math Problems**: Basic arithmetic and calculations
- **Logic Puzzles**: Step-by-step reasoning
- **General Knowledge**: Accurate responses to diverse questions
- **Fallback Intelligence**: Smart responses even when API is offline

## System Prompt

Machan is configured with a comprehensive system prompt that includes:

- **Platform Knowledge**: Detailed information about AI Workflow Hub services
- **Website Structure**: Navigation guidance for all sections
- **Key Statistics**: 99.7% accuracy, 10x faster implementation, etc.
- **Brand Voice**: Professional, futuristic tone matching your design
- **Honesty & Transparency**: Core principles for trustworthy communication

## Communication Principles

### 🎯 Honesty and Accuracy
- Always provides truthful, accurate information
- Never fabricates or makes up answers when uncertain
- Bases responses on reliable knowledge, not speculation
- Prioritizes accuracy over appearing knowledgeable

### ❓ Acknowledging Uncertainty
- Explicitly states "I don't know" when lacking information
- Never guesses or provides potentially incorrect information
- Transparent about knowledge limitations
- Better to admit uncertainty than provide wrong information

### 🤔 Clarifying Questions
- Asks follow-up questions when user queries are unclear
- Proactively seeks clarification for better assistance
- Examples: "Could you clarify what specific aspect you're interested in?"
- Ensures understanding before providing answers

### 🔍 Transparent Communication
- Upfront about limitations regarding real-time information
- Clear about specialized technical details outside training
- Honest about personal/private information boundaries
- States when information might be outdated or incomplete

### 💡 Helpful Alternatives
- Suggests reliable sources when can't provide direct answers
- Offers related information that might be helpful
- Explains what would be needed to better assist
- Recommends appropriate website sections or resources

## Usage Examples

### Basic Query
```typescript
import { generateLLMResponse } from './services/llmService'

const response = await generateLLMResponse('What services do you offer?')
console.log(response.content)
```

### Streaming Response
```typescript
import { generateStreamingLLMResponse } from './services/llmService'

const { stream } = await generateStreamingLLMResponse('Tell me about AI workflows')
const reader = stream.getReader()

while (true) {
  const { done, value } = await reader.read()
  if (done) break
  console.log(value) // Each chunk of the response
}
```

### With Conversation History
```typescript
const conversationHistory = [
  { role: 'user', content: 'Hello' },
  { role: 'assistant', content: 'Hi! How can I help you today?' }
]

const response = await generateLLMResponse(
  'What are your best practices?', 
  conversationHistory
)
```

## API Costs

Using the **free tier** through OpenRouter:
- **Cost**: $0 (free tier)
- **Rate Limits**: Apply as per OpenRouter's free tier limits
- **Model**: Advanced language model (free tier)

## Testing

### Development Test Components

In development mode, test components appear for debugging:

**AI Test Component** (top-left):
- **Health Check**: Verify API connectivity
- **Test Machan**: Send a test message to the AI assistant
- **Configuration Display**: Shows current settings

**Character Count Test** (below LLM test):
- **Test Character Counting**: Verify analytical capabilities
- **Multiple Test Cases**: Strawberry, hello, banana, etc.
- **Breakdown Display**: Shows step-by-step counting

**Quick Test Buttons** (in chat interface):
- **Test: Count R**: "How many r in Strawberry?"
- **Test: Math**: "What is 25 + 17?"
- **Test: Unclear Q**: "How do I implement this?" (tests clarifying questions)
- **Test: Unknown**: "What is the weather today?" (tests uncertainty handling)

### Running Tests

```bash
npm test
```

Tests cover:
- Message formatting
- API error handling
- Fallback responses
- Health check functionality

## Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Verify the API key in `.env` file
   - Check OpenRouter account status
   - Ensure the key has proper permissions

2. **No Responses**
   - Check browser console for errors
   - Verify network connectivity
   - Test with the health check component

3. **Slow Responses**
   - Free tier may have rate limits
   - Consider upgrading to paid tier for better performance

4. **CORS Errors**
   - OpenRouter supports browser requests
   - Ensure `dangerouslyAllowBrowser: true` is set in OpenAI config

### Debug Mode

Enable debug logging by checking the browser console. All API errors and responses are logged for troubleshooting.

## Security Considerations

- API key is exposed in the browser (acceptable for OpenRouter)
- Rate limiting is handled by OpenRouter
- No sensitive data is sent to the model
- All conversations are ephemeral (not stored)

## Future Enhancements

- **Model Selection**: Allow users to choose different models
- **Custom Temperature**: Adjustable creativity settings
- **Response Caching**: Cache common responses for better performance
- **Analytics**: Track usage patterns and popular queries
- **Multi-language**: Support for different languages

## Support

For issues with the LLM integration:
1. Check the test component for connectivity
2. Review browser console for errors
3. Verify OpenRouter API status
4. Check environment configuration

Machan will gracefully fall back to static responses if the LLM is unavailable, ensuring users always receive helpful information about your platform.
