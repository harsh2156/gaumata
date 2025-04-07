import Video from "../assets/ayushman-cowfit-page-video.mp4"
import {
  HeartIcon,
  ClockIcon,
  TagIcon,
  FireIcon,
  UserIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  SunIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"

export default function AyushmanCowfit() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="bg-green-50 p-6 sm:p-8 md:p-16 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Ayushman Cowfit</h1>
            <p className="text-green-600 text-base sm:text-lg">
              Cattle Health Monitoring IoT Solution
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/cow-with-collar.jpg"
              alt="Cow with monitoring collar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 text-justify">
          <p>
            Ayushman Cowfit revolutionizes cattle care with an AI-powered, collar-based IoT solution.
            Tailored for comprehensive herd management, our system monitors vital aspects like heat cycle,
            activity, rumination, temperature, and behavior in real-time. Accessible via Dashboard/Mobile App,
            it prioritizes cattle well-being, enhancing productivity.
          </p>
          <p>
            Using BLE technology, data seamlessly travels from sensors to gateways, transmitted via telecom towers to
            the cloud. Here, AI and ML algorithms analyze data, providing actionable insights accessible through our
            intuitive mobile and web apps.
          </p>
          <p>Experience seamless herd management with Ayushman Cowfit.</p>
        </div>
      </div>

      {/* Why Ayushman Cowfit Section */}
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Why Ayushman Cowfit?</h2>
          <div className="space-y-4 text-justify text-sm sm:text-base">
            <p>
              India boasts a substantial livestock population of approximately 305 million, representing 37.28% of the
              global total. Despite this, the contribution to GDP from milk production, a vital agricultural commodity,
              stands at only 5%. A glaring discrepancy emerges when comparing the average milk production per cow: a
              mere 10 liters per day in India versus 30 liters in Western countries like the USA, Canada and European
              Union.
            </p>
            <p>
              This productivity gap is primarily attributed to inadequate cattle health. Roughly 15% of cattle face
              health issues at any given time. A staggering 30% failure rate in artificial insemination is due to poor
              timing or overlooked health symptoms. Consequently, farmers suffer from delayed calving, increased livestock
              sickness and mortality, significantly impacting their income.
            </p>
            <p>
              Compounding the issue is the lack of accessible technological solutions to address cattle health and
              heat-related challenges. Dairy farmers, especially those with large herds, struggle to monitor vital metrics
              such as temperature, heart rate, and activity levels using traditional methods.
            </p>
            <p>
              Heat detection, in particular, poses a significant challenge for dairy farmers. The repercussions of failed
              artificial inseminations, including heightened mortality rates and decreased yield and quality of dairy
              products, exacerbate these challenges. Addressing these issues is crucial for enhancing the growth,
              efficiency and sustainability of India's dairy industry.
            </p>
          </div>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Solution</h2>
        <div className="flex justify-center mb-12">
          <img
            src="/cow-diagram.png"
            alt="Cow monitoring diagram"
            className="max-w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Care First Approach Card */}
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <HeartIcon className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="font-medium">Care First Approach</h3>
          </div>
          {/* Real Time Insights Card */}
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <ClockIcon className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="font-medium">Real Time Insights</h3>
          </div>
          {/* Affordable Card */}
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <TagIcon className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="font-medium">Affordable</h3>
          </div>
          {/* Upto 10X ROI Card */}
          <div className="border p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              {/* <TrendingUpIcon className="h-12 w-12 text-green-600" /> */}
            </div>
            <h3 className="font-medium">Upto 10X ROI</h3>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/farm-background.jpg")' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
            Ayushman Cowfit Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Heat Detection Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <FireIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Heat Detection</h3>
            </div>
            {/* Posture Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <UserIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Posture Alerts</h3>
            </div>
            {/* Activity Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <BoltIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Activity Alerts</h3>
            </div>
            {/* Rumination Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Rumination Alerts</h3>
            </div>
            {/* Health Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <HeartIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Health Alerts</h3>
            </div>
            {/* Temperature Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <SunIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Temperature Alerts</h3>
            </div>
            {/* Vaccination Alerts Card */}
            <div className="bg-green-600 p-6 rounded-lg text-center text-white sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4">
                <ShieldCheckIcon className="h-12 w-12" />
              </div>
              <h3 className="font-medium">Vaccination Alerts</h3>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">How Does It Work?</h2>
        <div className="flex justify-center mb-8">
          <div className="max-w-sm w-full rounded-lg shadow-lg overflow-hidden">
            <video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <p className="mb-6 text-justify text-sm sm:text-base">
          Ayushman Cowfit utilizes BLE technology for seamless communication and data transfer within cattle health
          and reproduction monitoring systems.
        </p>
        <ul className="space-y-6 text-sm sm:text-base">
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Device Integration</strong>
              <p>
                BLE-enabled neck collar sensor devices monitor vital signs and health parameters of individual cattle
                within the herd.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Sensor Data Collection</strong>
              <p>
                These sensors gather data on activity levels, rumination, and other health metrics.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Wireless Communication</strong>
              <p>
                BLE enables wireless communication between sensor devices and a gateway device on the farm for data collection.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Data Transmission</strong>
              <p>
                Health and reproductive data are transmitted via BLE to a secure cloud-based platform.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Cloud-Based Storage and Processing</strong>
              <p>
                Data is securely stored and processed in the cloud for advanced analytics.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>Real-Time Monitoring and Analytics</strong>
              <p>
                The system generates alerts for abnormal patterns, enabling timely intervention.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-2">•</div>
            <div>
              <strong>User Interaction and Control</strong>
              <p>
                Farmers can interact with the system, view historical data, and make informed decisions for herd management.
              </p>
            </div>
          </li>
        </ul>
        <p className="mt-6 text-justify text-sm sm:text-base">
          Ayushman Cowfit offers an efficient, wireless solution for collecting, transmitting, and analyzing data,
          empowering farmers to make informed decisions for their livestock's health and well-being.
        </p>
      </div>
    </div>
  )
}
