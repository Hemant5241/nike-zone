import React, { useState } from 'react'
import { Package, Search, MapPin, CheckCircle2, Clock, ShieldAlert } from 'lucide-react'

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [error, setError] = useState('')

  const handleTrack = (e) => {
    e.preventDefault()
    setError('')
    
    if (!orderId.trim()) {
      setError('Please enter a valid Order ID')
      return
    }

    // Mock tracking check
    if (orderId.toLowerCase() === 'nike123') {
      setTrackingData({
        orderId: 'NIKE123',
        status: 'In Transit',
        eta: 'June 28, 2026',
        destination: 'Pune, Maharashtra, India',
        steps: [
          { title: 'Order Placed & Confirmed', date: 'June 24, 2026 - 10:30 AM', done: true },
          { title: 'Dispatched from Hub', date: 'June 25, 2026 - 02:15 PM', done: true },
          { title: 'In Transit - Pune Sorting Office', date: 'June 26, 2026 - 09:00 AM', done: false },
          { title: 'Out for Delivery', date: 'Pending', done: false },
        ]
      })
    } else {
      setError('Order ID not found. Use "nike123" for demo tracking!')
    }
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="w-12 h-12 bg-[#138695]/10 rounded-full flex items-center justify-center text-[#138695] mx-auto mb-4">
            <Package size={24} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-500 max-w-sm mx-auto text-sm md:text-base">
            Enter your Order ID to track dispatch updates, locations, and estimated delivery.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="e.g. nike123"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#138695] focus:border-[#138695] bg-white text-gray-900 shadow-sm outline-none"
          />
          <button 
            type="submit"
            className="bg-[#138695] hover:bg-[#0f6c79] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <Search size={18} />
            <span>Track Order</span>
          </button>
        </form>

        {error && (
          <div className="bg-rose-50 border border-rose-200/50 text-rose-800 p-4 rounded-xl max-w-md mx-auto mb-8 flex gap-3 text-sm">
            <ShieldAlert className="flex-shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Tracking Details Card */}
        {trackingData && (
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200/60 pb-6 mb-6 gap-4">
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Tracking Details for</span>
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mt-0.5">Order ID: {trackingData.orderId}</h3>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md font-semibold flex items-center gap-1">
                  <CheckCircle2 size={16} />
                  <span>{trackingData.status}</span>
                </div>
                <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-md font-semibold flex items-center gap-1">
                  <Clock size={16} />
                  <span>ETA: {trackingData.eta}</span>
                </div>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="relative border-l-2 border-gray-200 ml-3 space-y-8 py-2">
              {trackingData.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Dot */}
                  <span className={`absolute left-[-11px] top-1 w-5 h-5 rounded-full border-4 border-white flex items-center justify-center ${step.done ? 'bg-[#138695]' : 'bg-gray-300'}`}></span>
                  
                  <div>
                    <h4 className={`font-bold text-base ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Destination info */}
            <div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center gap-3 text-gray-600 text-sm">
              <MapPin className="text-[#138695]" />
              <span>Delivering to: <strong>{trackingData.destination}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TrackOrder
