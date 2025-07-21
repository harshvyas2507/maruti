import bdWater1L from '../assets/1liter_blckdog.jpg';
import bdWater500ml from '../assets/500ml_bd.jpg';
import blackDogBoth from '../assets/blackdogboth.jpg';
import bdSodaDuo from '../assets/bd_soda_duo.jpg';
import bdSodaSolo from '../assets/bd_soda_solo.jpg';
import bdLogo from '../assets/bd_logo.jpg';
import rcWater from '../assets/rc_water.jpg';
import rcBanner from '../assets/rc_banner.jpg';
import americanPride from '../assets/american_pride_photo.jpg';
import blackdogVideo from '../assets/blackdog.mp4';

const blackDogWater = [
  { image: bdWater1L },
  { image: blackDogBoth },
  { image: bdWater500ml },
];
const blackDogSoda = [
  { image: bdSodaSolo },
  { image: bdLogo },
  { image: bdSodaDuo },
];
const otherProducts = [
  
  { image: rcBanner },
  {  image: americanPride },
  { image: rcWater },
];

const sectionClass =
  'mb-16 md:mb-24 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto w-full';
const gridClass =
  'grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-10';
const cardClass =
  'bg-[#111] rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-0 transition-transform duration-300 hover:scale-105 border-2 border-cyan-200';
const imgClass =
  'transition-transform duration-300';

function Section({ title, description, products, accent }) {
  return (
    <section className={sectionClass}>
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-2 text-center drop-shadow-lg relative ${accent}`}>{title}</h2>
      <div className="flex justify-center mb-4">
        <span className="block w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></span>
      </div>
      <p className="text-center text-lg text-cyan-900/80 mb-8 max-w-2xl mx-auto">{description}</p>
      <div className={gridClass}>
        {products.map((product, i) => (
          <div key={i} className={cardClass}>
            <img src={product.image} alt="Product" className={imgClass + ' hover:scale-110'} />
          </div>
        ))}
      </div>
    </section>
  );
}

const Products = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-100 via-blue-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-700 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl animate-fadeInUp">Discover Our Premium Beverages</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fadeInUp delay-100">From pure water to classic sodas, experience quality and taste with Maruti Enterprise.</p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="white" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,117.3C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </section>
      {/* Ad Video Split Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-8 relative z-10">
        {/* Video Side */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative rounded-2xl shadow-xl bg-white/60 backdrop-blur-xl border-4 border-cyan-200/60 p-1 sm:p-2 max-w-xs sm:max-w-sm md:max-w-md w-full aspect-square md:aspect-[3/4] flex items-center justify-center">
            <video 
              src={blackdogVideo} 
              controls 
              autoPlay
              muted
              loop
              className="rounded-2xl shadow-lg border-2 border-cyan-300 hover:scale-110 transition-transform duration-500 bg-[#111] backdrop-blur-md"
              poster={bdWater1L}
            >
              Your browser does not support the video 
            </video>
          </div>
        </div>
        {/* Description Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-700 mb-4 drop-shadow-lg">Experience the Refreshment</h2>
          <p className="text-lg md:text-xl text-cyan-900/90 mb-6 max-w-md">Watch our brand ad to see why Maruti Enterprise is trusted for quality, purity, and taste. We deliver the best in packaged water and sodas, ensuring every sip is a delight.</p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">Contact Us</a>
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#e0f7fa" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,117.3C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Section
        title="Black Dog Water"
        description="Our signature packaged drinking water, available in multiple sizes. Pure, refreshing, and trusted for quality."
        products={blackDogWater}
        accent="text-cyan-700"
      />
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#e3f2fd" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,117.3C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Section
        title="Black Dog Soda"
        description="Classic and bold, our Black Dog Soda range is perfect for every celebration. Enjoy the fizz and flavor in every bottle."
        products={blackDogSoda}
        accent="text-blue-700"
      />
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f1f8e9" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,117.3C672,128,768,128,864,117.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Section
        title="Other Products"
        description="Explore our other offerings, including Royal Challenge Water and American Pride. Quality and taste, always."
        products={otherProducts}
        accent="text-green-700"
      />
      <div className="h-16" />
    </div>
  );
};

export default Products; 