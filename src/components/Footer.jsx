import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-xl text-cyan-900 border-t border-white/20 shadow-2xl mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-extrabold mb-2 text-cyan-700">MARUTI ENTERPRISE</h3>
            <p className="text-cyan-800/80 text-sm">Your trusted partner in beverages</p>
            <p className="text-cyan-800/80 mt-1 text-xs">GST: 24AFEPV7135E1ZG</p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2">Contact Info</h3>
            <p className="text-cyan-800/80 text-sm">Plot No 5948, Bhimrao Society</p>
            <p className="text-cyan-800/80 text-sm">Ambedkarnagar, Bharat Nagar</p>
            <p className="text-cyan-800/80 text-sm">Bhavnagar, Gujarat, PIN 364002</p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="text-cyan-800/80 hover:text-cyan-700 font-semibold text-sm">Home</a></li>
              <li><a href="/about" className="text-cyan-800/80 hover:text-cyan-700 font-semibold text-sm">About Us</a></li>
              <li><a href="/products" className="text-cyan-800/80 hover:text-cyan-700 font-semibold text-sm">Products</a></li>
              <li><a href="/contact" className="text-cyan-800/80 hover:text-cyan-700 font-semibold text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-2">Stay Connected</h3>
            <div className="flex gap-3 mb-3">
              <a href="https://wa.me/919978446662" target="_blank" rel="noopener noreferrer" className="text-xl text-green-500 hover:text-green-700"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/maruti_enterprise19?igsh=MWJrOGFrZ2YycXgyeA==" target="_blank" rel="noopener noreferrer" className="text-xl text-pink-500 hover:text-pink-700"><FaInstagram /></a>
              <a href="mailto:marutienterprise2911@gmail.com" className="text-xl text-cyan-600 hover:text-cyan-800"><FaEnvelope /></a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-cyan-200/30 text-center">
          <p className="text-cyan-800/80 text-xs">© MARUTI ENTERPRISE — proudly serving you since 2010. All rights reserved.</p>
          <p className="text-cyan-800/80 text-xs mt-1">Developed by Tripod Developers | <a href="mailto:developerstripod@gmail.com" className="underline hover:text-cyan-700">developerstripod@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 