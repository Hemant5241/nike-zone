import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Target, Layers } from 'lucide-react'
import all_product from '../Utils/all_product'
import { motion, AnimatePresence } from 'framer-motion'

const FadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const StaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const HomeFeatures = ({ activeData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Take first 4 products to show on the landing page
  const featuredProducts = all_product.slice(0, 4)

  return (
    <div className="bg-[#f8f8f8] text-gray-900 font-poppins relative z-10">
      
      {/* 1. Explore Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FadeUp}
          className="text-center mb-16"
        >
          <div className='inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-6'>
            <span className='w-2 h-2 rounded-full bg-black'></span>
            <span className='text-xs font-semibold tracking-wider uppercase text-black'>Elevated Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-black">Shop by Category</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-normal">Explore high-performance gear designed specifically for your training and lifestyle needs. Form meets function.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row h-[600px] gap-4 w-full">
          {[
            {
              id: 1,
              title: "MEN",
              subtitle: "High Performance",
              desc: "Built for endurance, speed, and maximum strength.",
              link: "/mens",
              img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80"
            },
            {
              id: 2,
              title: "WOMEN",
              subtitle: "Sleek & Agile",
              desc: "Engineered for absolute comfort, flex, and style.",
              link: "/womens",
              img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80"
            },
            {
              id: 3,
              title: "KIDS",
              subtitle: "Play Harder",
              desc: "Durable, flexible, and fun footwear for active youngsters.",
              link: "/kids",
              img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
            }
          ].map((cat, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={cat.id}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  flex: !isAnyHovered ? 1 : isHovered ? 4 : 0.5
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2rem] overflow-hidden cursor-pointer group flex-1 md:flex-auto h-[200px] md:h-full shadow-lg border border-black/5 bg-white"
              >
                <motion.img 
                  src={cat.img} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover origin-center mix-blend-normal"
                  animate={{ 
                    scale: isHovered ? 1.05 : 1,
                    opacity: isHovered ? 1 : 0.85,
                    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)'
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  animate={{ opacity: isHovered ? 0.9 : 0.6 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end overflow-hidden">
                  <div className="flex flex-col h-full justify-end relative">
                    
                    {/* Collapsed Vertical Text (Hidden on Hover) */}
                    <AnimatePresence>
                      {!isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 hidden md:block"
                        >
                          <h3 
                            className="text-4xl lg:text-5xl font-black text-white/90 tracking-widest uppercase origin-bottom-left"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                          >
                            {cat.title}
                          </h3>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expanded Horizontal Content */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                          className="w-full"
                        >
                          <span className="text-xs font-bold text-white uppercase tracking-[0.2em] block mb-2">{cat.subtitle}</span>
                          <h3 className="text-5xl md:text-7xl font-black text-white whitespace-nowrap tracking-tighter mb-4 text-shadow">
                            {cat.title}
                          </h3>
                          <p className="text-white/90 font-normal mb-8 max-w-md hidden md:block leading-relaxed text-lg">
                            {cat.desc}
                          </p>
                          <Link to={cat.link} className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl">
                            Shop {cat.title} <ArrowRight size={16} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile always show title if not hovered (since no hover on mobile) */}
                    <div className="md:hidden block">
                       {!isHovered && <h3 className="text-3xl font-black text-white">{cat.title}</h3>}
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 2. Tech & Innovation Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FadeUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div className="max-w-xl">
            <div className='inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-6'>
              <span className='text-xs font-semibold tracking-wider uppercase text-black'>Nike Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">Built to Perform</h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-md font-normal">
            Discover the state-of-the-art design components engineered to push the boundaries of athletic potential.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={StaggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Tech Card 1 */}
          <motion.div variants={FadeUp} className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-8">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Zoom Air</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tightly stretched tensile fibers inside a pressurized Air unit deliver explosive, snappy response and shock absorption.
            </p>
          </motion.div>

          {/* Tech Card 2 */}
          <motion.div variants={FadeUp} className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-8">
              <Layers size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Engineered Flyknit</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Constructed from high-strength polyester yarns to create a featherweight, form-fitting upper that feels like a second-skin.
            </p>
          </motion.div>

          {/* Tech Card 3 */}
          <motion.div variants={FadeUp} className="bg-white border border-gray-200 shadow-sm p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-8">
              <Target size={20} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Waffle Grip Outsole</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                Re-engineered deep-lug rubber sole designs provide exceptional multi-surface traction, stability, and control.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Trending Products / Top Sellers */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FadeUp}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6"
        >
          <div>
            <div className='inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-6'>
              <span className='text-xs font-semibold tracking-wider uppercase text-black'>Weekly Hotlist</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">Trending Now</h2>
          </div>
          <Link to="/mens" className="flex items-center gap-2 text-black font-bold text-sm transition-all hover:opacity-70">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={StaggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={FadeUp} className="group">
              <Link to={`/products/${product.id}`} className="block bg-[#f0f0f0] rounded-[2rem] p-6 relative mb-4 aspect-square flex items-center justify-center hover:bg-[#e8e8e8] transition-all">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full max-h-[160px] object-contain mx-auto group-hover:scale-110 transition-transform duration-500 img-shadow"
                />
              </Link>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg tracking-tight text-black line-clamp-1">{product.name}</h3>
                  <span className="text-black font-black text-lg">${product.new_price}</span>
                </div>
                <span className="text-[12px] font-medium text-gray-500 capitalize block">{product.category}'s Shoes</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Sleek Call-To-Action Banner */}
      <section className="py-24 px-6 max-w-7xl mx-auto mb-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FadeUp}
          className="rounded-[3rem] overflow-hidden bg-black text-white p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">Step Into The Future. Feel The Cushion.</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-normal">
              Explore the ultimate selection of trainers at Nike Zone, designed for the modern era. Designed for elite athletes, worn by everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="bg-white text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
                Join Now
              </Link>
              <Link to="/about" className="bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/20">
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="w-full max-w-[300px] md:max-w-[400px] flex justify-center items-center">
            <img 
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff006170-ba26-4d1e-b4eb-a7560b213c3b/AIR+MAX+270.png" 
              alt="Nike shoe banner" 
              className="object-contain -rotate-[20deg] hover:rotate-0 hover:scale-105 transition-all duration-700 w-full img-shadow"
            />
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default HomeFeatures
