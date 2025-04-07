
import AnnouncementImage from "../assets/announcements-hero-section-img.webp"

export default function Announcements() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div
        className="h-64 sm:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AnnouncementImage})`,
        }}
      >
        <h1 className="text-white text-4xl sm:text-6xl font-bold text-center px-4">
          Announcements
        </h1>
      </div>

      {/* Introduction Text */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-base sm:text-lg">
          Stay updated with the latest news and announcements from our website! Explore our announcement section to
          discover exciting updates, product launches, special offers, and more. Be the first to know about our newest
          developments and enhancements to better serve you. Check back regularly to ensure you never miss out on
          what's happening in our dynamic world of innovation and excellence.
        </p>
      </div>

      {/* SYNTHIA AI Engine Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-green-50 p-6 sm:p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            SYNTHIA - AI Engine
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            SYNTHIA, our proprietary AI engine, integrates advanced Machine Learning (ML) algorithms, Language and
            Logic Models (LLMs), and GenAI Technology. Serving as the dynamic nucleus, it processes an extensive array
            of input data, encompassing diverse elements from cows' behavioral patterns to intricate details of their
            lifecycle, health records, and overall farm conditions.
          </p>
          <p className="text-sm sm:text-base">
            SYNTHIA meticulously synthesizes this wealth of information to generate highly targeted alerts tailored
            specifically for dairy farmers. With SYNTHIA's capabilities, farmers receive timely notifications for
            critical events such as insemination, health issues, and comprehensive herd monitoring. The unparalleled
            efficiency with which SYNTHIA handles the magnitude and diversity of data underscores its unmatched
            prowess in the agricultural domain.
          </p>
        </div>
      </div>

      {/* PM Modi Event Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          PM Modi Event
        </h2>

        {/* Video/Image Section */}
        <div className="mb-8">
          <div className="relative aspect-video bg-black">
            <img
              src="/ayushman-product.jpg"
              alt="AYUSHMAN - Cattle Health Monitoring IoT Solution"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 flex items-center text-xs sm:text-sm">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span>0:00 / 1:36</span>
              <div className="flex-grow"></div>
              <button className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l-3.536 3.536M6.414 8.464l3.536 3.536"
                  />
                </svg>
              </button>
              <button className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
              </button>
              <button className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
