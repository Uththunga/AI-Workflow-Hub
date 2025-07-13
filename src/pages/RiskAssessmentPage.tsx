import { Link } from 'react-router-dom'

export function RiskAssessmentPage() {
  const riskCategories = [
    {
      title: 'Technical Risks',
      icon: '⚙️',
      color: 'red',
      risks: [
        {
          risk: 'System Integration Failures',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Thorough testing, phased rollout, backup systems'
        },
        {
          risk: 'Data Quality Issues',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Data validation, cleaning processes, quality monitoring'
        },
        {
          risk: 'AI Model Performance Degradation',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Continuous monitoring, model retraining, performance thresholds'
        },
        {
          risk: 'Scalability Limitations',
          impact: 'Medium',
          probability: 'Low',
          mitigation: 'Load testing, scalable architecture design, cloud infrastructure'
        }
      ]
    },
    {
      title: 'Operational Risks',
      icon: '🏢',
      color: 'orange',
      risks: [
        {
          risk: 'Employee Resistance',
          impact: 'High',
          probability: 'High',
          mitigation: 'Change management, training programs, clear communication'
        },
        {
          risk: 'Process Disruption',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Parallel running, gradual transition, rollback procedures'
        },
        {
          risk: 'Skill Gap',
          impact: 'Medium',
          probability: 'High',
          mitigation: 'Training programs, hiring, external consultants'
        },
        {
          risk: 'Vendor Dependency',
          impact: 'Medium',
          probability: 'Low',
          mitigation: 'Multi-vendor strategy, contract terms, exit planning'
        }
      ]
    },
    {
      title: 'Compliance & Legal Risks',
      icon: '⚖️',
      color: 'purple',
      risks: [
        {
          risk: 'Regulatory Non-Compliance',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Legal review, compliance monitoring, audit trails'
        },
        {
          risk: 'Data Privacy Violations',
          impact: 'High',
          probability: 'Low',
          mitigation: 'Privacy by design, data encryption, access controls'
        },
        {
          risk: 'Algorithmic Bias',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Bias testing, diverse training data, regular audits'
        },
        {
          risk: 'Intellectual Property Issues',
          impact: 'Medium',
          probability: 'Low',
          mitigation: 'IP review, licensing agreements, original development'
        }
      ]
    },
    {
      title: 'Financial Risks',
      icon: '💰',
      color: 'green',
      risks: [
        {
          risk: 'Cost Overruns',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Detailed budgeting, milestone tracking, contingency planning'
        },
        {
          risk: 'ROI Not Achieved',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Clear metrics, regular reviews, course correction'
        },
        {
          risk: 'Ongoing Maintenance Costs',
          impact: 'Medium',
          probability: 'High',
          mitigation: 'Lifecycle cost planning, maintenance budgets, automation'
        },
        {
          risk: 'Technology Obsolescence',
          impact: 'Medium',
          probability: 'Low',
          mitigation: 'Technology roadmap, upgrade planning, vendor relationships'
        }
      ]
    }
  ]

  const riskMatrix = [
    { impact: 'High', probability: 'High', level: 'Critical', color: 'bg-red-600' },
    { impact: 'High', probability: 'Medium', level: 'High', color: 'bg-red-500' },
    { impact: 'High', probability: 'Low', level: 'Medium', color: 'bg-yellow-500' },
    { impact: 'Medium', probability: 'High', level: 'High', color: 'bg-red-500' },
    { impact: 'Medium', probability: 'Medium', level: 'Medium', color: 'bg-yellow-500' },
    { impact: 'Medium', probability: 'Low', level: 'Low', color: 'bg-green-500' },
    { impact: 'Low', probability: 'High', level: 'Medium', color: 'bg-yellow-500' },
    { impact: 'Low', probability: 'Medium', level: 'Low', color: 'bg-green-500' },
    { impact: 'Low', probability: 'Low', level: 'Low', color: 'bg-green-500' }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Risk Assessment & Mitigation
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Identify, assess, and mitigate risks associated with AI workflow implementation
              to ensure successful project outcomes.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Risk Assessment Framework */}
        <section className="mb-16">
          <h2 className="section-title">Risk Assessment Framework</h2>
          <div className="card mb-8">
            <h3 className="section-subtitle">Risk Matrix</h3>
            <p className="text-gray-600 mb-6">
              Use this matrix to evaluate and prioritize risks based on their impact and probability:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-3 bg-gray-50">Impact / Probability</th>
                    <th className="border border-gray-300 p-3 bg-gray-50">High</th>
                    <th className="border border-gray-300 p-3 bg-gray-50">Medium</th>
                    <th className="border border-gray-300 p-3 bg-gray-50">Low</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-gray-50">High</td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">Critical</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">High</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Medium</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-gray-50">Medium</td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">High</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Medium</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Low</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium bg-gray-50">Low</td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Medium</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Low</span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Low</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Risk Categories */}
        <section className="mb-16">
          <h2 className="section-title">Risk Categories & Mitigation Strategies</h2>
          <div className="space-y-8">
            {riskCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Risk</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Impact</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Probability</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Mitigation Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.risks.map((risk, riskIndex) => (
                        <tr key={riskIndex} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-900">{risk.risk}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(risk.impact)}`}>
                              {risk.impact}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getProbabilityColor(risk.probability)}`}>
                              {risk.probability}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600 text-sm">{risk.mitigation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management Process */}
        <section className="mb-16">
          <h2 className="section-title">Risk Management Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Identify</h3>
              <p className="text-gray-600 text-sm">Systematically identify all potential risks across categories</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600 text-sm">Evaluate impact and probability using the risk matrix</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mitigate</h3>
              <p className="text-gray-600 text-sm">Develop and implement mitigation strategies</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitor</h3>
              <p className="text-gray-600 text-sm">Continuously monitor and update risk assessments</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="section-title">Ready to Implement?</h2>
          <div className="card">
            <p className="text-gray-600 mb-6">
              With a solid understanding of risks and mitigation strategies, you're ready to 
              move forward with implementation planning and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/implementation"
                className="btn-primary"
              >
                Implementation Guide
              </Link>
              <Link
                to="/best-practices"
                className="btn-secondary"
              >
                Review Best Practices
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
