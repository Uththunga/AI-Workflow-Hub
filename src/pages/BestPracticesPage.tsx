import { Link } from 'react-router-dom'

export function BestPracticesPage() {
  const practiceCategories = [
    {
      title: 'Planning and Strategy',
      icon: '📋',
      practices: [
        {
          title: 'Start Small and Scale Gradually',
          description: 'Begin with pilot projects to prove value before large-scale implementation.'
        },
        {
          title: 'Align with Business Objectives',
          description: 'Ensure automation initiatives support overall business strategy and goals.'
        },
        {
          title: 'Involve Stakeholders Early',
          description: 'Engage all affected parties from the beginning to ensure buy-in and smooth adoption.'
        },
        {
          title: 'Plan for Change Management',
          description: 'Develop comprehensive training and communication strategies for affected employees.'
        }
      ]
    },
    {
      title: 'Technical Implementation',
      icon: '⚙️',
      practices: [
        {
          title: 'Ensure Data Quality',
          description: 'Clean, validate, and standardize data before implementing AI solutions.'
        },
        {
          title: 'Design for Scalability',
          description: 'Build systems that can handle increased volume and complexity over time.'
        },
        {
          title: 'Implement Robust Monitoring',
          description: 'Set up comprehensive monitoring and alerting for automated processes.'
        },
        {
          title: 'Plan for Integration',
          description: 'Ensure new AI systems integrate seamlessly with existing infrastructure.'
        }
      ]
    },
    {
      title: 'Governance and Compliance',
      icon: '🛡️',
      practices: [
        {
          title: 'Establish Clear Governance',
          description: 'Define roles, responsibilities, and decision-making processes for AI initiatives.'
        },
        {
          title: 'Ensure Regulatory Compliance',
          description: 'Understand and address all relevant regulatory requirements and standards.'
        },
        {
          title: 'Implement Audit Trails',
          description: 'Maintain detailed logs of all automated decisions and actions for accountability.'
        },
        {
          title: 'Plan for Ethical Considerations',
          description: 'Address bias, fairness, and transparency in AI decision-making processes.'
        }
      ]
    },
    {
      title: 'Human-AI Collaboration',
      icon: '🤝',
      practices: [
        {
          title: 'Design Human-in-the-Loop Systems',
          description: 'Keep humans involved in critical decision points and exception handling.'
        },
        {
          title: 'Provide Comprehensive Training',
          description: 'Train employees to work effectively with AI systems and understand their capabilities.'
        },
        {
          title: 'Create Clear Escalation Paths',
          description: 'Define when and how to escalate issues from AI systems to human operators.'
        },
        {
          title: 'Foster a Culture of Collaboration',
          description: 'Promote AI as a tool to augment human capabilities, not replace them.'
        }
      ]
    }
  ]

  const commonPitfalls = [
    {
      title: 'Automating Broken Processes',
      description: 'Fix and optimize processes before automating them to avoid perpetuating inefficiencies.',
      solution: 'Conduct thorough process analysis and optimization before implementing AI solutions.'
    },
    {
      title: 'Insufficient Data Preparation',
      description: 'Poor data quality leads to unreliable AI performance and incorrect decisions.',
      solution: 'Invest time in data cleaning, validation, and standardization before deployment.'
    },
    {
      title: 'Lack of Change Management',
      description: 'Resistance from employees can derail even the best technical implementations.',
      solution: 'Develop comprehensive communication and training programs for all stakeholders.'
    },
    {
      title: 'Over-Automation',
      description: 'Automating everything without considering human oversight can lead to critical failures.',
      solution: 'Maintain human involvement in critical decisions and exception handling.'
    },
    {
      title: 'Inadequate Testing',
      description: 'Insufficient testing can result in unexpected failures in production environments.',
      solution: 'Implement comprehensive testing strategies including edge cases and failure scenarios.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Best Practices for AI Workflow Implementation
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Proven strategies and guidelines for successful human-to-AI workflow transitions
              based on industry experience and research.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Best Practices by Category */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-12">Core Best Practices</h2>
          <div className="space-y-12">
            {practiceCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="border-l-4 border-primary-600 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{practice.title}</h4>
                      <p className="text-gray-600 text-sm">{practice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-16">
          <h2 className="section-title">Common Pitfalls to Avoid</h2>
          <div className="space-y-6">
            {commonPitfalls.map((pitfall, index) => (
              <div key={index} className="card border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{pitfall.title}</h3>
                    <p className="text-gray-600 mb-3">{pitfall.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Solution:</strong> {pitfall.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="section-title">Measuring Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Operational Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Processing time reduction</li>
                <li>• Error rate improvement</li>
                <li>• Throughput increase</li>
                <li>• Cost per transaction</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Return on investment</li>
                <li>• Customer satisfaction</li>
                <li>• Employee productivity</li>
                <li>• Revenue impact</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Accuracy rates</li>
                <li>• Compliance adherence</li>
                <li>• System reliability</li>
                <li>• User adoption rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="section-title">Continue Your Journey</h2>
          <div className="card">
            <p className="text-gray-600 mb-6">
              Ready to dive deeper? Explore real-world case studies and learn about 
              risk assessment strategies for your AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/case-studies"
                className="btn-primary"
              >
                View Case Studies
              </Link>
              <Link
                to="/risk-assessment"
                className="btn-secondary"
              >
                Risk Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
