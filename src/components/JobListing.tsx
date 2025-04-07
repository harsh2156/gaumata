import type { FC } from "react"
import { ArrowRight } from "./ValueIcons"

interface JobListingProps {
  title: string
  link: string
}

const JobListing: FC<JobListingProps> = ({ title, link }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <a href={link} className="text-amber-500 hover:text-amber-600 flex items-center">
        View job <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  )
}

export default JobListing

