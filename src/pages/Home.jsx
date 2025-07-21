import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function MyModel() {
  const { scene } = useGLTF('/myModel.glb');
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

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

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Animated Bubbles Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'blur(32px)' }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={0.7} />
          <Bubbles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      {/* 3D Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 gap-8 mb-16">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg animate-fadeInUp">Welcome to <span className="t px-2 rounded-xl backdrop-blur-md">MARUTI ENTERPRISE</span></h1>
          <p className="text-2xl md:text-3xl mb-8 text-white/90 animate-fadeInUp delay-100">Your Trusted Partner in Quality Beverages</p>
          <a href="/products" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:scale-105 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 animate-fadeInUp delay-200">
            Explore Our Products
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center z-10 animate-fadeInUp delay-300">
          <div className="rounded-3xl shadow-2xl bg-white/30 backdrop-blur-xl p-4 md:p-8" style={{ width: 350, height: 400 }}>
            <Suspense fallback={<div className='text-white'>Loading 3D...</div>}>
              <Canvas shadows camera={{ position: [0, 2, 6], fov: 40 }} style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
                <Stage environment="city" intensity={0.6}>
                  <MyModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-16 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 animate-fadeInUp delay-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-cyan-500 text-5xl mb-4">💧</div>
            <h3 className="text-2xl font-bold mb-2">Pure Drinking Water</h3>
            <p className="text-gray-700 text-lg">Premium quality packaged drinking water for your daily needs</p>
          </div>
          <div className="text-center p-6">
            <div className="text-cyan-500 text-5xl mb-4">🥤</div>
            <h3 className="text-2xl font-bold mb-2">Cold Drinks</h3>
            <p className="text-gray-700 text-lg">Wide range of refreshing cold beverages</p>
          </div>
          <div className="text-center p-6">
            <div className="text-cyan-500 text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-2">Reliable Delivery</h3>
            <p className="text-gray-700 text-lg">Timely delivery to your doorstep</p>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-16 mt-16 rounded-3xl shadow-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp delay-500">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="text-2xl mb-8">Contact us today for your beverage needs</p>
        <a href="/contact" className="bg-white text-cyan-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-cyan-100 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Home 