import { useEffect, useState } from 'react';
import rcWater from '../assets/rc_water.jpg';
import americanPride from '../assets/american_pride_photo.jpg';
import bdSoda from '../assets/bd_soda.jpg';
import bdSodaSolo from '../assets/bd_soda_solo.jpg';
import bdSoda2 from '../assets/bd_soda2.jpg';
import bdLogo from '../assets/bd_logo.jpg';
import rcBanner from '../assets/rc_banner.jpg';
import americanPrideVideo from '../assets/american_pride_video.mp4';
import oneLiterBlackDog from '../assets/1liter_blckdog.png';
import fiveHundredMlBlackDog from '../assets/500ml_bd.png';
import blackDogBoth from '../assets/blakcdogboth.png';
import { FaMedal, FaTint, FaCrown, FaDog } from 'react-icons/fa';

const cardBase = "bg-white/70 backdrop-blur-md rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 sm:p-6 transition-transform duration-300 hover:shadow-xl hover:border-blue-200 border border-transparent animate-fadeInUp";
const imgBase = "object-contain mb-4 transition-transform duration-300";

const typewriterTexts = [
  'Refresh.',
  'Rejuvenate.',
  'Royalty in Every Drop.'
];

function Typewriter() {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = typewriterTexts[textIdx];
    if (!deleting && charIdx < currentText.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 80);
      setDisplayed(currentText.slice(0, charIdx + 1));
    } else if (!deleting && charIdx === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
      setDisplayed(currentText.slice(0, charIdx - 1));
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((textIdx + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx]);

  return (
    <span className="text-blue-700 font-extrabold text-2xl sm:text-3xl tracking-wide font-sans h-12 inline-block min-h-[2.5rem]">{displayed}<span className="border-r-2 border-blue-700 animate-pulse ml-1" /></span>
  );
}

const Products = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 relative overflow-hidden">
   
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-0 animate-fadeInUp">
          <Typewriter />
        </div>
        <div className="text-center mb-10 sm:mb-14 animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl font-extrabold font-sans text-blue-900 drop-shadow-lg tracking-tight" style={{marginTop: 0}}>
            Our Products
          </h1>
          <p className="text-xl sm:text-2xl font-medium font-sans text-blue-900/90 drop-shadow">
            Premium Packaged Drinking Water & Soda
          </p>
        </div>
        {/* Royal Challenge Category */}
        <div className="mb-12 sm:mb-16 animate-fadeInUp delay-100 mt-10 sm:mt-14">
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
              <img src={rcWater} alt="Royal Challenge Water" className={`h-56 sm:h-64 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-900 mt-2 mb-1">Royal Challenge Water</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Pure, refreshing packaged drinking water for every occasion.</p>
            </div>
            <div className={`group ${cardBase} delay-300`}>
              <img src={americanPride} alt="American Pride Soda" className={`h-40 sm:h-48 w-auto ${imgBase}`} width="180" height="192" loading="lazy" />
              <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-900 mt-2 mb-1">American Pride Soda</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Classic soda with a bold, crisp taste to energize your day.</p>
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
              <img src={bdLogo} alt="Black Dog Logo" className={`h-56 w-auto ${imgBase} bg-black p-2 rounded`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Brand</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Symbol of quality and trust in every drop and bubble.</p>
            </div>
            <div className={`group ${cardBase} delay-400`}>
              <img src={bdSoda} alt="Black Dog Soda" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Soda</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Sparkling soda with a unique, refreshing flavor.</p>
            </div>
            <div className={`group ${cardBase} delay-500`}>
              <img src={bdSodaSolo} alt="Black Dog Soda Solo" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Soda Solo</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Perfect for solo refreshment, anytime, anywhere.</p>
            </div>
            <div className={`group ${cardBase} delay-600`}>
              <img src={bdSoda2} alt="Black Dog Soda 2" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Soda</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Enjoy the classic taste in every sip.</p>
            </div>
            {/* New Black Dog Water Products */}
            <div className={`group ${cardBase} delay-800`}>
              <img src={oneLiterBlackDog} alt="Black Dog Water 1 Liter" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Water 1L</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Convenient 1L bottle for hydration on the go.</p>
            </div>
            <div className={`group ${cardBase} delay-900`}>
              <img src={fiveHundredMlBlackDog} alt="Black Dog Water 500ml" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Water 500ml</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Compact 500ml bottle, perfect for travel and daily use.</p>
            </div>
            <div className={`group ${cardBase} delay-1000`}>
              <img src={blackDogBoth} alt="Black Dog Water 1L & 500ml" className={`h-56 w-auto ${imgBase}`} width="220" height="256" loading="lazy" />
              <h3 className="text-lg font-bold font-sans text-gray-900 mt-2 mb-1">Black Dog Water (1L & 500ml)</h3>
              <p className="text-sm text-gray-700 font-sans text-center px-2">Choose your size: 1L for sharing, 500ml for convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 