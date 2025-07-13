import { Link } from 'react-router-dom'

export function WorkflowGuidePage() {
  const steps = [
    {
      number: '01',
      title: 'Inventory Current Workflows',
      description: 'Document all existing workflows in your organization',
      details: [
        'Map out each step in the process',
        'Identify inputs, outputs, and decision points',
        'Note time requirements and frequency',
        'Document current pain points and inefficiencies'
      ]
    },
    {
      number: '02',
      title: 'Assess Automation Potential',
      description: 'Evaluate which workflows are suitable for AI automation',
      details: [
        'Identify repetitive, rule-based tasks',
        'Look for high-volume, low-complexity processes',
        'Consider data availability and quality',
        'Evaluate potential ROI and impact'
      ]
    },
    {
      number: '03',
      title: 'Prioritize Implementation',
      description: 'Rank workflows based on impact and feasibility',
      details: [
        'Consider business value and strategic importance',
        'Assess technical complexity and resource requirements',
        'Evaluate change management challenges',
        'Plan phased implementation approach'
      ]
    },
    {
      number: '04',
      title: 'Define Success Metrics',
      description: 'Establish clear KPIs for measuring automation success',
      details: [
        'Set baseline measurements for current performance',
        'Define target improvements (time, cost, quality)',
        'Establish monitoring and reporting mechanisms',
        'Plan for continuous improvement cycles'
      ]
    }
  ]

  const evaluationCriteria = [
    {
      category: 'Task Characteristics',
      criteria: [
        'Repetitive and predictable',
        'Rule-based decision making',
        'High volume or frequency',
        'Time-sensitive requirements',
        'Minimal human judgment needed'
      ]
    },
    {
      category: 'Data Requirements',
      criteria: [
        'Structured data inputs',
        'Consistent data formats',
        'Reliable data sources',
        'Sufficient historical data',
        'Good data quality'
      ]
    },
    {
      category: 'Business Impact',
      criteria: [
        'High operational costs',
        'Error-prone processes',
        'Bottlenecks or delays',
        'Compliance requirements',
        'Customer experience impact'
      ]
    },
    {
      category: 'Technical Feasibility',
      criteria: [
        'Available technology solutions',
        'Integration capabilities',
        'Scalability requirements',
        'Security considerations',
        'Maintenance complexity'
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Workflow Identification Guide
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              A systematic approach to identifying and evaluating workflows
              suitable for AI automation in your organization.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Step-by-Step Process */}
        <section className="mb-16">
          <h2 className="section-title">Step-by-Step Process</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mr-6">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-16">
          <h2 className="section-title">Evaluation Criteria</h2>
          <p className="text-gray-600 mb-8">
            Use these criteria to assess whether a workflow is suitable for AI automation. 
            The more criteria a workflow meets, the better candidate it is for automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evaluationCriteria.map((category, index) => (
              <div key={index} className="card">
                <h3 className="section-subtitle">{category.category}</h3>
                <ul className="space-y-2">
                  {category.criteria.map((criterion, criterionIndex) => (
                    <li key={criterionIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Assessment Template */}
        <section className="mb-16">
          <h2 className="section-title">Workflow Assessment Template</h2>
          <div className="card">
            <p className="text-gray-600 mb-6">
              Use this template to systematically evaluate each workflow in your organization:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Assessment Questions:</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• What is the current process flow and who is involved?</li>
                <li>• How much time does this workflow currently take?</li>
                <li>• What are the inputs, outputs, and decision points?</li>
                <li>• How often is this workflow executed?</li>
                <li>• What data is required and is it readily available?</li>
                <li>• What are the current pain points and error rates?</li>
                <li>• What would be the impact of automating this workflow?</li>
                <li>• What are the technical and organizational challenges?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="section-title">Ready for the Next Step?</h2>
          <div className="card">
            <p className="text-gray-600 mb-6">
              Once you've identified potential workflows for automation, learn about 
              best practices for implementation and risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/best-practices"
                className="btn-primary"
              >
                Best Practices
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
