import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const links = {
    shop: [
      { name: "Mens", path: "/mens" },
      { name: "Womens", path: "/womens" },
      { name: "Kids", path: "/kids" },
      { name: "New Arrivals", path: "/mens" }
    ],
    help: [
      { name: "Get Help", path: "/contact" },
      { name: "Order Status", path: "/track-order" },
      { name: "Shipping & Delivery", path: "/shipping-returns" },
      { name: "Returns", path: "/shipping-returns" },
      { name: "Size Guide", path: "/size-guide" }
    ],
    company: [
      { name: "About Nike", path: "/about" },
      { name: "News", path: "/about" },
      { name: "Careers", path: "/about" },
      { name: "Investors", path: "/about" }
    ]
  };

  return (
    <footer className="bg-[#0f0f0f] text-white font-poppins pt-24 pb-10 border-t border-white/10 relative overflow-hidden">
      
      {/* Background massive text overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] flex items-center justify-center">
        <span className="text-[25vw] font-black leading-none tracking-tighter whitespace-nowrap text-white">JUST DO IT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top section: Newsletter & Massive Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
              BE THE FIRST<br/>TO KNOW
            </h2>
            <p className="text-white/60 max-w-sm mb-8 text-sm">
              Sign up for Nike emails to get special news and offers.
            </p>
            <div className="flex w-full max-w-md border-b border-white/30 focus-within:border-white transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-white placeholder-white/40 text-sm"
              />
              <button className="text-white hover:text-[#33CCCC] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-self-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/50">Shop</h4>
              <ul className="space-y-4">
                {links.shop.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-medium hover:text-[#33CCCC] transition-colors relative group inline-block">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#33CCCC] transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/50">Get Help</h4>
              <ul className="space-y-4">
                {links.help.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-medium hover:text-[#33CCCC] transition-colors relative group inline-block">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#33CCCC] transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/50">Company</h4>
              <ul className="space-y-4">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-medium hover:text-[#33CCCC] transition-colors relative group inline-block">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#33CCCC] transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex items-center gap-6 text-white/40">
            <span className="text-xs font-medium tracking-wide">
              &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved
            </span>
            <span className="text-xs font-medium tracking-wide">
              Designed by <span className="text-white font-bold">Hemant Bhosale</span>
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
