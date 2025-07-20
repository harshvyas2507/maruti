import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-xl text-cyan-900 border-t border-white/20 shadow-2xl mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-cyan-700">MARUTI ENTERPRISE</h3>
            <p className="text-cyan-800/80">Your trusted partner in beverages</p>
            <p className="text-cyan-800/80 mt-2">GST: 24AFEPV7135E1ZG</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-cyan-800/80">Plot No 5948, Bhimrao Society</p>
            <p className="text-cyan-800/80">Ambedkarnagar, Bharat Nagar</p>
            <p className="text-cyan-800/80">Bhavnagar, Gujarat, PIN 364002</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-cyan-800/80 hover:text-cyan-700 font-semibold">Home</a></li>
              <li><a href="/about" className="text-cyan-800/80 hover:text-cyan-700 font-semibold">About Us</a></li>
              <li><a href="/products" className="text-cyan-800/80 hover:text-cyan-700 font-semibold">Products</a></li>
              <li><a href="/contact" className="text-cyan-800/80 hover:text-cyan-700 font-semibold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://wa.me/919978446662" target="_blank" rel="noopener noreferrer" className="text-2xl text-green-500 hover:text-green-700"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/maruti_enterprise19?igsh=MWJrOGFrZ2YycXgyeA==" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500 hover:text-pink-700"><FaInstagram /></a>
              <a href="mailto:marutienterprise2911@gmail.com" className="text-2xl text-cyan-600 hover:text-cyan-800"><FaEnvelope /></a>
            </div>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white/80 placeholder-cyan-400" />
              <button type="button" className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cyan-200/30 text-center">
          <p className="text-cyan-800/80">&copy; {new Date().getFullYear()} MARUTI ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 