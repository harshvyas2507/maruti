import rcWater from '../assets/rc_water.jpg';
import americanPride from '../assets/american_pride_photo.jpg';
import bdSoda from '../assets/bd_soda.jpg';
import bdSodaSolo from '../assets/bd_soda_solo.jpg';
import bdSoda2 from '../assets/bd_soda2.jpg';
import bdLogo from '../assets/bd_logo.jpg';
import rcBanner from '../assets/rc_banner.jpg';
import americanPrideVideo from '../assets/american_pride_video.mp4';

const cardBase = "bg-white/70 backdrop-blur-md rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 sm:p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp";
const imgBase = "object-contain mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1";

const Products = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 relative overflow-hidden">
      {/* Animated Bubbles */}
      <div className="bubble" style={{ left: '10%', width: 24, height: 24, bottom: 0, animationDelay: '0s' }} />
      <div className="bubble" style={{ left: '30%', width: 32, height: 32, bottom: 0, animationDelay: '2s' }} />
      <div className="bubble" style={{ left: '50%', width: 18, height: 18, bottom: 0, animationDelay: '4s' }} />
      <div className="bubble" style={{ left: '70%', width: 28, height: 28, bottom: 0, animationDelay: '1s' }} />
      <div className="bubble" style={{ left: '80%', width: 36, height: 36, bottom: 0, animationDelay: '3s' }} />
      <div className="bubble" style={{ left: '90%', width: 20, height: 20, bottom: 0, animationDelay: '5s' }} />
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 drop-shadow-lg">Our Products</h1>
          <p className="text-lg sm:text-xl text-blue-900/90 drop-shadow">Premium Packaged Drinking Water & Soda</p>
        </div>

        {/* Royal Challenge Category */}
        <div className="mb-12 sm:mb-16 animate-fadeInUp delay-100">
          {/* Big Royal Challenge Marketing Image */}
          <div className="w-full flex justify-center mb-6 sm:mb-10">
            <img 
              src={rcBanner} 
              alt="Royal Challenge Marketing" 
              className="rounded-xl shadow-2xl w-full max-w-3xl object-cover border-4 border-blue-200 hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 sm:mb-8 text-left">Royal Challenge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className={`group ${cardBase} delay-200`}>
              <img src={rcWater} alt="Royal Challenge Water" className={`h-56 sm:h-64 w-auto ${imgBase}`} />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Royal Challenge Water</h3>
            </div>
            <div className={`group ${cardBase} delay-300`}>
              <img src={americanPride} alt="American Pride Soda" className={`h-40 sm:h-48 w-auto ${imgBase}`} />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">American Pride Soda</h3>
            </div>
          </div>
        </div>

        {/* American Pride Soda Video Section */}
        <div className="mb-12 sm:mb-16 flex flex-col items-center animate-fadeInUp delay-200">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 text-left w-full">American Pride </h2>
          <video 
            src={americanPrideVideo} 
            controls 
            autoPlay
            muted
            loop
            className="rounded-lg shadow-lg w-full max-w-2xl border-2 border-blue-300 hover:scale-105 transition-transform duration-500 bg-white/70 backdrop-blur-md"
            style={{ maxHeight: '340px' }}
            poster={americanPride}
          >
            Your browser does not support the video 
          </video>
        </div>

        {/* Black Dog Category */}
        <div className="mb-8 animate-fadeInUp delay-300">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 sm:mb-8 text-left">Black Dog Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto">
            <div className={`group ${cardBase} delay-700`}>
              <img src={bdLogo} alt="Black Dog Logo" className={`h-56 w-auto ${imgBase} bg-black p-2 rounded`} />
              <h3 className="text-lg font-semibold text-gray-900"></h3>
            </div>
            <div className={`group ${cardBase} delay-400`}>
              <img src={bdSoda} alt="Black Dog Soda" className={`h-56 w-auto ${imgBase}`} />
              <h3 className="text-lg font-semibold text-gray-900">Black Dog Soda</h3>
            </div>
            <div className={`group ${cardBase} delay-500`}>
              <img src={bdSodaSolo} alt="Black Dog Soda Solo" className={`h-56 w-auto ${imgBase}`} />
              <h3 className="text-lg font-semibold text-gray-900">Black Dog Soda</h3>
            </div>
            <div className={`group ${cardBase} delay-600`}>
              <img src={bdSoda2} alt="Black Dog Soda 2" className={`h-56 w-auto ${imgBase}`} />
              <h3 className="text-lg font-semibold text-gray-900">Black Dog Soda </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 