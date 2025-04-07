import type { FC } from "react"

const ApplySection: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="border-t-4 border-amber-400 pt-4">
        <h3 className="text-xl font-bold mb-4">Nothing relevant right now?</h3>
        <p className="text-gray-600 mb-6">
          As our company is constantly growing, we believe we should keep in touch. If you think we should be aware of
          your talent, send us your resume.
        </p>
        <button className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-4 rounded transition duration-300">
          Apply for future opportunities
        </button>
      </div>
    </div>
  )
}

export default ApplySection

