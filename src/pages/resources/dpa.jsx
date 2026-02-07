import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function DPA() {
  const dpaSections = [
    {
      title: "1. Definitions",
      content: [
        '"Data Controller" means the entity that determines the purposes and means of the processing of personal data.',
        '"Data Processor" means VenMail LLC, which processes personal data on behalf of the Data Controller.',
        '"Personal Data" means any information relating to an identified or identifiable natural person.',
        '"Services" means the email and automation services provided by VenMail to the Data Controller.',
        '"Data Subject" means the individual to whom personal data relates.'
      ]
    },
    {
      title: "2. Scope and Purpose",
      content: [
        'This DPA governs the processing of personal data in connection with the Services.',
        'VenMail acts as a Data Processor, processing personal data solely on behalf of the Data Controller.',
        'The purpose of processing is to provide email communication, automation, and related services.',
        'Processing is limited to what is necessary for these specified purposes.'
      ]
    },
    {
      title: "3. Data Processing Obligations",
      content: [
        'VenMail shall process personal data only in accordance with the Data Controller\'s documented instructions.',
        'VenMail shall ensure that persons authorized to process personal data are committed to confidentiality.',
        'VenMail shall implement appropriate technical and organizational security measures.',
        'VenMail shall assist the Data Controller in fulfilling data subject rights requests.',
        'VenMail shall notify the Data Controller without undue delay of any personal data breach.'
      ]
    },
    {
      title: "4. Security Measures",
      content: [
        'Encryption of data at rest using AES-256 encryption standards.',
        'Encryption of data in transit using TLS 1.3 or higher.',
        'Regular security assessments and penetration testing.',
        'Access controls based on the principle of least privilege.',
        'Audit logging of all data processing activities.',
        'Business continuity and disaster recovery procedures.'
      ]
    },
    {
      title: "5. Sub-Processing",
      content: [
        'VenMail may engage sub-processors for providing the Services.',
        'Sub-processors include cloud infrastructure providers and email delivery services.',
        'VenMail shall maintain a list of all sub-processors and make it available to the Data Controller.',
        'VenMail shall enter into data processing agreements with all sub-processors.',
        'Data Controller may object to new sub-processors with reasonable notice.'
      ]
    },
    {
      title: "6. Data Subject Rights",
      content: [
        'VenMail shall assist the Data Controller in responding to data subject requests.',
        'Assistance includes providing access, correction, deletion, and portability of personal data.',
        'VenMail shall implement technical measures to enable data subject rights fulfillment.',
        'Response time for data subject requests shall be within legally required timeframes.',
        'VenMail shall document all data subject request handling activities.'
      ]
    },
    {
      title: "7. Data Retention and Deletion",
      content: [
        'VenMail shall delete or return personal data at the end of the provision of Services.',
        'Deletion shall occur within 30 days of service termination unless required by law.',
        'VenMail shall provide evidence of data deletion upon Data Controller request.',
        'Backup data may be retained for security purposes but shall be deleted within 90 days.',
        'Data deletion procedures shall be documented and audited regularly.'
      ]
    },
    {
      title: "8. International Data Transfers",
      content: [
        'Personal data may be transferred to countries outside the Data Controller\'s jurisdiction.',
        'Such transfers shall be protected by appropriate safeguards including Standard Contractual Clauses.',
        'VenMail shall ensure all sub-processors comply with international data transfer requirements.',
        'Data Controller shall be informed of any changes to international data transfer mechanisms.',
        'VenMail shall maintain documentation of all international data transfers.'
      ]
    },
    {
      title: "9. Audit and Compliance",
      content: [
        'VenMail shall make available to the Data Controller all information necessary to demonstrate compliance.',
        'VenMail shall allow for and contribute to audits, including inspections, by the Data Controller.',
        'Audit rights shall be exercised with reasonable notice and during business hours.',
        'VenMail shall provide compliance certifications and security reports upon request.',
        'Audit findings shall be addressed within agreed timeframes.'
      ]
    },
    {
      title: "10. Term and Termination",
      content: [
        'This DPA remains in effect for the duration of the Services agreement.',
        'Upon termination, VenMail shall continue to protect personal data as required by this DPA.',
        'Termination does not release either party from obligations accrued during the term.',
        'Data Controller may request early termination of specific processing activities.',
        'Both parties shall cooperate in orderly transition of services upon termination.'
      ]
    }
  ];

  const securityCertifications = [
    {
      name: "SOC 2 Type II",
      description: "Annual audit of security controls and operational procedures"
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification"
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with EU General Data Protection Regulation"
    },
    {
      name: "CCPA Compliant",
      description: "Compliance with California Consumer Privacy Act"
    }
  ];

  return (
    <DefaultLayout>
      <Head>
        <title>Data Processing Agreement — VenMail</title>
        <meta name="description" content="VenMail's Data Processing Agreement outlines our commitment to protecting your data and complying with global privacy regulations." />
        <meta property="og:title" content="Data Processing Agreement" />
        <meta property="og:description" content="Comprehensive data protection agreement ensuring GDPR, CCPA, and global privacy compliance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/resources/dpa" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to protecting your data and ensuring compliance with global privacy regulations.
            </p>
            <div className="mt-8 text-sm text-gray-500">
              <p>Last updated: January 2024</p>
              <p>Effective date: January 1, 2024</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">Key Commitments</h2>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                GDPR and CCPA compliant data processing
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                End-to-end encryption of personal data
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Regular security audits and compliance certifications
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                24/7 security monitoring and incident response
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Security Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityCertifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {dpaSections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-700 leading-relaxed">
                      {itemIndex + 1}. {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Email: dpo@venmail.io</p>
                  <p>Response time: Within 48 hours</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Legal Inquiries</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Email: legal@venmail.io</p>
                  <p>Phone: +1 902-709-0836</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our DPA?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our data protection team is here to help with any questions about our data processing practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dpo@venmail.io"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Contact DPO
              </a>
              <a
                href="/resources/privacy-policy"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
