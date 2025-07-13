import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Introduction', href: '/introduction' },
    { name: 'Workflow Guide', href: '/workflow-guide' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Risk Assessment', href: '/risk-assessment' },
    { name: 'Implementation', href: '/implementation' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="bg-white border-b border-secondary-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-primary-700">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="9" cy="9" r="1.5"/>
                  <circle cx="15" cy="9" r="1.5"/>
                  <circle cx="12" cy="15" r="1"/>
                </svg>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-secondary-900">
                  AI Workflow Hub
                </span>
                <div className="text-xs text-secondary-500 uppercase tracking-wide">
                  Automation Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-100 text-primary-700 border border-primary-200'
                    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6">
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-secondary-200 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700 border border-primary-200'
                      : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
