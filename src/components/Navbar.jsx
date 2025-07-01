import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                className="h-14 w-14 md:h-16 md:w-16" 
                src={logo} 
                alt="Maruti Enterprise" 
                style={{ minWidth: '56px', minHeight: '56px' }}
              />
              <span className="ml-3 text-2xl md:text-3xl font-extrabold text-blue-800 drop-shadow-lg">MARUTI ENTERPRISE</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-lg text-blue-700 hover:text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-110">Home</Link>
            <Link to="/about" className="text-lg text-blue-700 hover:text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-110">About Us</Link>
            <Link to="/products" className="text-lg text-blue-700 hover:text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-110">Products</Link>
            <Link to="/contact" className="text-lg text-blue-700 hover:text-blue-900 px-4 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-110">Contact</Link>
          </div>

          {/* Mobile menu button - only visible on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link to="/" className="text-lg text-blue-700 hover:text-blue-900 block px-3 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-105">Home</Link>
            <Link to="/about" className="text-lg text-blue-700 hover:text-blue-900 block px-3 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-105">About Us</Link>
            <Link to="/products" className="text-lg text-blue-700 hover:text-blue-900 block px-3 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-105">Products</Link>
            <Link to="/contact" className="text-lg text-blue-700 hover:text-blue-900 block px-3 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-105">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 