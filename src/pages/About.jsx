import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaTrophy, FaHandshake, FaUsers, FaRegLightbulb } from 'react-icons/fa';

function Bubbles() {
  // Animated floating bubbles for 3D background
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

const About = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-cyan-700 mb-4 animate-fadeIn">About MARUTI ENTERPRISE</h1>
          <p className="text-2xl text-cyan-900 animate-fadeIn delay-100">Your Trusted Partner in Quality Beverages</p>
        </div>
        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-700 mb-8 animate-fadeInUp">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center animate-fadeInUp delay-100 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <FaTrophy className="text-5xl text-cyan-500 mb-2" />
              <span className="font-bold text-xl">Quality</span>
              <p className="text-cyan-800 text-center mt-2">We deliver only the best, ensuring every product meets the highest standards.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-200 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <FaHandshake className="text-5xl text-green-500 mb-2" />
              <span className="font-bold text-xl">Trust</span>
              <p className="text-cyan-800 text-center mt-2">Building long-term relationships with our customers through honesty and reliability.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-300 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <FaUsers className="text-5xl text-purple-500 mb-2" />
              <span className="font-bold text-xl">Community</span>
              <p className="text-cyan-800 text-center mt-2">We support and uplift our local community with every bottle we deliver.</p>
            </div>
            <div className="flex flex-col items-center animate-fadeInUp delay-400 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <FaRegLightbulb className="text-5xl text-yellow-500 mb-2" />
              <span className="font-bold text-xl">Innovation</span>
              <p className="text-cyan-800 text-center mt-2">Constantly improving our products and services to serve you better.</p>
            </div>
          </div>
        </div>
        {/* Company Vision */}
        <div className="mb-16 animate-fadeInUp delay-500 bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6">Our Vision</h2>
          <p className="text-xl text-cyan-900 text-center max-w-3xl mx-auto">To be the most trusted and innovative beverage company in the region, known for our commitment to quality, customer satisfaction, and community well-being.</p>
        </div>
        {/* Timeline / History */}
        <div className="mb-16 animate-fadeInUp delay-600 bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-cyan-700 mb-8">Our Journey</h2>
          <div className="relative border-l-4 border-cyan-200 pl-8">
            <div className="mb-10">
              <div className="text-cyan-600 font-bold">2010</div>
              <div className="text-cyan-900 font-semibold">Founded in Bhavnagar</div>
              <div className="text-cyan-800">Started with a vision to provide pure drinking water to the community.</div>
            </div>
            <div className="mb-10">
              <div className="text-cyan-600 font-bold">2015</div>
              <div className="text-cyan-900 font-semibold">Expanded Product Line</div>
              <div className="text-cyan-800">Introduced a range of carbonated sodas and beverages.</div>
            </div>
            <div className="mb-10">
              <div className="text-cyan-600 font-bold">2020</div>
              <div className="text-cyan-900 font-semibold">Community Initiatives</div>
              <div className="text-cyan-800">Launched water awareness and health campaigns in local schools.</div>
            </div>
            <div>
              <div className="text-cyan-600 font-bold">2024</div>
              <div className="text-cyan-900 font-semibold">Leading the Market</div>
              <div className="text-cyan-800">Became a leading supplier of packaged drinking water and sodas in the region.</div>
            </div>
          </div>
        </div>
        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-2xl p-10 shadow-xl animate-fadeInUp delay-700">
          <h2 className="text-4xl font-extrabold mb-6 text-center">Our Mission</h2>
          <p className="text-center text-2xl">
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