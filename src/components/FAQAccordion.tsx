"use client"

import { type FC, useState } from "react"
import { ChevronDown } from "./ValueIcons"

interface FAQ {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

const FAQAccordion: FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
            onClick={() => toggleFAQ(faq.id)}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-6 h-6 text-gray-500 transition-transform ${
                openId === faq.id ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openId === faq.id && (
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion

