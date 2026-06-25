import React from 'react'
import { Truck, RotateCcw, ShieldCheck, AlertCircle } from 'lucide-react'

const ShippingReturns = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Shipping & Returns</h1>
        <p className="text-gray-500 text-center max-w-lg mx-auto mb-10 md:mb-16 text-sm md:text-base">
          Everything you need to know about our dispatch timelines, shipping rates, packaging, and hassle-free returns.
        </p>

        <div className="space-y-8 md:space-y-12">
          {/* Shipping Section */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-4 flex items-center md:items-start gap-4">
              <div className="w-12 h-12 bg-[#138695]/10 rounded-xl flex items-center justify-center text-[#138695] flex-shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900">Shipping Policy</h2>
                <p className="text-[10px] md:text-xs text-gray-400 mt-1">Fast & secure delivery</p>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                We process orders within <strong>24 business hours</strong> of receipt. Once dispatched, you will receive a tracking link via email and SMS to trace your package in real-time.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-500">
                <li><strong>Free Shipping:</strong> On all orders above $150.</li>
                <li><strong>Standard Shipping:</strong> $10 flat fee (3-5 business days).</li>
                <li><strong>Express Shipping:</strong> $25 flat fee (1-2 business days).</li>
              </ul>
            </div>
          </div>

          {/* Returns Section */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-4 flex items-center md:items-start gap-4">
              <div className="w-12 h-12 bg-[#138695]/10 rounded-xl flex items-center justify-center text-[#138695] flex-shrink-0">
                <RotateCcw size={24} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900">Returns & Exchanges</h2>
                <p className="text-[10px] md:text-xs text-gray-400 mt-1">Hassle-free 30-day window</p>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                We want you to love your purchase. If the fit isn't right or you've simply changed your mind, you can return or exchange any item within <strong>30 days of receipt</strong>.
              </p>
              <p>
                To qualify for a refund, the shoes must be returned in their original packaging, unworn, and with all tags intact. We will provide a pre-paid shipping label for your return.
              </p>
            </div>
          </div>

          {/* Guidelines info */}
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200/50 flex gap-3 text-amber-800">
            <AlertCircle className="flex-shrink-0 text-amber-600" />
            <div className="text-xs space-y-1">
              <h4 className="font-bold">Important Note on Exchanges:</h4>
              <p className="leading-relaxed text-amber-700">
                Exchanges are subject to size availability. If the requested size is out of stock, we will issue a store credit or process a full refund to your original payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingReturns
