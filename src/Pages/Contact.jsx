import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6">
            Get in Touch.
          </h1>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            Whether you have a question about our premium gear, need support with an order, or want to collaborate, our team is ready to help you push your limits.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#fafafa] p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors duration-300">
                <MapPin className="w-8 h-8 text-black mb-4 md:mb-6" />
                <h3 className="font-black text-xs uppercase tracking-widest mb-1 md:mb-2">Headquarters</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Pune, Maharashtra<br />
                  India, 411001
                </p>
              </div>
              
              <div className="bg-[#fafafa] p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors duration-300">
                <Phone className="w-8 h-8 text-black mb-4 md:mb-6" />
                <h3 className="font-black text-xs uppercase tracking-widest mb-1 md:mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  +91 00000 00000<br />
                  Mon-Fri, 9AM - 6PM
                </p>
              </div>

              <div className="bg-[#fafafa] p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-black transition-colors duration-300 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <Mail className="w-8 h-8 text-black mb-4 md:mb-6" />
                  <h3 className="font-black text-xs uppercase tracking-widest mb-1 md:mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 font-medium">support@nikezone.com</p>
                </div>
                <button className="px-6 py-3 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors shrink-0">
                  Email Us
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] bg-gray-100 rounded-3xl overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836563636!2d73.7805654522436!3d18.524603597368524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718100518381!5m2!1sen!2sin"
                className="w-full h-full border-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"></div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#fafafa] p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <MessageSquare className="w-6 h-6 text-black" />
              <h2 className="text-xl font-black uppercase tracking-tight">Send a Message</h2>
            </div>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-semibold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="firstName" 
                    className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-[#fafafa] px-1"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-semibold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="lastName" 
                    className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-[#fafafa] px-1"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-semibold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-[#fafafa] px-1"
                >
                  Email Address
                </label>
              </div>

              {/* Subject */}
              <div className="relative pt-2">
                <select
                  id="subject"
                  className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-semibold focus:ring-0 focus:outline-none focus:border-black peer transition-colors cursor-pointer appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">Select a topic...</option>
                  <option value="order">Order Support</option>
                  <option value="product">Product Information</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none pt-2">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <label 
                  htmlFor="subject" 
                  className="absolute left-3 -top-0 text-black font-bold text-[10px] uppercase tracking-wider transition-all bg-[#fafafa] px-1"
                >
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-semibold focus:ring-0 focus:outline-none focus:border-black peer transition-colors resize-none"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-[#fafafa] px-1"
                >
                  Your Message
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-neutral-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.02]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
