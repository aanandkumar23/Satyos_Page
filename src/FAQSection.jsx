
import { useState } from "react"

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General")
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  const faqs = {
    General: [
      {
        question: "Are your solutions made in India?",
        answer:
          "Yes, all development, support, and maintenance is 100% India-based. We understand Indian market-specific challenges deeply.",
        showSocial: true,
      },
      {
        question: "What is your typical project timeline?",
        answer:
          "Project timelines vary based on complexity and requirements. We provide detailed timelines during our initial consultation.",
      },
      {
        question: "What engagement models do you offer?",
        answer:
          "We offer flexible engagement models including fixed-price projects, time & material, and dedicated team models.",
      },
    ],
    "Services Related": [
      {
        question: "What kind of software services do you offer?",
        answer:
          "We offer end-to-end product development services including UI/UX design, mobile app (iOS/Android), web apps, backend systems, and deployment — focused on PropTech, Real Estate, and Co-living solutions.",
        showSocial: true,
      },
      {
        question: "Do you provide ready-made software or build custom solutions?",
        answer: "We specialize in custom software solutions tailored to your specific business needs and requirements.",
      },
      {
        question: "Which industries do you cater to?",
        answer: "We primarily focus on PropTech, Real Estate, Co-living solutions, and related technology sectors.",
      },
    ],
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index)
  }

  const SocialIcons = () => (
    <div className="flex space-x-3 mt-4">
      <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </button>
      <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>
      <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </button>
      <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.12 10.88L22.24 0H20.2L12.04 9.44L5.68 0H0L9.68 13.36L0 24.88H2.04L10.76 14.88L17.52 24.88H23.2L13.12 10.88ZM11.88 13.68L10.92 12.32L2.8 1.6H4.88L11.36 10.24L12.32 11.6L20.2 23.36H18.12L11.88 13.68Z" />
        </svg>
      </button>
    </div>
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold text-black mb-8">FAQs</h2>
          </div>
          <div className="bg-white rounded-lg p-8">

            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-black">Frequently asked questions</h3>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex space-x-6 mb-8 border-b border-gray-200">
              {Object.keys(faqs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 font-medium transition-colors ${
                    activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs[activeTab].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left py-4"
                  >
                    <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFAQ === index && (
                    <div className="pb-4">
                      <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                      {faq.showSocial && <SocialIcons />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
