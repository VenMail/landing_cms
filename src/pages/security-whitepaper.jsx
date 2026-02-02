import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Mail, Database, Key, Eye, AlertTriangle, CheckCircle, Server, Cloud, Cpu, HardDrive, Globe, Users, FileText, Zap, ArrowLeft, Home } from 'lucide-react';

export default function SecurityWhitepaper() {
  return (
    <>
      <Head>
        <title>Security Whitepaper - VenMail</title>
        <meta name="description" content="Comprehensive security architecture and infrastructure details for VenMail email platform" />
        <meta name="keywords" content="email security, postal, encryption, cybersecurity, whitepaper" />
        <style>{`
          @media print {
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            
            /* High contrast brand colors for print */
            h1, h2, h3, h4, h5, h6 {
              color: #1f2937 !important;
              font-weight: 700 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Dark brand text for print */
            p, span, div, li, td, th {
              color: #374151 !important;
              font-weight: 400 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Brand primary colors in print (darker versions) */
            .text-primary-400, .text-primary-500, .text-primary-600 {
              color: #ea580c !important;
              font-weight: 600 !important;
            }
            
            .text-primary-300 {
              color: #c2410c !important;
              font-weight: 500 !important;
            }
            
            /* Orange accents */
            .text-orange-400, .text-orange-500, .text-orange-600 {
              color: #c2410c !important;
              font-weight: 600 !important;
            }
            
            .text-orange-300 {
              color: #9a3412 !important;
              font-weight: 500 !important;
            }
            
            /* Green accents */
            .text-green-400, .text-green-500, .text-green-600 {
              color: #15803d !important;
              font-weight: 600 !important;
            }
            
            .text-green-300 {
              color: #166534 !important;
              font-weight: 500 !important;
            }
            
            /* Blue accents */
            .text-blue-400, .text-blue-500, .text-blue-600 {
              color: #1e40af !important;
              font-weight: 600 !important;
            }
            
            .text-blue-300 {
              color: #1d4ed8 !important;
              font-weight: 500 !important;
            }
            
            /* Yellow accents */
            .text-yellow-400, .text-yellow-500, .text-yellow-600 {
              color: #a16207 !important;
              font-weight: 600 !important;
            }
            
            .text-yellow-300 {
              color: #854d0e !important;
              font-weight: 500 !important;
            }
            
            /* Cyan accents */
            .text-cyan-400, .text-cyan-500, .text-cyan-600 {
              color: #0891b2 !important;
              font-weight: 600 !important;
            }
            
            .text-cyan-300 {
              color: #0e7490 !important;
              font-weight: 500 !important;
            }
            
            /* Red accents */
            .text-red-400, .text-red-500, .text-red-600 {
              color: #dc2626 !important;
              font-weight: 600 !important;
            }
            
            .text-red-300 {
              color: #b91c1c !important;
              font-weight: 500 !important;
            }
            
            /* Purple accents */
            .text-purple-400, .text-purple-500, .text-purple-600 {
              color: #7c3aed !important;
              font-weight: 600 !important;
            }
            
            .text-purple-300 {
              color: #6d28d9 !important;
              font-weight: 500 !important;
            }
            
            /* Bold for emphasis */
            .text-xl, .text-lg, .text-base {
              color: #1f2937 !important;
              font-weight: 500 !important;
            }
            
            /* White text on dark backgrounds - use dark text instead */
            .text-white {
              color: #1f2937 !important;
              font-weight: 600 !important;
            }
            
            /* Light grey text - make darker */
            .text-slate-300, .text-slate-400 {
              color: #4b5563 !important;
              font-weight: 400 !important;
            }
            
            /* Maintain brand backgrounds but lighter */
            .bg-primary-500\/20, .bg-primary-500\/30 {
              background-color: #fed7aa !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-orange-500\/20 {
              background-color: #fed7aa !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-blue-500\/20 {
              background-color: #dbeafe !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-green-500\/20 {
              background-color: #dcfce7 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-red-500\/20 {
              background-color: #fee2e2 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-yellow-500\/20 {
              background-color: #fef3c7 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Dark backgrounds to light */
            .bg-slate-900, .bg-slate-800, .bg-slate-700 {
              background-color: #f9fafb !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-slate-900\/50, .bg-slate-800\/50 {
              background-color: #f3f4f6 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .bg-slate-900\/95 {
              background-color: #ffffff !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Hide navigation in print */
            .sticky {
              display: none !important;
            }
            
            /* Ensure containers have light background */
            .min-h-screen, .container {
              background-color: #ffffff !important;
            }
            
            /* Keep brand borders but darker */
            .border-primary-400\/30, .border-primary-500\/30 {
              border-color: #ea580c !important;
              border-width: 1px !important;
            }
            
            .border-slate-700 {
              border-color: #d1d5db !important;
              border-width: 1px !important;
            }
            
            /* Keep icons with brand colors */
            svg {
              fill: currentColor !important;
              stroke: currentColor !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Page breaks for sections */
            section {
              page-break-inside: avoid;
              page-break-after: always;
            }
            
            /* Lighten gradients but keep brand feel */
            .bg-gradient-to-br, .bg-gradient-to-r {
              background: linear-gradient(to right, #fed7aa, #fef3c7) !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Ensure cards have light backgrounds with brand borders */
            .rounded-xl, .rounded-lg {
              border: 1px solid #d1d5db !important;
              background: #ffffff !important;
            }
            
            .bg-slate-900\/50 .rounded-xl, .bg-slate-800\/50 .rounded-lg {
              background: #f9fafb !important;
              border-color: #ea580c !important;
            }
            
            /* Print-friendly spacing */
            .py-24, .py-16, .py-8 {
              padding-top: 1rem !important;
              padding-bottom: 1rem !important;
            }
            
            .px-6, .px-8 {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Navigation Header */}
        <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/logo-white.png" alt="VenMail" className="h-8 w-auto" />
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  <Home className="w-4 h-4" />
                  <span>Back to Homepage</span>
                </Link>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Print PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-orange-600/20"></div>
          <div className="relative container mx-auto px-6 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-500/20 rounded-full border border-primary-400/30">
                  <Shield className="w-12 h-12 text-primary-400" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Security Whitepaper
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A comprehensive overview of VenMail's security architecture, infrastructure, and our commitment to protecting your communications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>15+ Years Cybersecurity Experience</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-Grade Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Zero-Trust Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16 space-y-24">
          {/* Executive Summary */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-400" />
              Executive Summary
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <p className="text-slate-300 leading-relaxed mb-4">
                VenMail represents the culmination of over 15 years of cybersecurity expertise, combining battle-tested infrastructure with cutting-edge security innovations. Our core email processing backend uses a hybrid system with KumoMTA as our primary MTA, built on Rust for superior performance and reliability, with Postal as our failover system. We've engineered a comprehensive security ecosystem that addresses modern email threats while maintaining exceptional performance and reliability.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our architecture leverages advanced encryption, sophisticated reputation monitoring, and flexible storage options to provide organizations with a secure, scalable email solution that adapts to their specific security requirements and compliance needs.
              </p>
            </div>
          </section>

          {/* Core Infrastructure */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Server className="w-8 h-8 text-primary-400" />
              Core Infrastructure Architecture
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">KumoMTA Primary System</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Our primary email delivery backend is KumoMTA, a modern high-performance MTA built in Rust:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Built on Rust for memory safety and performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>10x higher throughput than traditional MTAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Advanced traffic shaping and IP rotation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Built-in DKIM signing and deliverability optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Postal Failover System</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Postal serves as our robust failover system, ensuring maximum reliability:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Seamless automatic failover capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Proven reliability with enterprise deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive authentication and rate limiting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Active monitoring and health checks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Antispam Infrastructure */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              Advanced Antispam Infrastructure
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
                  <p className="text-slate-300">Spam Detection Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">&lt;100ms</div>
                  <p className="text-slate-300">Average Processing Time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                  <p className="text-slate-300">Real-time Monitoring</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Multi-Layered Protection</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-primary-300 mb-2">Content Analysis</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Natural language processing</li>
                        <li>• Pattern recognition</li>
                        <li>• Semantic analysis</li>
                        <li>• Image content scanning</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-orange-300 mb-2">Reputation Systems</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Sender reputation scoring</li>
                        <li>• Domain reputation tracking</li>
                        <li>• IP reputation monitoring</li>
                        <li>• Blacklist integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Machine Learning Integration</h3>
                  <p className="text-slate-300 mb-4">
                    Our ML models are trained on billions of email samples and continuously updated with new threat patterns:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-green-300 mb-2">Neural Networks</h4>
                      <p className="text-slate-300 text-sm">Deep learning for complex pattern detection</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-yellow-300 mb-2">Random Forests</h4>
                      <p className="text-slate-300 text-sm">Ensemble learning for classification accuracy</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-red-300 mb-2">Support Vector Machines</h4>
                      <p className="text-slate-300 text-sm">Optimal boundary detection for spam vs ham</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reputation Monitoring */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-cyan-400" />
              Reputation Monitoring & Protection
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-6">
                Our sophisticated reputation monitoring system provides comprehensive protection against sender reputation damage and ensures optimal deliverability rates.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Global Blacklist Monitoring:</strong> Continuous checking against 100+ blacklists
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Sender Score Tracking:</strong> Real-time reputation score calculation
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Database className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Domain Health Analysis:</strong> Comprehensive domain reputation assessment
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Protection Mechanisms</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Automatic Rate Limiting:</strong> Dynamic throttling based on reputation
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Threat Detection:</strong> Early warning system for reputation threats
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Rapid Response:</strong> Automated mitigation actions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Storage & Encryption */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-green-400" />
              Storage Flexibility & Encryption
            </h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6">Custom Storage Adapters</h3>
                <p className="text-slate-300 mb-6">
                  VenMail provides unparalleled flexibility with pluggable storage adapters, allowing organizations to integrate with their preferred storage solutions while maintaining security and compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cloud className="w-6 h-6 text-primary-400" />
                      <h4 className="text-lg font-medium text-white">Cloud Storage</h4>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Amazon S3 & S3-compatible services</li>
                      <li>• Google Cloud Storage</li>
                      <li>• Azure Blob Storage</li>
                      <li>• DigitalOcean Spaces</li>
                      <li>• Custom S3 endpoints</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HardDrive className="w-6 h-6 text-green-400" />
                      <h4 className="text-lg font-medium text-white">On-Premises Storage</h4>
                    </div>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Local filesystem storage</li>
                      <li>• Network-attached storage (NAS)</li>
                      <li>• Storage area networks (SAN)</li>
                      <li>• Custom database backends</li>
                      <li>• Hybrid storage solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6">Encryption at Rest</h3>
                <p className="text-slate-300 mb-6">
                  All email data is encrypted using industry-standard encryption algorithms, with support for customer-managed encryption keys.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <Key className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <h4 className="text-lg font-medium text-white mb-2">AES-256</h4>
                    <p className="text-slate-300 text-sm">Military-grade encryption for all stored data</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-lg font-medium text-white mb-2">Hardware Security Modules</h4>
                    <p className="text-slate-300 text-sm">Support for HSM integration and key management</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <Database className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-lg font-medium text-white mb-2">Key Rotation</h4>
                    <p className="text-slate-300 text-sm">Automated key rotation and versioning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-orange-400" />
              Advanced Security Features
            </h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6">Password-Protected Emails</h3>
                <p className="text-slate-300 mb-6">
                  Send sensitive information with confidence using our password-protected email feature that includes self-destruct capabilities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-primary-300 mb-4">Security Features</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <Lock className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>End-to-end encryption with recipient password</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>Optional read receipts and access tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>Tamper-evident notifications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-red-300 mb-4">Self-Destruct Options</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Auto-delete after first access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Time-based expiration (hours/days)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Secure data wiping beyond recovery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary-400" />
              15+ Years of Cybersecurity Excellence
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <p className="text-slate-300 mb-6">
                VenMail is built by cybersecurity veterans with extensive experience in antivirus development, antifraud systems, and enterprise security solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Antivirus Expertise</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Malware Analysis:</strong> Deep understanding of malware vectors and propagation methods
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Threat Intelligence:</strong> Access to global threat intelligence networks
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Heuristic Detection:</strong> Advanced pattern recognition for zero-day threats
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Antifraud Experience</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Behavioral Analysis:</strong> Sophisticated fraud pattern recognition
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Machine Learning:</strong> Deployed ML models for fraud detection
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Risk Assessment:</strong> Comprehensive risk scoring systems
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance & Certifications */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-green-400" />
              Compliance & Certifications
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Current Compliance</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>GDPR:</strong> Full compliance with data protection regulations
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>CCPA:</strong> California Consumer Privacy Act compliance
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>SOX:</strong> Sarbanes-Oxley Act compliance features
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">In Progress</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>SOC 2 Type II:</strong> Year 2 of certification process
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>ISO 27001:</strong> Information security management
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>HIPAA:</strong> Healthcare information protection
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-500/20 to-orange-600/20 rounded-xl p-8 border border-primary-500/30">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Conclusion</h2>
              <p className="text-slate-300 leading-relaxed text-center mb-6">
                VenMail represents the pinnacle of secure email communication, combining decades of cybersecurity expertise with cutting-edge technology. Our commitment to security, privacy, and reliability ensures that your communications remain protected in an increasingly complex threat landscape.
              </p>
              <div className="text-center">
                <p className="text-xl text-primary-300 font-semibold mb-4">
                  Security isn't just a feature—it's our foundation.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span>Enterprise-Grade Security</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Lock className="w-5 h-5 text-primary-400" />
                    <span>End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-5 h-5 text-primary-400" />
                    <span>15+ Years Expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
