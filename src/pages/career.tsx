import type { FC } from "react"
import JobListing from "../components/JobListing"
import ApplySection from "../components/ApplySection"
import CareerImage from '../assets/career-bg.webp'

interface Job {
  id: number
  title: string
  link: string
}

const Career: FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Virtual Farm Care Manager",
      link: "/jobs/virtual-farm-care-manager",
    },
    {
      id: 2,
      title: "Regional Sales Manager",
      link: "/jobs/regional-sales-manager",
    },
    {
      id: 3,
      title: "Operations Manager",
      link: "/jobs/operations-manager",
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      link: "/jobs/data-analyst-intern",
    },
    {
      id: 5,
      title: "Strategy Intern",
      link: "/jobs/strategy-intern",
    },
    {
      id: 6,
      title: "Manager Recruitment",
      link: "/jobs/manager-recruitment",
    },
    {
      id: 7,
      title: "Data Analyst Manager",
      link: "/jobs/data-analyst-manager",
    },
  ]

  return (
    <>
      {/* Hero Banner: Full width image */}
      <div className="w-full relative">
        <img
          src={CareerImage}
          alt="Happy team members"  
          className="w-full h-[50vh] object-cover border-b border-gray-300"
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 p-16">
        <h1 className="text-4xl font-bold text-center mb-12">Open Positions</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {jobs.map((job) => (
              <JobListing key={job.id} title={job.title} link={job.link} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <ApplySection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Career
