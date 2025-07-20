import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

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

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-24">
      {/* 3D Animated Bubbles Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'blur(32px)' }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={0.7} />
          <Bubbles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-4">Contact Us</h1>
          <p className="text-2xl text-cyan-900">Get in touch with us for your beverage needs</p>
        </div>
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6">Contact Details</h2>
          <div className="flex flex-col gap-6 items-center">
            <a href="https://wa.me/919978446662" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl text-green-600 hover:text-green-800 transition-colors font-bold">
              <FaWhatsapp className="text-3xl" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/maruti_enterprise19?igsh=MWJrOGFrZ2YycXgyeA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl text-pink-500 hover:text-pink-700 transition-colors font-bold">
              <FaInstagram className="text-3xl" /> Instagram
            </a>
            <a href="mailto:marutienterprise2911@gmail.com" className="flex items-center gap-3 text-xl text-cyan-600 hover:text-cyan-800 transition-colors font-bold">
              <FaEnvelope className="text-3xl" /> Gmail
            </a>
          </div>
          <div className="mt-10 text-cyan-900 text-center">
            <div className="mb-2 font-bold">Address:</div>
            <div>Plot No 5948, Bhimrao Society<br />Ambedkarnagar, Bharat Nagar<br />Bhavnagar, Gujarat, PIN 364002</div>
            <div className="mt-2">GST Number: 24AFEPV7135E1ZG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 