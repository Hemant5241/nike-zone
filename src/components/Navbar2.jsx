import React, { useContext, useState } from 'react'
import Logo from '../assets/logo2.png'
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';
import { NavbarMenu } from './Navbar';
import { ShopContext } from '../context/ShopContext';

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  const { getTotalCartItems } = useContext(ShopContext)
  const location = useLocation()
  
  const cartItemsCount = getTotalCartItems()

  return (
    <>
      <div className='sticky top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 transition-all duration-300'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            
            {/* Logo Section */}
            <div className='shrink-0'>
              <Link to="/">
                <img src={Logo} alt="Logo" className='max-w-[100px] cursor-pointer hover:scale-105 transition-transform duration-300' />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className='hidden md:flex flex-1 justify-center'>
              <ul className='flex items-center gap-8'>
                {NavbarMenu.map((item, index) => {
                  const isActive = location.pathname === item.link;
                  return (
                    <li key={index}>
                      <Link 
                        to={item.link} 
                        className={`inline-block text-[13px] font-black uppercase tracking-widest transition-colors duration-200 relative group ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                      >
                        {item.title}
                        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            {/* Right Icons */}
            <div className='flex items-center gap-6 justify-end'>
              <Link to='/login' className='hidden md:block text-black hover:text-gray-600 transition-colors'>
                <User size={20} strokeWidth={2.5} />
              </Link>
              
              <Link to='/cart' className='relative text-black hover:text-gray-600 transition-colors group'>
                <ShoppingBag size={20} strokeWidth={2.5} />
                {cartItemsCount > 0 && (
                  <span className='absolute -top-2 -right-2.5 bg-[#ff4500] text-white text-[9px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform'>
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              
              {/* Mobile Hamburger */}
              <div className='md:hidden ml-2'>
                <button onClick={toggleMenu} className='text-black p-1'>
                  {showMenu ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  )
}

export default Navbar2
