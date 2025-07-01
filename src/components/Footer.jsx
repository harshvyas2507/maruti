const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MARUTI ENTERPRISE</h3>
            <p className="text-gray-300">Your trusted partner in beverages</p>
            <p className="text-gray-300 mt-2">GST: 24AFEPV7135E1ZG</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300">Plot No 5948, Bhimrao Society</p>
            <p className="text-gray-300">Ambedkarnagar, Bharat Nagar</p>
            <p className="text-gray-300">Bhavnagar, Gujarat, PIN 364002</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} MARUTI ENTERPRISE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 