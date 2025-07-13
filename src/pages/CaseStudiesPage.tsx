import { Link } from 'react-router-dom'

export function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Financial Services: Automated Loan Processing',
      industry: 'Financial Services',
      challenge: 'Manual loan application processing taking 5-7 days with high error rates',
      solution: 'AI-powered document analysis and risk assessment system',
      results: [
        '85% reduction in processing time (from 5-7 days to 4-8 hours)',
        '60% decrease in manual errors',
        '40% increase in application throughput',
        '$2.3M annual cost savings'
      ],
      technologies: ['Machine Learning', 'OCR', 'Natural Language Processing'],
      timeline: '8 months implementation',
      roi: '320% ROI within 18 months'
    },
    {
      title: 'Healthcare: Patient Appointment Scheduling',
      industry: 'Healthcare',
      challenge: 'High volume of appointment requests causing delays and patient dissatisfaction',
      solution: 'Intelligent scheduling system with natural language processing',
      results: [
        '70% of appointments scheduled automatically',
        '50% reduction in wait times',
        '25% increase in patient satisfaction scores',
        '30% reduction in administrative workload'
      ],
      technologies: ['NLP', 'Predictive Analytics', 'Integration APIs'],
      timeline: '6 months implementation',
      roi: '250% ROI within 12 months'
    },
    {
      title: 'Manufacturing: Quality Control Automation',
      industry: 'Manufacturing',
      challenge: 'Inconsistent manual quality inspections leading to defects reaching customers',
      solution: 'Computer vision system for automated defect detection',
      results: [
        '95% accuracy in defect detection',
        '80% reduction in inspection time',
        '45% decrease in customer complaints',
        '99.5% consistency in quality standards'
      ],
      technologies: ['Computer Vision', 'Deep Learning', 'IoT Sensors'],
      timeline: '10 months implementation',
      roi: '400% ROI within 24 months'
    },
    {
      title: 'Retail: Customer Service Automation',
      industry: 'Retail',
      challenge: 'Overwhelming volume of customer inquiries during peak seasons',
      solution: 'AI chatbot with escalation to human agents for complex issues',
      results: [
        '75% of inquiries resolved automatically',
        '60% reduction in response time',
        '35% increase in customer satisfaction',
        '50% reduction in support costs'
      ],
      technologies: ['Conversational AI', 'Sentiment Analysis', 'CRM Integration'],
      timeline: '4 months implementation',
      roi: '180% ROI within 8 months'
    },
    {
      title: 'Logistics: Route Optimization',
      industry: 'Logistics',
      challenge: 'Inefficient delivery routes leading to high fuel costs and delays',
      solution: 'AI-powered dynamic route optimization system',
      results: [
        '25% reduction in fuel costs',
        '30% improvement in on-time deliveries',
        '20% increase in daily delivery capacity',
        '15% reduction in vehicle wear and tear'
      ],
      technologies: ['Machine Learning', 'GPS Integration', 'Real-time Analytics'],
      timeline: '7 months implementation',
      roi: '290% ROI within 15 months'
    },
    {
      title: 'HR: Resume Screening Automation',
      industry: 'Human Resources',
      challenge: 'Time-consuming manual resume screening for high-volume positions',
      solution: 'AI system for automated candidate screening and ranking',
      results: [
        '90% reduction in initial screening time',
        '40% improvement in candidate quality',
        '65% faster time-to-hire',
        '80% reduction in recruiter workload'
      ],
      technologies: ['NLP', 'Machine Learning', 'ATS Integration'],
      timeline: '5 months implementation',
      roi: '220% ROI within 10 months'
    }
  ]

  const successFactors = [
    {
      factor: 'Clear Business Case',
      description: 'Well-defined problems with measurable impact and ROI projections'
    },
    {
      factor: 'Quality Data',
      description: 'Clean, comprehensive datasets for training and validation'
    },
    {
      factor: 'Stakeholder Buy-in',
      description: 'Strong support from leadership and end-users throughout the process'
    },
    {
      factor: 'Phased Implementation',
      description: 'Gradual rollout with pilot testing and iterative improvements'
    },
    {
      factor: 'Change Management',
      description: 'Comprehensive training and communication strategies'
    },
    {
      factor: 'Continuous Monitoring',
      description: 'Ongoing performance tracking and optimization'
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-subtle section-padding-sm">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title mb-6">
              Real-World Case Studies
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Learn from successful AI workflow implementations across various industries
              and understand what made them successful.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="section-title text-center mb-12">Success Stories</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 mt-6 lg:mt-0">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-green-800 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Timeline:</span>
                          <span className="text-green-900 font-medium">{study.timeline}</span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-green-700">ROI:</span>
                          <span className="text-green-900 font-medium">{study.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-16">
          <h2 className="section-title">Common Success Factors</h2>
          <p className="text-gray-600 mb-8 text-center">
            These factors were consistently present in successful AI workflow implementations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successFactors.map((factor, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{factor.factor}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="section-title">Key Lessons Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-3">What Worked Well</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Starting with high-impact, low-complexity workflows</li>
                <li>• Investing heavily in data quality and preparation</li>
                <li>• Maintaining human oversight for critical decisions</li>
                <li>• Regular communication with all stakeholders</li>
                <li>• Iterative development with frequent testing</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-3">Common Challenges</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Initial resistance from employees</li>
                <li>• Data quality issues requiring cleanup</li>
                <li>• Integration complexity with legacy systems</li>
                <li>• Longer than expected training periods</li>
                <li>• Need for ongoing model maintenance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
