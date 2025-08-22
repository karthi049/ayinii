import React from "react";
import { Star, Users, Award, BadgeCheck, Shield } from "lucide-react";
import certificate from "../images/certificate.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductFlow from "../components/ProductFlow";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Quality Service",
      description: "We deliver exceptional quality in everything we do.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Expert Team",
      description: "Our team consists of industry experts and professionals.",
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "Award Winning",
      description: "Recognized for excellence in our field multiple times.",
    },
  ];

  const certifications = [
    {
      title: "Ayini's Trust (Silver Certificate)",
      description: "Awarded to trusted local and small-scale organizations.",
      color: "bg-gray-200 text-gray-800",
      icon: <Shield className="w-6 h-6 text-gray-500" />,
    },
    {
      title: "Ayini Certified (Gold)",
      description: "Given to premium quality products and certified places.",
      color: "bg-yellow-300 text-yellow-900",
      icon: <Star className="w-6 h-6 text-yellow-700" />,
    },
    {
      title: "Black Labelled",
      description: "Denotes exclusive or elite-level Ayini recognition.",
      color: "bg-black text-white",
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div>
      <section className="relative bg-black text-white py-40 overflow-hidden">
      {/* Full Background 3D Model via iframe */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/forestlightscopy-FOTPRv5fjaHCz6xMKFEywFpp/"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
          }}
          title="3D Background Model"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Centered Content */}
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-marker mb-2 text-white">
              Welcome to
            </h2>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-marker bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent mb-6 leading-none">
              Ayin!
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white">
              We create amazing experiences that drive results for your
              business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.doof.doofcustomer",
                    "_blank"
                  )
                }
                className="bg-gray-900 text-orange-400 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Download App
              </button>

              <button className="border-2 border-gray-900 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-orange-400 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Card - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-black bg-opacity-100 px-4 py-3 rounded-lg border border-black">
          <p className="text-white text-sm font-medium">
            Tap and scroll to Interact
          </p>
        </div>
      </div>
    </section>
      <div>
        <section
          className="w-full h-screen bg-black flex flex-col md:flex-row"
        >
          {/* Left Side: Image */}
          <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
            <img
              src={certificate}
              alt="Illustration"
              className="w-250 h-250 object-contain"
            />
          </div>

          {/* Right Side: Text */}
          <div className="md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-marker bg-gradient-to-r from-orange-400 to-orange-900 bg-clip-text text-transparent mb-4">Why Ayini ?</h1>
              <p className="text-lg text-white mb-6">
                Your gateway to powerful digital certifications and learning
                tools.
              </p>
              <button className="border-2 border-gray-900 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-orange-400 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className=" backdrop-blur-md bg-white/5 shadow-sm p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-black" id="certifications">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ayini Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
            {certifications.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-110 ${item.color}`}
              >
                {item.icon}
                <h3 className="text-lg md:text-xl font-arial font-semibold mt-3 mb-2 md:mt-4 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

<section className="py-16 bg-black text-white" id="industries">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Types of Industries to Certify
    </h2>

    <div className="flex flex-wrap justify-center gap-8">
      {[
        { title: "Manufacturer", desc: "Food and food related products", color: "bg-cyan-500 text-black" },
        { title: "Repackers", desc: "Flour, oil etc.", color: "bg-teal-500 text-black" },
        { title: "Wholesalers", desc: "Spices, groceries, fruits, vegetables, meat", color: "bg-green-600 text-black" },
        { title: "Restaurants", desc: "Restaurants using certified products", color: "bg-yellow-300 text-black" },
        { title: "Shops", desc: "Shops selling certified products only", color: "bg-red-500 text-black" },
      ].map((item, idx) => (
        <div
          key={idx}
          data-aos="zoom-in"
          data-aos-delay={idx * 200} // delay for staggered effect
          className={`flex flex-col items-center text-center w-48 p-4 rounded-xl shadow-lg transform transition ${item.color}`}
        >
          {/* Circle / Number */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white font-bold mb-3">
            {idx + 1}
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="w-full">
        <ProductFlow />
      </section>

      </section>

    </div>
  );
};

export default Home;
