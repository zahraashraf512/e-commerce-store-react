
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold">
          E-commerce
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>

          <Link to="/services" className="hover:text-blue-200">
            Services
          </Link>

          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Login
        </button>

      </div>
    </nav>
       
       
    </div>
  )
}

export default Navbar