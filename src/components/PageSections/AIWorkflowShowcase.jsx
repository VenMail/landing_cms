import React from 'react';

const AIWorkflowShowcase = () => {
  const workflows = [
    {
      icon: "/icons/document-intelligence-white.svg",
      title: "Document Intelligence",
      description: "AI reads and understands PDFs, Word docs, and spreadsheets automatically",
      features: [
        "PDF text extraction and analysis",
        "Word document processing", 
        "Excel spreadsheet data extraction",
        "Smart thumbnail generation"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "/icons/payment-automation-white.svg", 
      title: "Payment Automation",
      description: "Automatic payment processing, receipt generation, and webhook integration",
      features: [
        "Stripe payment processing",
        "Automatic receipt generation",
        "Third-party webhook integration",
        "Subscription management"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: "/icons/sdr-ai-white.svg",
      title: "AI Sales Agent",
      description: "AI discovers prospects, analyzes companies, and automates outreach at scale",
      features: [
        "Website analysis and intelligence",
        "Personalized messaging at scale",
        "Automated follow-up sequences",
        "Performance tracking and optimization"
      ],
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced AI Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enterprise-level automation that processes documents, handles payments, and generates leads intelligently.
          </p>
        </div>
        
        {/* Workflow Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {workflows.map((workflow, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${workflow.color} flex items-center justify-center mb-8`}>
                <img src={workflow.icon} alt={workflow.title} className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {workflow.title}
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{workflow.description}</p>
              
              {/* Features */}
              <ul className="space-y-3">
                {workflow.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transform Your Email Workflows
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using AI to automate their workflows and generate leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/email-automation"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-lg"
            >
              Explore Workflows
            </a>
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 hover:border-gray-400 transition-all duration-300 rounded-lg"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowShowcase;
