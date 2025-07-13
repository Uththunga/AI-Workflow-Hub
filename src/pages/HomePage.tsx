import { Link } from 'react-router-dom'

export function HomePage() {
  const stats = [
    { label: 'Workflows Automated', value: '10,000+', icon: '⚡' },
    { label: 'Hours Saved Daily', value: '50,000+', icon: '⏰' },
    { label: 'Organizations Served', value: '500+', icon: '🏢' },
    { label: 'Success Rate', value: '99.7%', icon: '🎯' }
  ]

  const features = [
    {
      title: 'Workflow Assessment',
      description: 'Advanced algorithms to identify and evaluate workflows suitable for automation.',
      icon: '🧠',
      link: '/workflow-guide',
      stats: '99.7% Accuracy'
    },
    {
      title: 'Best Practices',
      description: 'Discover proven strategies for seamless automation transitions.',
      icon: '⚡',
      link: '/best-practices',
      stats: '10x Faster'
    },
    {
      title: 'Risk Management',
      description: 'Understand and mitigate implementation risks with predictive analytics.',
      icon: '🛡️',
      link: '/risk-assessment',
      stats: '0.1% Risk'
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples and insights from successful implementations.',
      icon: '📊',
      link: '/case-studies',
      stats: '500+ Cases'
    },
    {
      title: 'Implementation Guide',
      description: 'Step-by-step guidance for deploying AI workflows in your organization.',
      icon: '🚀',
      link: '/implementation',
      stats: '24h Deploy'
    },
    {
      title: 'Getting Started',
      description: 'Comprehensive introduction to AI workflow automation fundamentals.',
      icon: '🤖',
      link: '/introduction',
      stats: 'Adaptive'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Transform Your Workflows with AI Automation
            </h1>
            <p className="hero-subtitle mb-8 max-w-3xl mx-auto">
              Discover how artificial intelligence can streamline your business processes, 
              reduce manual work, and unlock unprecedented efficiency across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/introduction"
                className="btn-primary btn-large"
              >
                Get Started
              </Link>
              <Link
                to="/workflow-guide"
                className="btn-outline btn-large"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to successfully transition from manual processes 
              to intelligent automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="card-feature group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">
                    {feature.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {feature.stats}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors duration-200">
                  {feature.title}
                </h3>

                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  <span className="text-sm">Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary section-padding text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of organizations that have successfully automated their processes 
              with AI-powered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/introduction"
                className="bg-white text-primary-600 hover:bg-blue-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Start Your Journey
              </Link>
              <Link
                to="/case-studies"
                className="border border-white/30 text-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
