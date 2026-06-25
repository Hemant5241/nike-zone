import React, { useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
    setFormData({ name: '', email: '', password: '' })
    setShowPassword(false)
  }
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      alert(`${activeTab === 'login' ? 'Logged in successfully!' : 'Signed up successfully!'}`)
      setFormData({ name: '', email: '', password: '' })
    }, 1000)
  }

  return (
    <div className="bg-[#fafafa] min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-5 z-0">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap">ZONE</h1>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-gray-100 max-w-[480px] w-full p-8 sm:p-12 relative z-10">
        
        {/* Header / Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-8">
            <img src={Logo} alt="Logo" className="max-w-[100px] mx-auto" />
          </Link>
          <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-2">
            {activeTab === 'login' ? 'Welcome Back.' : 'Join the Club.'}
          </h2>
          <p className="text-sm font-medium text-gray-500">
            {activeTab === 'login' ? 'Enter your details to access your account.' : 'Create an account for exclusive access to drops.'}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-gray-200 mb-10">
          <button
            type="button"
            onClick={() => handleTabSwitch('login')}
            className={`flex-1 pb-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all duration-300 ${activeTab === 'login' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => handleTabSwitch('signup')}
            className={`flex-1 pb-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all duration-300 ${activeTab === 'signup' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
          >
            Join Us
          </button>
        </div>

        {/* Forms */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {activeTab === 'signup' && (
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-bold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
              />
              <label 
                htmlFor="name" 
                className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-white px-1"
              >
                Full Name
              </label>
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              id="email"
              required
              placeholder=" "
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="block w-full px-2 py-4 bg-transparent border-2 border-gray-200 rounded-lg text-black font-bold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
            />
            <label 
              htmlFor="email" 
              className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-white px-1"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              placeholder=" "
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="block w-full px-2 py-4 pr-10 bg-transparent border-2 border-gray-200 rounded-lg text-black font-bold focus:ring-0 focus:outline-none focus:border-black peer transition-colors"
            />
            <label 
              htmlFor="password" 
              className="absolute left-3 top-4 text-gray-400 font-bold text-sm uppercase tracking-wider transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-black cursor-text bg-white px-1"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center text-gray-400 hover:text-black transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {activeTab === 'login' && (
            <div className="flex justify-end pt-2">
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-black transition-colors underline underline-offset-4 decoration-transparent hover:decoration-black">
                Forgot Password?
              </a>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={submitted}
              className="group w-full flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-neutral-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.02] disabled:bg-gray-300 disabled:shadow-none disabled:scale-100 disabled:cursor-not-allowed"
            >
              <span>{submitted ? 'PROCESSING...' : activeTab === 'login' ? 'SIGN IN' : 'CREATE ACCOUNT'}</span>
              {!submitted && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
