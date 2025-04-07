"use client"

import { type FC, useState } from "react"
import FAQTabs from "../components/FAQTabs"
import FAQAccordion from "../components/FAQAccordion"
import FaqImage from "../assets/faq-section-image-web.webp"

export type TabType = "ayushman" | "studio"

const FAQ: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("ayushman")

  const ayushmanFAQs = [
    {
      id: 1,
      question: "What is unique about Ayushman Cowfit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "What are the benefits of using Ayushman Cowfit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "What is the accuracy of our solution?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "How does the farmer know it is accurate?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      question: "What is the technology in our solution and why is it important?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      question: "Does it work for different breeds and different kind of farms?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      question: "For which requirement of the farmer is our solution most useful?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      question: "What is the range and battery life of our solution?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      question: "What happens when the farmer changes the device from one cow to the other?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 10,
      question: "What are the precautions the farmer needs to take before installing the solution?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 11,
      question: "What is the warranty of the solution?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  const studioFAQs = [
    {
      id: 1,
      question: "What sets Cowfit Studio apart from other ecommerce platforms?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "How does Cowfit Studio ensure the quality of its products?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      question: "Are there any benefits for customers in terms of pricing and customization?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "What resources does Cowfit Studio provide to empower users?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      question: "How convenient is the ordering process on Cowfit Studio's web portal and Mobile App?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      question: "What customer support channels does Cowfit Studio offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      question: "Can I speak to a customer support representative for assistance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      question: "What are the shipping options available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      question: "How long does delivery take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 10,
      question: "Is there free shipping on orders above a certain amount?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 11,
      question: "How can I track my order?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 12,
      question: "What payment methods do you accept?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <>
      {/* Full-width Hero Banner */}
      <div className="w-full relative">
        <img
          src={FaqImage}
          alt="Happy team members"  
          className="w-full h-[50vh] object-cover border-b border-gray-300"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 pb-16">
        {/* <FAQHeader /> */}

        <h1 className="text-3xl font-bold text-center my-8">
          Frequently Asked Questions
        </h1>

        <FAQTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8 max-w-4xl mx-auto">
          {activeTab === "ayushman" ? (
            <FAQAccordion faqs={ayushmanFAQs} />
          ) : (
            <FAQAccordion faqs={studioFAQs} />
          )}
        </div>
      </div>
    </>
  )
}

export default FAQ

