const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to MARUTI ENTERPRISE</h1>
            <p className="text-xl md:text-2xl mb-8">Your Trusted Partner in Quality Beverages</p>
            <a href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">Pure Drinking Water</h3>
              <p className="text-gray-600">Premium quality packaged drinking water for your daily needs</p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">🥤</div>
              <h3 className="text-xl font-semibold mb-2">Cold Drinks</h3>
              <p className="text-gray-600">Wide range of refreshing cold beverages</p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">Timely delivery to your doorstep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for your beverage needs</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home 