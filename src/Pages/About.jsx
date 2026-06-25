import React from 'react'
import { Shield, Sparkles, Star, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-950 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#138695]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#33CCCC] font-bold uppercase tracking-widest text-xs">Our Journey</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-3 mb-6">Nike Zone</h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are redefining performance, style, and innovation. Bringing you the future of athletic footwear with curated designs and premium technology.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Pioneering Next-Gen Athletic Wear</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nike Zone is born out of a passion for sports, lifestyle, and cutting-edge aesthetics. We believe that footwear should not just be worn, but should serve as an extension of your ambition. Every curve, fabric, and stitch is selected to maximize performance and style.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to bring high-fidelity designs, sustainable materials, and advanced cushioning systems to everyday athletes, fitness enthusiasts, and collectors alike.
          </p>
          <div className="flex gap-4">
            <Link to="/mens" className="bg-[#138695] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0f6c79] transition-all shadow-md flex items-center gap-2">
              <span>Explore Men's</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/womens" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all">
              Explore Women's
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8 flex justify-center items-center">
          <img 
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3db2e706-40e9-4ee4-a87c-9b908f4f3db2/NIKE+AIR+MAX+PULSE+ROAM.png" 
            alt="Nike air shoe" 
            className="max-h-[350px] object-contain rotate-[-15deg] hover:rotate-0 transition-transform duration-500 filter drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Value Pillars */}
      <div className="bg-gray-50 py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">What Defines Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#138695]/10 rounded-xl flex items-center justify-center text-[#138695] mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Authenticity & Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We guarantee 100% original merchandise sourced directly. Premium materials that are rigorously tested to ensure maximum durability.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#138695]/10 rounded-xl flex items-center justify-center text-[#138695] mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Innovative Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seamless blend of athletic utility and sleek urban fashion. Pushing the boundaries of cushioning, flexibility, and lightweight design.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#138695]/10 rounded-xl flex items-center justify-center text-[#138695] mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Crafting active support systems and responsive return policies to make sure our community experiences premium customer care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
