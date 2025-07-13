import { Link } from 'react-router-dom'

export function IntroductionPage() {
  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'AI can process tasks 24/7 without breaks, significantly reducing processing time.',
      icon: '⚡'
    },
    {
      title: 'Reduced Errors',
      description: 'Automated systems eliminate human error in repetitive tasks and data processing.',
      icon: '✅'
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs through reduced manual labor and improved resource allocation.',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'AI systems can easily scale to handle increased workload without proportional cost increases.',
      icon: '📈'
    }
  ]

  const keyConsiderations = [
    'Data quality and availability',
    'Change management and employee training',
    'Integration with existing systems',
    'Compliance and regulatory requirements',
    'ROI measurement and success metrics',
    'Ongoing maintenance and updates'
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Introduction to AI Workflow Automation
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Understanding the fundamentals of transitioning from human-driven processes
              to AI-powered automation systems.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* What is AI Workflow Automation */}
        <section className="mb-16">
          <h2 className="section-title">What is AI Workflow Automation?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary-700 mb-6 text-lg leading-relaxed">
              AI workflow automation involves replacing or augmenting human-performed tasks with
              artificial intelligence systems. This transformation can range from simple rule-based
              automation to complex machine learning models that can adapt and learn from data.
            </p>
            <p className="text-secondary-700 mb-6 text-lg leading-relaxed">
              The goal is not to replace humans entirely, but to create a hybrid environment where
              AI handles repetitive, data-intensive, or time-sensitive tasks, while humans focus on
              strategic, creative, and relationship-building activities.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="section-title">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{benefit.icon}</div>
                  <div>
                    <h3 className="section-subtitle">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Workflows */}
        <section className="mb-16">
          <h2 className="section-title">Types of Workflows Suitable for AI</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="section-subtitle">Data Processing Workflows</h3>
              <p className="text-secondary-700">
                Tasks involving data entry, validation, transformation, and analysis.
                Examples include invoice processing, customer data management, and report generation.
              </p>
            </div>

            <div className="card">
              <h3 className="section-subtitle">Decision-Making Workflows</h3>
              <p className="text-secondary-700">
                Processes that involve evaluating criteria and making decisions based on predefined rules.
                Examples include loan approvals, inventory management, and quality control.
              </p>
            </div>

            <div className="card">
              <h3 className="section-subtitle">Communication Workflows</h3>
              <p className="text-secondary-700">
                Customer service interactions, email responses, appointment scheduling,
                and other communication-based processes.
              </p>
            </div>

            <div className="card">
              <h3 className="section-subtitle">Monitoring and Alert Workflows</h3>
              <p className="text-secondary-700">
                Continuous monitoring of systems, processes, or metrics with automated
                alerts and responses when thresholds are met.
              </p>
            </div>
          </div>
        </section>

        {/* Key Considerations */}
        <section className="mb-16">
          <h2 className="section-title">Key Considerations Before Starting</h2>
          <div className="card">
            <ul className="space-y-3">
              {keyConsiderations.map((consideration, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="section-title">Next Steps</h2>
          <div className="card">
            <p className="text-secondary-700 mb-6">
              Now that you understand the basics of AI workflow automation, you're ready to
              dive deeper into the process of identifying and evaluating workflows in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/workflow-guide"
                className="btn-primary"
              >
                Workflow Identification Guide
              </Link>
              <Link
                to="/best-practices"
                className="btn-secondary"
              >
                Best Practices
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
