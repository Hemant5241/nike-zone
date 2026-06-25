import React from 'react'
import Navbar from './Navbar'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { UpdateFollower } from "react-mouse-follower"
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ChevronDown } from 'lucide-react'

const FadeUp = (delay) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: easeInOut }
  },
  exit: {
    opacity: 0, y: -20,
    transition: { duration: 0.3, ease: easeInOut }
  }
})

const FadeIn = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay, ease: easeInOut }
  }
})

const Hero = ({ activeData, activeIndex, handleActiveData, ShoesData }) => {

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className='text-white relative overflow-hidden'
      >
        {/* Navbar */}
        <Navbar />

        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            key={activeData.id + '-glow'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
            style={{ backgroundColor: 'white' }}
          />
          <motion.div
            key={activeData.id + '-glow2'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{ backgroundColor: 'white' }}
          />
        </div>

        {/* Giant background text */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeData.id + '-bg'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className='absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0'
          >
            <span className='text-white/[0.03] text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[28rem] font-black uppercase leading-none tracking-tighter'>
              {activeData.modal}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main hero layout */}
        <div className='container relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center gap-8 pb-28 lg:pb-0 pt-32 lg:pt-0'>

          {/* Left: Content Area (7 cols) */}
          <div className='lg:col-span-5 flex flex-col justify-center py-10 lg:py-0 order-2 lg:order-1'>
            <div className='space-y-6 text-center lg:text-left'>

              {/* Small Tag */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeData.id + '-tag'}
                  variants={FadeUp(0.1)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5'
                >
                  <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
                  <span className='text-xs font-semibold tracking-wider uppercase'>New Release — {activeData.modal}</span>
                </motion.div>
              </AnimatePresence>

              {/* Title */}
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: 'difference',
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id + '-title'}
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] text-shadow'
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode='wait'>
                <motion.p
                  key={activeData.id + '-sub'}
                  variants={FadeUp(0.35)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='text-sm md:text-base leading-relaxed text-white/70 max-w-md mx-auto lg:mx-0'
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              {/* Rating + Reviews */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeData.id + '-rating'}
                  variants={FadeUp(0.45)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='flex items-center gap-3 justify-center lg:justify-start'
                >
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(activeData.rating) ? '#fbbf24' : 'transparent'} stroke='#fbbf24' />
                    ))}
                  </div>
                  <span className='text-xs font-bold text-white/90'>{activeData.rating}</span>
                  <span className='text-xs text-white/50'>({activeData.reviews.toLocaleString()} reviews)</span>
                </motion.div>
              </AnimatePresence>

              {/* Price + CTA */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeData.id + '-cta'}
                  variants={FadeUp(0.55)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className='flex flex-col sm:flex-row items-center gap-5 pt-2'
                >
                  <div className='flex items-baseline gap-3'>
                    <span className='text-3xl md:text-4xl font-black'>{activeData.price}</span>
                    <span className='text-lg text-white/40 line-through font-semibold'>{activeData.oldPrice}</span>
                  </div>

                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: activeData.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      scale: 6,
                      backgroundElement: (
                        <div>
                          <img src={activeData.image} alt="" />
                        </div>
                      )
                    }}
                  >
                    <Link to='/mens'>
                      <button
                        style={{ color: activeData.bgColor }}
                        className='group px-7 py-3 bg-white font-bold rounded-full flex items-center gap-2 hover:gap-3 transition-all duration-300 shadow-lg shadow-black/20 text-sm'
                      >
                        <span>Shop Now</span>
                        <ArrowRight size={16} className='group-hover:translate-x-0.5 transition-transform' />
                      </button>
                    </Link>
                  </UpdateFollower>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Hero Shoe Image (5 cols) */}
          <div className='lg:col-span-4 flex items-center justify-center relative order-1 lg:order-2 pt-4 lg:pt-0'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeData.id + '-shoe'}
                initial={{ opacity: 0, scale: 0.8, rotate: 15, y: 60 }}
                animate={{ opacity: 1, scale: 1, rotate: -30, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: -60, y: -40, transition: { duration: 0.4 } }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                src={activeData.image}
                alt={activeData.title}
                className='w-[260px] md:w-[320px] lg:w-[420px] xl:w-[500px] img-shadow z-10 relative'
              />
            </AnimatePresence>

            {/* Floating circular accent behind shoe */}
            <motion.div
              key={activeData.id + '-ring'}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className='absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-white/10 z-0'
            />
            <motion.div
              key={activeData.id + '-ring2'}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className='absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] rounded-full border border-white/5 z-0'
            />
          </div>

          {/* Right: Vertical Shoe Picker (3 cols) */}
          <div className='lg:col-span-3 flex flex-wrap lg:flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 order-3'>
            
            {/* Slide progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='hidden lg:flex flex-col items-center gap-2 mb-4'
            >
              {ShoesData.map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    height: activeIndex === idx ? 32 : 8,
                    backgroundColor: activeIndex === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'
                  }}
                  transition={{ duration: 0.4 }}
                  className='w-[3px] rounded-full'
                />
              ))}
            </motion.div>

            {ShoesData.map((data, index) => (
              <UpdateFollower key={index}
                mouseOptions={{
                  backgroundColor: data.bgColor,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                  text: "View",
                  textFontSize: '3px'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  onClick={() => handleActiveData(data, index)}
                  className={`cursor-pointer p-3 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                    activeIndex === index
                      ? 'bg-white/15 border-white/30 scale-105 shadow-lg shadow-black/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    className={`w-[60px] md:w-[70px] img-shadow transition-all duration-300 ${
                      activeIndex === index ? 'opacity-100 scale-110' : 'opacity-60'
                    }`}
                  />
                  <div className='text-center'>
                    <p className='text-[10px] font-bold text-white/50 uppercase tracking-widest'>{data.modal}</p>
                    <p className='text-sm font-extrabold mt-0.5'>{data.price}</p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10'
        >
          <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/30'>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className='text-white/30' />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Hero
