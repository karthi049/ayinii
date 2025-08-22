import React from "react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description:
        "To deliver innovative solutions that help businesses thrive in the digital age.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Our Values",
      description:
        "Integrity, excellence, and customer satisfaction are at the core of everything we do.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to stay ahead.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Our Team",
      description:
        "A diverse group of passionate professionals dedicated to your success.",
    },
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "20+", label: "Years Experience" },
    { number: "24 hrs", label: "Support Available" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-6">About Ayini</h1>
            <p className="text-xl text-white-300 max-w-3xl mx-auto">
              "Empowering Trust in Every Bite"
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent w-fit leading-[1.1] pb-1">
                Our Story
              </h2>

              <p className="text-lg text-white-600 mb-6">
                At Ayini, we are redefining how food businesses grow, connect,
                and earn consumer trust. We provide a free platform for food
                brands, repackers, manufacturers, and retailers to list,
                certify, market, and sell their products — all under one unified
                ecosystem.
              </p>
              <p className="text-lg text-white-600 mb-6">
                Building Trust from the Ground Up
              </p>
              <p className="text-lg text-white-600 mb-6">
                The journey of Ayini began with a simple question: "How can we
                make food safer, more transparent, and accessible to everyone?"
              </p>

              <p className="text-lg text-white-600">
                In a world where food safety is often taken for granted, and
                small food businesses struggle to gain credibility, we saw an
                opportunity to make a real difference — not just for brands, but
                for the people who rely on them.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-white-600 max-w-2xl mx-auto">
             To Create a new Brand(Ayini Foods) - 
             Ayini's trust (silver) certificiate for local
             and Small scale organisations -
             Ayini Certified(gold) products and places
            - Black Labelled
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-white-600 max-w-2xl mx-auto">
             "Organizing the food sector with transparency,
              quality, and trust for all."
            </p>
          </div>
{/* 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-2">
                  {value.title}
                </h3>
                <p className="text-white-600">{value.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className=" bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });

              // Match number + optional suffix (like "+", "/7")
              const match = stat.number.match(/^(\d+)([^\d]*)$/);
              const numeric = match ? parseInt(match[1]) : null;
              const suffix = match ? match[2] : "";

              return (
                <div key={index} className="text-center" ref={ref}>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-2">
                    {inView && numeric !== null ? (
                      <>
                        <CountUp end={numeric} duration={3} separator="," />
                        {suffix}
                      </>
                    ) : (
                      stat.number
                    )}
                  </div>
                  <div className="text-white-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
