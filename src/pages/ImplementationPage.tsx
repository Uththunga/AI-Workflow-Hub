export function ImplementationPage() {
  const phases = [
    {
      phase: 'Phase 1: Planning & Preparation',
      duration: '4-8 weeks',
      color: 'blue',
      activities: [
        'Conduct detailed workflow analysis',
        'Define project scope and objectives',
        'Assemble project team and assign roles',
        'Develop project timeline and budget',
        'Identify and procure necessary tools/platforms',
        'Create change management strategy'
      ],
      deliverables: [
        'Project charter and scope document',
        'Detailed project plan and timeline',
        'Risk assessment and mitigation plan',
        'Team structure and responsibilities',
        'Technology architecture design'
      ]
    },
    {
      phase: 'Phase 2: Data Preparation & System Design',
      duration: '6-12 weeks',
      color: 'green',
      activities: [
        'Data collection and quality assessment',
        'Data cleaning and preprocessing',
        'System architecture design',
        'Integration planning with existing systems',
        'Security and compliance review',
        'Initial prototype development'
      ],
      deliverables: [
        'Clean, validated datasets',
        'System architecture documentation',
        'Integration specifications',
        'Security and compliance framework',
        'Working prototype or proof of concept'
      ]
    },
    {
      phase: 'Phase 3: Development & Testing',
      duration: '8-16 weeks',
      color: 'yellow',
      activities: [
        'AI model development and training',
        'System integration and configuration',
        'User interface development',
        'Comprehensive testing (unit, integration, UAT)',
        'Performance optimization',
        'Documentation creation'
      ],
      deliverables: [
        'Trained and validated AI models',
        'Fully integrated system',
        'Test results and quality reports',
        'User documentation and training materials',
        'Performance benchmarks'
      ]
    },
    {
      phase: 'Phase 4: Pilot Deployment',
      duration: '4-8 weeks',
      color: 'orange',
      activities: [
        'Limited production deployment',
        'User training and onboarding',
        'Monitor system performance',
        'Collect user feedback',
        'Address issues and optimize',
        'Prepare for full rollout'
      ],
      deliverables: [
        'Pilot deployment results',
        'User feedback analysis',
        'Performance metrics and KPIs',
        'Issue resolution documentation',
        'Go-live readiness assessment'
      ]
    },
    {
      phase: 'Phase 5: Full Deployment & Optimization',
      duration: '2-6 weeks',
      color: 'purple',
      activities: [
        'Full production deployment',
        'Monitor system performance',
        'Provide ongoing user support',
        'Continuous optimization',
        'Knowledge transfer',
        'Project closure activities'
      ],
      deliverables: [
        'Fully operational AI system',
        'Performance monitoring dashboard',
        'Support documentation',
        'Optimization recommendations',
        'Project closure report'
      ]
    }
  ]

  const milestones = [
    { name: 'Project Kickoff', week: 1, description: 'Official project start with stakeholder alignment' },
    { name: 'Requirements Finalized', week: 4, description: 'Complete requirements documentation approved' },
    { name: 'Data Ready', week: 12, description: 'Clean, validated datasets prepared for model training' },
    { name: 'Prototype Complete', week: 16, description: 'Working prototype demonstrating core functionality' },
    { name: 'System Integration', week: 24, description: 'AI system fully integrated with existing infrastructure' },
    { name: 'Pilot Launch', week: 28, description: 'Limited production deployment with selected users' },
    { name: 'Full Deployment', week: 36, description: 'Complete system rollout to all users' },
    { name: 'Project Closure', week: 40, description: 'Project officially closed with handover to operations' }
  ]

  const criticalSuccessFactors = [
    {
      factor: 'Executive Sponsorship',
      description: 'Strong leadership support and commitment throughout the project',
      importance: 'Critical'
    },
    {
      factor: 'Clear Communication',
      description: 'Regular, transparent communication with all stakeholders',
      importance: 'High'
    },
    {
      factor: 'Quality Data',
      description: 'Clean, comprehensive, and representative training data',
      importance: 'Critical'
    },
    {
      factor: 'User Engagement',
      description: 'Active involvement of end users in design and testing',
      importance: 'High'
    },
    {
      factor: 'Change Management',
      description: 'Structured approach to managing organizational change',
      importance: 'High'
    },
    {
      factor: 'Technical Expertise',
      description: 'Skilled team with AI/ML and integration experience',
      importance: 'Critical'
    }
  ]

  const getPhaseColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Implementation Timeline & Phases
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              A comprehensive guide to implementing AI workflow automation with detailed
              phases, timelines, and milestones for successful project delivery.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Implementation Phases */}
        <section className="mb-16">
          <h2 className="section-title">Implementation Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className={`card border-l-4 ${getPhaseColor(phase.color)}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                      <span className="ml-4 bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-primary-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-16">
          <h2 className="section-title">Project Milestones Timeline</h2>
          <div className="card">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                      {milestone.week}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Week</div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center">
                      <div className="w-4 h-0.5 bg-primary-600 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{milestone.name}</h4>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Critical Success Factors */}
        <section className="mb-16">
          <h2 className="section-title">Critical Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criticalSuccessFactors.map((factor, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 ${
                    factor.importance === 'Critical' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <svg className={`w-4 h-4 ${
                      factor.importance === 'Critical' ? 'text-red-600' : 'text-yellow-600'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                      <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                        factor.importance === 'Critical' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {factor.importance}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Checklist */}
        <section>
          <h2 className="section-title">Pre-Implementation Checklist</h2>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Business Readiness</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Executive sponsorship secured</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Budget approved and allocated</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Project team assembled</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Success metrics defined</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Change management plan created</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Technical Readiness</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Data quality assessed and validated</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Technology platform selected</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Integration requirements defined</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Security and compliance reviewed</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Testing strategy developed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
