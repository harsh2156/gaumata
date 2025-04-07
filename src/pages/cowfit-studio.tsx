"use client"

import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { ChevronLeftIcon, ChevronRightIcon, Squares2X2Icon, ShieldCheckIcon, TagIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import CowFitImageThree from "../assets/cowfit-studio-image-three.svg"
import CowFitImageFour from "../assets/cowfit-studio-image-four.webp"
import CowFitImageFive from "../assets/cowfit-studio-image-five.webp"
import CowFitImageSix from "../assets/cowfit-studio-image-six.svg"
import CowFitImageSeven from "../assets/cowfit-studio-image-seven.svg"
import CowFitImageEight from "../assets/cowfit-studio-image-eight.svg"
import CowFitImageNine from "../assets/cowfit-studio-image-nine.svg"

export default function CowfitStudio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "The products are excellent! Since I started using it, my cow's health has improved significantly compared to the products which I have used previously. It is essential that everyone uses this product as it has a result of 99.9%. This product is widely used among cows and it is crucial to me. Thank You.",
      name: "Akash Inamdar",
      location: "Washim, Sangli, Maharashtra, India",
      image: CowFitImageSix,
    },
    {
      quote:
        "Cowfit Studio has transformed our dairy farm operations. The quality of products and timely delivery has helped us increase our productivity significantly.",
      name: "Rajesh Kumar",
      location: "Pune, Maharashtra, India",
      image: CowFitImageSeven,
    },
    {
      quote:
        "Cowfit Studio has transformed our dairy farm operations. The quality of products and timely delivery has helped us increase our productivity significantly.",
      name: "Rajesh Kumar",
      location: "Pune, Maharashtra, India",
      image: CowFitImageEight,
    },
    {
      quote:
        "Cowfit Studio has transformed our dairy farm operations. The quality of products and timely delivery has helped us increase our productivity significantly.",
      name: "Rajesh Kumar",
      location: "Pune, Maharashtra, India",
      image: CowFitImageNine,
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="bg-yellow-50 p-6 sm:p-8 md:p-16 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Cowfit Studio</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-1">सुख, स्वास्थ्य और समृद्धि</p>
            <p className="text-gray-600 text-base sm:text-lg mb-4">Happiness, Health and Prosperity</p>
            <p className="text-yellow-600 font-medium text-base sm:text-lg">Ecommerce Solutions</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/cowfit-studio-products.jpg"
              alt="Cowfit Studio Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 text-justify">
          <p>
            Cowfit Studio is a pioneering and premium ecommerce platform dedicated to providing integrated solutions
            for all dairy input products aimed at ensuring the safety, comfort, and care of cattle. With a relentless
            focus on customer satisfaction, Cowfit Studio has swiftly emerged as a market leader, serving the needs of
            both small-scale dairy farmers and large enterprises across India. Our commitment to excellence is
            underscored by our mantra: "सुख स्वास्थ्य समृद्धि" (Happiness, Health, Prosperity).
          </p>
          <div className="flex justify-start mt-6">
            <a
              href="https://cowfitstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded transition-colors"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>

      {/* Why Cowfit Studio Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Why Cowfit Studio is best for you?</h2>
          <div className="relative">
            <div className="mb-8">
              <img
                src="/cowfit-studio-products-banner.jpg"
                alt="Cowfit Studio Products"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Diverse Range Card */}
              <div className="bg-yellow-400 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Squares2X2Icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-medium text-center">Diverse range of Input Dairy Products</h3>
              </div>
              {/* Quality Card */}
              <div className="bg-green-500 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <ShieldCheckIcon className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-medium text-center text-white">High-quality products from Trusted Suppliers</h3>
              </div>
              {/* Pricing Card */}
              <div className="bg-yellow-400 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <TagIcon className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-medium text-center">Competitive Pricing</h3>
              </div>
              {/* Ordering Card */}
              <div className="bg-green-500 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {/* <DeviceMobileIcon className="h-12 w-12 text-white" /> */}
                </div>
                <h3 className="font-medium text-center text-white">
                  Easy Ordering Process on Mobile App and Desktop
                </h3>
              </div>
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="mt-12 space-y-6 text-justify">
            <p>
              At Cowfit Studio, we curate a comprehensive range of high-quality products essential for dairy farming
              and processing operations. From specialized cattle feed and nutritional supplements to hygiene products,
              equipment, and machinery, we offer everything needed to optimize cattle health, productivity, and profitability.
            </p>
            <p>
              Cowfit Studio is driven by a customer-centric ethos, ensuring that every product we offer is of the highest
              quality and backed by exceptional service. We prioritize customer feedback and continually strive to exceed
              expectations, earning trust and loyalty across our extensive customer base.
            </p>
            <p>
              With a strong presence across India, Cowfit Studio has established itself as a trusted partner for dairy farmers
              nationwide. Our seamless logistics network ensures timely delivery of products to even the most remote locations,
              empowering farmers with access to essential inputs regardless of their geographical location.
            </p>
            <p>
              Our commitment to excellence extends beyond the quality of our products to encompass every aspect of the customer
              experience. From user-friendly online shopping interfaces to responsive customer support, we go above and beyond
              to ensure that every interaction with Cowfit Studio is a positive and rewarding one.
            </p>
          </div>
        </div>
      </div>

      {/* Our Presence Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our presence</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={CowFitImageThree}
              alt="Total deliveries across India"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Total deliveries across India</h3>
            <img
              src={CowFitImageFour}
              alt="Cowfit Studio Mobile App"
              className="w-full h-auto rounded-lg mt-8"
            />
          </div>
        </div>
      </div>

      {/* Product and Web Portal Features */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Optimized Product and Web Portal Features for Cowfit Studio</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Product Features</h3>
            <ul className="space-y-6 list-disc list-inside">
              <li>
                <strong>Diverse Range of Dairy Input Products</strong>
                <p>
                  Offering cattle feed supplements, equipment, machinery, and hygiene products ensures comprehensive care for both cattle and manpower.
                </p>
              </li>
              <li>
                <strong>Quality Assurance</strong>
                <p>
                  Guaranteeing genuine, high-quality products from trusted suppliers to enhance customer trust and satisfaction.
                </p>
              </li>
              <li>
                <strong>Cost-Effectiveness</strong>
                <p>
                  Providing competitive pricing, bulk discounts, and transparent pricing policies to optimize procurement costs for users.
                </p>
              </li>
              <li>
                <strong>Customization and Bulk Ordering</strong>
                <p>
                  Offering customization options and bulk ordering capabilities to accommodate diverse requirements for dairy farms of all sizes.
                </p>
              </li>
              <li>
                <strong>Industry Expertise</strong>
                <p>
                  Empowering users with access to educational resources and industry insights to make informed decisions and improve dairy farming practices.
                </p>
              </li>
              <li>
                <strong>Convenience</strong>
                <p>
                  Enabling 24/7 accessibility for browsing, ordering, and transaction management, eliminating geographical constraints.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={CowFitImageFive}
              alt="Customer Journey Map"
              className="max-w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">2. Web Portal Features</h3>
            <ul className="space-y-6 list-disc list-inside">
              <li>
                <strong>Seamless Order Processing</strong>
                <p>
                  Simplified ordering process in three steps, with easy product selection and categorization based on relevant criteria.
                </p>
              </li>
              <li>
                <strong>Mobile Compatibility</strong>
                <p>
                  Ensuring accessibility and convenience through a mobile-responsive design or dedicated mobile applications for smartphones and tablets.
                </p>
              </li>
              <li>
                <strong>Integration of Reviews and Ratings</strong>
                <p>
                  Incorporating customer reviews and ratings for informed purchasing decisions, ensuring transparency in product quality and supplier reliability.
                </p>
              </li>
              <li>
                <strong>Educational Resources</strong>
                <p>
                  Providing valuable educational resources such as blogs, articles, and guides on dairy farming best practices, product usage, and industry trends.
                </p>
              </li>
              <li>
                <strong>Customer Support</strong>
                <p>
                  Responsive support channels including live chat, email, and phone support for inquiries, troubleshooting, and after-sales assistance.
                </p>
              </li>
            </ul>
          </div>
          <p>
            Cowfit Studio's ecommerce portal stands as a vital platform catering to the diverse needs of the dairy industry. By offering a wide range of quality products, efficient procurement processes, and valuable educational resources, the platform contributes significantly to the growth and sustainability of dairy farming and processing operations.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-yellow-600 mb-12">Testimonials</h2>
          <div className="relative">
            <div className="bg-yellow-100 p-6 sm:p-8 rounded-lg flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <p className="italic mb-6 text-base sm:text-lg">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <p className="font-semibold text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media and App Download Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div>
            <p className="font-medium mb-4">Follow us on</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-4">Download our app on</p>
            <a href="#" className="inline-block">
              <img src="/google-play.png" alt="Get it on Google Play" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
