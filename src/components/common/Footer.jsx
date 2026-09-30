
import React from 'react'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Website Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              E-commerce
            </h2>

            <p className="text-gray-400">
              A modern website built with React.js and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-white"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-gray-400 hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-400">
              Email: example@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              Phone: +92 215774410
            </p>

            <p className="text-gray-400 mt-2">
              Pakistan
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-gray-400">
            © 2026 E-commerce. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
    </div>
   
  )
}

export default Footer