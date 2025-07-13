import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AIAssistant } from '../AIAssistant'

// Mock scrollIntoView
beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

describe('AIAssistant', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn()
  }

  it('renders when open', () => {
    render(<AIAssistant {...defaultProps} />)

    expect(screen.getByText('Machan')).toBeInTheDocument()
    expect(screen.getByText('AI.ASSISTANT.ONLINE')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(<AIAssistant {...defaultProps} isOpen={false} />)

    expect(screen.queryByText('Machan')).not.toBeInTheDocument()
  })

  it('displays initial welcome message', () => {
    render(<AIAssistant {...defaultProps} />)

    expect(screen.getByText(/Hello! I'm Machan, your AI Workflow Assistant/)).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(<AIAssistant {...defaultProps} onClose={onClose} />)

    const closeButton = screen.getByRole('button', { name: /close machan/i })
    fireEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledOnce()
  })

  it('allows user to type and send messages', async () => {
    render(<AIAssistant {...defaultProps} />)
    
    const input = screen.getByPlaceholderText(/Ask me about our services/i)
    const sendButton = screen.getByRole('button', { name: /send message/i })
    
    fireEvent.change(input, { target: { value: 'What services do you offer?' } })
    fireEvent.click(sendButton)
    
    expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
    
    // Wait for AI response (fallback response should appear)
    await waitFor(() => {
      expect(screen.getByText(/I'm currently experiencing connectivity issues/)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('handles Enter key to send messages', () => {
    render(<AIAssistant {...defaultProps} />)
    
    const input = screen.getByPlaceholderText(/Ask me about our services/i)
    
    fireEvent.change(input, { target: { value: 'Test message' } })
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('displays quick action buttons', () => {
    render(<AIAssistant {...defaultProps} />)
    
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
  })

  it('populates input when quick action button is clicked', () => {
    render(<AIAssistant {...defaultProps} />)
    
    const servicesButton = screen.getByText('Services')
    fireEvent.click(servicesButton)
    
    const input = screen.getByPlaceholderText(/Ask me about our services/i) as HTMLInputElement
    expect(input.value).toBe('What services do you offer?')
  })

  it('shows loading state when processing message', async () => {
    render(<AIAssistant {...defaultProps} />)
    
    const input = screen.getByPlaceholderText(/Ask me about our services/i)
    const sendButton = screen.getByRole('button', { name: /send message/i })
    
    fireEvent.change(input, { target: { value: 'Test question' } })
    fireEvent.click(sendButton)
    
    // Should show loading indicator
    expect(screen.getByText('Generating response...')).toBeInTheDocument()
    
    // Wait for response
    await waitFor(() => {
      expect(screen.queryByText('Processing...')).not.toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('responds appropriately to different types of queries', async () => {
    render(<AIAssistant {...defaultProps} />)
    
    const input = screen.getByPlaceholderText(/Ask me about our services/i)
    const sendButton = screen.getByRole('button', { name: /send message/i })
    
    // Test services query
    fireEvent.change(input, { target: { value: 'What services do you offer?' } })
    fireEvent.click(sendButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Neural Workflow Assessment/)).toBeInTheDocument()
    }, { timeout: 3000 })
  })
})
