import type { FC } from "react"

const FAQHeader: FC = () => {
  return (
    <div className="w-full bg-[#f5f0e6] py-8 mb-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-6xl font-bold text-gray-800">FAQs</h1>
          <p className="text-2xl text-gray-600 mt-2">Frequently Asked Questions</p>
        </div>
        <div className="flex space-x-4 mt-6 md:mt-0">
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            ?
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            ?
          </div>
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            ?
          </div>
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            ?
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQHeader

