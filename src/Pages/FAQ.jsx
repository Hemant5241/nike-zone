import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Are your Nike products 100% authentic?",
      answer: "Yes, absolutely. We source all our products directly from authorized Nike distribution channels. We guarantee 100% authenticity and every pair comes in its original packaging with original product tags."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days depending on your location. We also offer express shipping options that deliver within 1-2 business days. Orders over $150 qualify for free standard delivery."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a hassle-free 30-day return policy. If your shoes do not fit, or you are not completely satisfied, you can return them in their original, unused condition for a full refund or exchange."
    },
    {
      question: "How do I choose the correct size?",
      answer: "We offer a comprehensive Size Guide next to the size selection on every product page. If you are halfway between sizes, we generally recommend selecting the larger size for the most comfortable fit."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most major international destinations. International shipping rates and times are calculated at checkout based on your country and address."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-[#138695]/10 rounded-full flex items-center justify-center text-[#138695] mx-auto mb-4">
            <HelpCircle size={24} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Find quick answers to common queries about orders, shipping, sizing, and authentications.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-5 bg-gray-50 flex justify-between items-center font-bold text-gray-800 hover:bg-gray-100/50 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-[#138695] flex-shrink-0 ml-4">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-48 border-t border-gray-100' : 'max-h-0'}`}
              >
                <p className="p-6 text-sm text-gray-600 leading-relaxed bg-white">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
