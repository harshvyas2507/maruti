import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with us for your beverage needs</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Contact Details</h2>
          <div className="flex flex-col gap-6 items-center">
            <a href="https://wa.me/919978446662" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-green-600 hover:text-green-800 transition-colors">
              <FaWhatsapp className="text-3xl" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/maruti_enterprise19?igsh=MWJrOGFrZ2YycXgyeA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-pink-500 hover:text-pink-700 transition-colors">
              <FaInstagram className="text-3xl" /> Instagram
            </a>
            <a href="mailto:marutienterprise2911@gmail.com" className="flex items-center gap-3 text-lg text-blue-600 hover:text-blue-800 transition-colors">
              <FaEnvelope className="text-3xl" /> Gmail
            </a>
          </div>
          <div className="mt-10 text-gray-700 text-center">
            <div className="mb-2 font-semibold">Address:</div>
            <div>Plot No 5948, Bhimrao Society<br />Ambedkarnagar, Bharat Nagar<br />Bhavnagar, Gujarat, PIN 364002</div>
            <div className="mt-2">GST Number: 24AFEPV7135E1ZG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 