import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Banner from "../assets/job-description-banner.webp"

function JobDescription() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image */}
      <div className="w-full h-[210px] overflow-hidden">
        <img
          src={Banner}
          alt="Company team members wearing traditional red turbans"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Job Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Virtual Farm Care Manager</h1>
          <p className="text-gray-600">Full-time</p>
        </div>

        {/* About Us Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About us</h2>
          <p className="text-gray-700">
            Areete Business Solutions is an IOT and AI/ML Solution company in Pune developing and delivering
            state-of-the Art Digital solutions for cattle health solutions.
          </p>
        </div>

        {/* Position Details Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Position details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="font-medium text-gray-700">Department</div>
            <div className="text-gray-700">Sales and service</div>

            <div className="font-medium text-gray-700">Industry</div>
            <div className="text-gray-700">Agriculture/ Dairy/ Animal Husbandry</div>

            <div className="font-medium text-gray-700">Location</div>
            <div className="text-gray-700">
              Maharashtra/Punjab/Gujarat/South/Customer premises in PAN India as per requirement
            </div>
          </div>
        </div>

        {/* Roles and Responsibilities Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Roles and Responsibilities</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              Monitor field performance and improve digital solution on an ongoing basis on various customer premises.
            </li>
            <li>Customer Centric Engagement Approach</li>
            <li>New projects</li>
            <li>Troubleshooting and improvements</li>
            <li>Routine Field Monitoring and Validation</li>
            <li>Knowledge Assimilation</li>
            <li>Data Collection</li>
            <li>Business Retention</li>
          </ol>
        </div>

        {/* Requirements Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Requirements</h2>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Work Experience</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>1.5 to 8 years in dairy farm/ cattle management/ farm practices/farmer relationship.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Qualifications</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>BSC Agriculture/ Diploma in Veterinary Science/ Diploma in Agri/ Bachelor of Veterinary Science.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Soft Skills</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Intelligent, Good with people skills, convincing skills, attitude has to be professional and matured.
              </li>
              <li>Good with Regional language is mandatory. Hindi/ English is preferable.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-800 mb-2">Additional Information</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Must be willing to travel in rural areas of the respective states.</li>
              <li>Candidate to be from the respective state/ or willing to relocate to the respective state.</li>
              <li>In customer relationship management and rural development.</li>
              <li>Can join ASAP.</li>
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex flex-col items-center mb-6">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded w-full max-w-md mb-6">
            Apply now
          </button>

          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to all opportunities
          </a>
        </div>
      </div>
    </div>
  )
}

export default JobDescription

