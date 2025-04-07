"use client"

import type { FC } from "react"
import type { TabType } from "../pages/faq"

interface FAQTabsProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const FAQTabs: FC<FAQTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center border-b">
      <div className="inline-flex">
        <button
          onClick={() => setActiveTab("ayushman")}
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === "ayushman" ? "text-black border-b-2 border-amber-500" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Ayushman Cowfit
        </button>
        <button
          onClick={() => setActiveTab("studio")}
          className={`px-6 py-3 text-lg font-medium ${
            activeTab === "studio" ? "text-black border-b-2 border-amber-500" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Cowfit Studio
        </button>
      </div>
    </div>
  )
}

export default FAQTabs

