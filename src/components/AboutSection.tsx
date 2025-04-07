import aboutImage from "../assets/gomata-about-us-image.webp"
import SrinivasImage from "../assets/srinivas.webp"
import VsShridharImage from "../assets/v-s-sridhar.webp"

import ShriRamImage from "../assets/sriram-subramanian.webp"

import MadhvanImage from "../assets/madhavan-ganesan.webp"

import AshokImage from "../assets/ashok-kothari.webp"

import LokeshImage from "../assets/lokesh-kothari.webp"

import SwapnaImage from "../assets/swapna-sen.webp"

import PromitaImage from "../assets/paromitaDas.webp"

import SohamImage from "../assets/soham-limbani.webp"

import PawanYadavImage from "../assets/pawan-yadav.webp"

import SupririyaImage from "../assets/supriya-pote.webp"



import ProfileCard from "./ProfileCard"
import { RespectIcon, OpennessIcon, TrustIcon, ThinkBigIcon, AgileDeliveryIcon } from "./ValueIcons"

interface TeamMember {
    id: number
    name: string
    title: string
    imageUrl: string
  }

const AboutSection = () => {

    const foundersAndDirectors: TeamMember[] = [
        {
          id: 1,
          name: "Srinivas Subramanian",
          title: "Founder & Managing Director",
          imageUrl: SrinivasImage,
        },
        {
          id: 2,
          name: "V S Shridhar",
          title: "Co-Founder & Director",
          imageUrl: VsShridharImage,
        },
        {
          id: 3,
          name: "Sriram Subramanian",
          title: "Co-Founder & Director",
          imageUrl: ShriRamImage,
        },
        {
          id: 4,
          name: "Madhavan Ganesan",
          title: "Director",
          imageUrl: MadhvanImage,
        },
        {
          id: 5,
          name: "Ashok Kothary",
          title: "Nominee Director",
          imageUrl: AshokImage,
        },
      ]
    
      const managementTeam: TeamMember[] = [
        {
          id: 1,
          name: "Lokesh Kothari",
          title: "Director Sales - Agritech",
          imageUrl: LokeshImage,
        },
        {
          id: 2,
          name: "Dr. Swapna Sen",
          title: "Deputy GM - Data Analytics",
          imageUrl: SwapnaImage,
        },
        {
          id: 3,
          name: "Paromita Das",
          title: "Head - Human Resource",
          imageUrl: PromitaImage,
        },
        {
          id: 4,
          name: "Soham Limbani",
          title: "Chief Financial Officer",
          imageUrl: SohamImage,
        },
        {
            id: 5,
            name: "Pawan Yadav",
            title: "Deputy GM – Ecommerce",
            imageUrl: PawanYadavImage,
          },
          {
            id: 6,
            name: "Supriya Pote",
            title: "Senior Manager – Products",
            imageUrl: SupririyaImage,
          },
      ]
    
  return (
    <div className="w-full flex flex-col">
      {/* Hero Image Section */}
      <div className="w-full relative">
      <img
  src={aboutImage || "/placeholder.svg"}
  alt="Areete Team"
  className="w-full h-[50vh] object-cover border-b border-gray-300"
/>
      </div>

      {/* About Content Section */}
      <div className="w-full bg-gray-50 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">About Areete</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed">
              Areete Business Solutions operates as a data-driven organization at the forefront of technological advancement, leveraging Artificial Intelligence (AI) and Generative AI (GenAI) to optimize the well-being and efficiency of livestock. Our mission is to cultivate disease-free life cycles for livestock, promoting their health and vitality.

In an increasingly intelligent world, data plays a pivotal role in understanding livestock behavior. By monitoring their activities and providing predictive and prescriptive analyses to dairy farmers, we empower them to make informed decisions. AI has become indispensable in monitoring and managing dairy herds, encompassing health, fertility, feeding patterns, and milk output through extensive data collection and analysis.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
              Our platform enables proactive measures to identify potential issues early, allowing farmers to address abnormalities swiftly and ensure healthier livestock and increased milk yield. Additionally, AI facilitates optimization of feed rationing, breeding decisions, and overall herd performance, enabling data-driven farm management decisions.

With a founding team boasting over 120 years of combined experience in various large corporations and successful startups, we are dedicated to delivering meaningful insights to dairy farmers to enhance profitability and productivity. We are committed to the belief that healthy cows contribute to happy communities and ultimately a wealthier nation. Continuously innovating, we strive to introduce new products beneficial to livestock, thereby uplifting the dairy economy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Purpose Section */}
      <div className="w-full bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Our Purpose</h2>

          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              To transform the Village Economy by improving heat management and overall cattle health, improving milk
              yield and enriching the lives of farmers.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="w-full bg-white py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 font-serif">Our values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Value 1 */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center h-48">
              <div className="text-green-500 mb-4">
                <RespectIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Respect</h3>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center h-48">
              <div className="text-green-500 mb-4">
                <OpennessIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Openness</h3>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center h-48">
              <div className="text-green-500 mb-4">
                <TrustIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Trust</h3>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center h-48">
              <div className="text-green-500 mb-4">
                <ThinkBigIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Think Big</h3>
            </div>

            {/* Value 5 */}
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center h-48">
              <div className="text-green-500 mb-4">
                <AgileDeliveryIcon />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Agile Delivery</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-8 max-w-7xl">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Founders & Directors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundersAndDirectors.map((member) => (
            <ProfileCard key={member.id} name={member.name} title={member.title} imageUrl={member.imageUrl} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Management Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementTeam.map((member) => (
            <ProfileCard key={member.id} name={member.name} title={member.title} imageUrl={member.imageUrl} />
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default AboutSection

