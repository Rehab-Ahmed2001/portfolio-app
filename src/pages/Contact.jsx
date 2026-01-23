import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Tabs from "../components/Tabs";

const contactInfo = [
  {
    title: "Phone",
    description: "01201820186",
    icon: <FaPhoneAlt className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Email",
    description: "khawasrehab@gmail.com",
    icon: <FaEnvelope className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Address",
    description: "Cairo, Egypt",
    icon: <FaMapMarkedAlt className="w-6 h-6 text-purple-600" />,
  },
];

export default function Contact() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side – Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-5 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="text-base font-semibold text-gray-900">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side – Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Let’s work together
              </h2>
              <p className="text-gray-600 mb-6">
                Have a project or idea? Send me a message.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                  placeholder="Type your message here..."
                  className="w-full h-[160px] px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
