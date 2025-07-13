export function Footer() {
  return (
    <footer className="bg-secondary-50 border-t border-secondary-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="9" cy="9" r="1.5"/>
                  <circle cx="15" cy="9" r="1.5"/>
                  <circle cx="12" cy="15" r="1"/>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-secondary-900">
                  AI Workflow Hub
                </h3>
                <p className="text-sm text-secondary-500">Automation Solutions</p>
              </div>
            </div>
            <p className="text-secondary-600 mb-6 leading-relaxed max-w-md">
              Transforming business processes through intelligent automation.
              Helping organizations transition from manual workflows to AI-powered systems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-xs text-secondary-500 uppercase tracking-wide">Uptime</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-xs text-secondary-500 uppercase tracking-wide">Support</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-secondary-200">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-xs text-secondary-500 uppercase tracking-wide">Clients</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/introduction" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="/workflow-guide" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Workflow Guide
                </a>
              </li>
              <li>
                <a href="/best-practices" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Best Practices
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/risk-assessment" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Risk Assessment
                </a>
              </li>
              <li>
                <a href="/implementation" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Implementation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-secondary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-500 text-sm">
              &copy; 2024 AI Workflow Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-xs text-secondary-500">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span>System Online</span>
              </div>
              <div className="text-xs text-secondary-500">
                Version 2.1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
