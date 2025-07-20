import rcWater from '../assets/rc_water.jpg';
import americanPride from '../assets/american_pride_photo.jpg';
import bdSoda from '../assets/bd_soda.jpg';
import bdSodaSolo from '../assets/bd_soda_solo.jpg';
import bdSoda2 from '../assets/bd_soda2.jpg';
import bdLogo from '../assets/bd_logo.jpg';
import rcBanner from '../assets/rc_banner.jpg';
import americanPrideVideo from '../assets/american_pride_video.mp4';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const products = [
  {
    name: 'Royal Challenge Water',
    image: rcWater,
    description: 'Premium quality packaged drinking water for your daily needs.',
    category: 'Royal Challenge',
  },
  {
    name: 'American Pride Soda',
    image: americanPride,
    description: 'Refreshing American Pride soda for every occasion.',
    category: 'Royal Challenge',
  },
  {
    name: 'Black Dog Soda',
    image: bdSoda,
    description: 'Classic Black Dog soda, a favorite for all.',
    category: 'Black Dog',
  },
  {
    name: 'Black Dog Soda Solo',
    image: bdSodaSolo,
    description: 'Solo edition of Black Dog soda.',
    category: 'Black Dog',
  },
  {
    name: 'Black Dog Soda 2',
    image: bdSoda2,
    description: 'Another variant of Black Dog soda.',
    category: 'Black Dog',
  },
];

const cardBase = "bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl animate-fadeInUp border-2 border-cyan-100";
const imgBase = "object-contain mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1";

function Bubbles() {
  return (
    <group>
      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 2.5, i * 0.7 - 3, Math.cos(i) * 2.5]}>
          <sphereGeometry args={[0.28 + 0.09 * (i % 3), 32, 32]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#81e6d9' : '#4fd1c5'} transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

const Products = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const nextProduct = () => setCarouselIndex((i) => (i + 1) % products.length);
  const prevProduct = () => setCarouselIndex((i) => (i - 1 + products.length) % products.length);

  return (
    <div className="min-h-screen relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* 3D Animated Bubbles Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'blur(32px)' }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={0.7} />
          <Bubbles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-2 sm:px-4 md:px-8 mb-10 md:mb-20 gap-8">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-cyan-700 drop-shadow-lg animate-fadeInUp">Our Products</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 text-cyan-900 animate-fadeInUp delay-100">Premium Packaged Drinking Water & Soda</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center z-10 animate-fadeInUp delay-200 w-full">
          {/* Animated Product Card in Carousel */}
          <div className="mt-6 md:mt-8 w-full flex justify-center">
            <div
              className={cardBase + ' scale-105 border-cyan-400 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'}
              style={{ height: 'auto', minHeight: 320, maxHeight: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', boxSizing: 'border-box' }}
            >
              <div style={{ width: '100%', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={products[carouselIndex].image}
                  alt={products[carouselIndex].name}
                  className={imgBase + ' w-auto h-28 sm:h-32 md:h-36 lg:h-40'}
                  style={{ maxHeight: 140, maxWidth: 180, objectFit: 'contain', width: 'auto', height: 'auto', margin: '0 auto' }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-2 text-center w-full">{products[carouselIndex].name}</h3>
              <p className="text-cyan-800 text-base sm:text-lg mb-2 text-center w-full">{products[carouselIndex].description}</p>
              <span className="text-cyan-600 font-semibold text-center w-full">{products[carouselIndex].category}</span>
            </div>
          </div>
          {/* Carousel Controls below card */}
          <div className="flex gap-4 mt-4 justify-center">
            <button onClick={prevProduct} className="bg-cyan-400 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-bold shadow transition-all duration-200">&#8592;</button>
            <button onClick={nextProduct} className="bg-cyan-400 hover:bg-cyan-600 text-white px-4 py-2 rounded-full font-bold shadow transition-all duration-200">&#8594;</button>
          </div>
        </div>
      </div>
      {/* Floating Product Cards Grid */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {products.map((product, i) => (
          <div
            key={i}
            className={cardBase + ' hover:scale-110 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'}
            style={{ animationDelay: `${i * 0.1}s`, minHeight: 320, maxHeight: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={imgBase + ' w-auto h-28 sm:h-32 md:h-36 lg:h-40'}
              style={{ maxHeight: 140, minHeight: 100, objectFit: 'contain' }}
            />
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-2 text-center w-full">{product.name}</h3>
            <p className="text-cyan-800 text-base sm:text-lg mb-2 text-center w-full">{product.description}</p>
            <span className="text-cyan-600 font-semibold text-center w-full">{product.category}</span>
          </div>
        ))}
      </div>
      {/* American Pride Soda Video Section */}
      <div className="my-10 md:my-20 flex flex-col items-center animate-fadeInUp delay-200 w-full px-2 sm:px-4 md:px-0">
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700 mb-2 md:mb-4 text-center w-full">American Pride</h2>
        </div>
        <div className="relative flex justify-center items-center w-full">
          {/* Animated background effect */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-br from-cyan-200 via-blue-200 to-cyan-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          </div>
          {/* Glassmorphism video card */}
          <div className="relative z-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-xl border-4 border-cyan-200/60 p-2 sm:p-4 flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-xl" style={{ minWidth: 0 }}>
            <video 
              src={americanPrideVideo} 
              controls 
              autoPlay
              muted
              loop
              className="rounded-xl shadow-lg w-full border-2 border-cyan-300 hover:scale-105 transition-transform duration-500 bg-white/70 backdrop-blur-md"
              style={{ maxHeight: '260px', minHeight: '120px' }}
              poster={americanPride}
            >
              Your browser does not support the video 
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 