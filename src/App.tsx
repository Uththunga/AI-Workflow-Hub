import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AIAssistant } from './components/AIAssistant'
import { AIAssistantButton } from './components/AIAssistantButton'


import { HomePage } from './pages/HomePage'
import { IntroductionPage } from './pages/IntroductionPage'
import { WorkflowGuidePage } from './pages/WorkflowGuidePage'
import { BestPracticesPage } from './pages/BestPracticesPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { RiskAssessmentPage } from './pages/RiskAssessmentPage'
import { ImplementationPage } from './pages/ImplementationPage'

export function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false)

  const handleToggleAssistant = () => {
    setIsAssistantOpen(!isAssistantOpen)
  }

  const handleCloseAssistant = () => {
    setIsAssistantOpen(false)
  }

  // Keyboard shortcut to open AI assistant (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        handleToggleAssistant()
      }
      // ESC to close assistant
      if (event.key === 'Escape' && isAssistantOpen) {
        handleCloseAssistant()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isAssistantOpen])

  return (
    <Router basename="/AI-Workflow-Hub">
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/workflow-guide" element={<WorkflowGuidePage />} />
            <Route path="/best-practices" element={<BestPracticesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/risk-assessment" element={<RiskAssessmentPage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
          </Routes>
        </main>
        <Footer />

        {/* AI Assistant Components */}
        <AIAssistantButton
          onClick={handleToggleAssistant}
          isAssistantOpen={isAssistantOpen}
        />
        <AIAssistant
          isOpen={isAssistantOpen}
          onClose={handleCloseAssistant}
        />

      </div>
    </Router>
  )
}
