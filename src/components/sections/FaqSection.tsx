'use client';
import { useState } from 'react';
import Container from '../layout/Container';

const faqs = [
  {
    question: "What makes Handly Care an AI operations platform?",
    answer: "Unlike basic calendar software, Handly Care uses automated constraint matching to coordinate care schedules. It continuously analyzes routing, care requirements, and staff status logs to orchestrate dispatching and verification audits automatically."
  },
  {
    question: "How does visit verification work?",
    answer: "Our clinician companion app registers GPS check-in logs and cryptographically signed notes on site. These verification records are securely synced to the operations center, creating a permanent audit trail for families and insurers."
  },
  {
    question: "Does the platform integrate with existing EHR/EMR systems?",
    answer: "Yes, Handly Care is built with modern, standardized APIs (including HL7/FHIR compatibility) to sync patient lists, clinical logs, and billing codes with major electronic health record databases."
  },
  {
    question: "How do you handle patient data privacy and security?",
    answer: "Data privacy is our top operational priority. Handly Care is HIPAA-compliant, utilizing AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring all patient records remain secure."
  },
  {
    question: "What happens during a clinical escalation alert?",
    answer: "If field staff record vital signs outside of preconfigured safety thresholds, our escalation engine alerts clinical coordinators instantly, routing the clinical logs and patient profiles to medical response teams in sequence."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-canvas py-24 sm:py-32" id="faq">
      <Container>
        <div className="mx-auto max-w-4xl divide-y divide-hairline">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold leading-10 tracking-tight text-ink sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-7 text-muted font-light">
              Everything you need to know about the platform and how it optimizes home care operations.
            </p>
          </div>
          
          <dl className="mt-10 space-y-6 divide-y divide-hairline">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-ink group"
                  >
                    <span className="text-base font-semibold leading-7 group-hover:text-primary transition-colors font-display">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-opacity mt-2 border-l-2 border-primary/20 pl-4' : 'max-h-0 opacity-0'
                  }`}
                  style={{ maxHeight: openIndex === index ? '200px' : '0px' }}
                >
                  <dd className="pr-12">
                    <p className="text-sm leading-6 text-muted font-light">{faq.answer}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
