"use client"

// import Layout from "../components/Layout"
import { type FormEvent, useState } from "react"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    // <Layout>
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      {/* Left Side - Contact Information */}
      <div className="bg-gray-100 p-8 md:w-1/3">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <p className="text-gray-700">
            We love to hear from you. Our friendly team is always here to chat.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-start mb-2">
            <EnvelopeIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <div>
              <h3 className="font-semibold">Chat to us</h3>
              <a href="mailto:connect@areete.org" className="text-gray-700 hover:text-yellow-500">
                connect@areete.org
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start mb-2">
            <MapPinIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <div>
              <h3 className="font-semibold">Office</h3>
              <p className="text-gray-700">
                Areete Business Solutions
                <br />
                605, Baner Business Bay, Pashan - Sus Rd,
                <br />
                Pune Banglore Highway Pashan Exit, behind
                <br />
                Audi, off Mumbai, Mohan Nagar Co-Op
                <br />
                Society, Baner, Pune, Maharashtra 411045
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start mb-2">
            <PhoneIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+918484906188" className="text-gray-700 hover:text-yellow-500">
                +91-8484906188
              </a>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-12">
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

      {/* Right Side - Contact Form */}
      <div className="p-8 md:w-2/3">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Write a message</h2>
          <p className="mb-8">
            You can reach us anytime via{" "}
            <a href="mailto:connect@areete.org" className="text-yellow-500 hover:underline">
              connect@areete.org
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-500 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
    // </Layout>
  )
}
