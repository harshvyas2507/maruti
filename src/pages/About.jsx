import { FaTrophy, FaHandshake, FaUsers, FaRegLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 animate-fadeIn">About MARUTI ENTERPRISE</h1>
          <p className="text-xl text-gray-600 animate-fadeIn delay-100">Your Trusted Partner in Quality Beverages</p>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-700 mb-8 animate-fadeInUp">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center animate-fadeInUp delay-100">
              <FaTrophy className="text-4xl text-blue-500 mb-2" />
              <span className="font-semibold text-lg">Quality</span>
              <p className="text-gray-600 text-center mt-2">We deliver only the best, ensuring every product meets the highest standards.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-200">
              <FaHandshake className="text-4xl text-green-500 mb-2" />
              <span className="font-semibold text-lg">Trust</span>
              <p className="text-gray-600 text-center mt-2">Building long-term relationships with our customers through honesty and reliability.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-300">
              <FaUsers className="text-4xl text-purple-500 mb-2" />
              <span className="font-semibold text-lg">Community</span>
              <p className="text-gray-600 text-center mt-2">We support and uplift our local community with every bottle we deliver.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-400">
              <FaRegLightbulb className="text-4xl text-yellow-500 mb-2" />
              <span className="font-semibold text-lg">Innovation</span>
              <p className="text-gray-600 text-center mt-2">Constantly improving our products and services to serve you better.</p>
            </div>
          </div>
        </div>

        {/* Company Vision */}
        <div className="mb-16 animate-fadeInUp delay-500">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">To be the most trusted and innovative beverage company in the region, known for our commitment to quality, customer satisfaction, and community well-being.</p>
        </div>

        {/* Timeline / History */}
        <div className="mb-16 animate-fadeInUp delay-600">
          <h2 className="text-2xl font-bold text-blue-700 mb-8">Our Journey</h2>
          <div className="relative border-l-4 border-blue-200 pl-8">
            <div className="mb-10">
              <div className="text-blue-600 font-bold">2010</div>
              <div className="text-gray-800 font-semibold">Founded in Bhavnagar</div>
              <div className="text-gray-600">Started with a vision to provide pure drinking water to the community.</div>
            </div>
            <div className="mb-10">
              <div className="text-blue-600 font-bold">2015</div>
              <div className="text-gray-800 font-semibold">Expanded Product Line</div>
              <div className="text-gray-600">Introduced a range of carbonated sodas and beverages.</div>
            </div>
            <div className="mb-10">
              <div className="text-blue-600 font-bold">2020</div>
              <div className="text-gray-800 font-semibold">Community Initiatives</div>
              <div className="text-gray-600">Launched water awareness and health campaigns in local schools.</div>
            </div>
            <div>
              <div className="text-blue-600 font-bold">2024</div>
              <div className="text-gray-800 font-semibold">Leading the Market</div>
              <div className="text-gray-600">Became a leading supplier of packaged drinking water and sodas in the region.</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 animate-fadeInUp delay-700">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
          <p className="text-center text-lg">
            To provide our customers with the highest quality beverages while maintaining the highest standards of service and reliability.
            We strive to be the most trusted name in the beverage industry in Bhavnagar and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

// Animations (add to index.css):
// .animate-fadeIn { animation: fadeIn 1s ease-in; }
// .animate-fadeInUp { animation: fadeInUp 1s ease-in; }
// .delay-100 { animation-delay: 0.1s; }
// .delay-200 { animation-delay: 0.2s; }
// .delay-300 { animation-delay: 0.3s; }
// .delay-400 { animation-delay: 0.4s; }
// .delay-500 { animation-delay: 0.5s; }
// .delay-600 { animation-delay: 0.6s; }
// .delay-700 { animation-delay: 0.7s; } 