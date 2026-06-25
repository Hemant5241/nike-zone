import React, { useState } from 'react'
import { Ruler, Check, Info } from 'lucide-react'

const SizeGuide = () => {
  const [footLength, setFootLength] = useState('')
  const [calculatedSize, setCalculatedSize] = useState(null)
  const [activeGender, setActiveGender] = useState('men')

  const handleCalculate = (e) => {
    e.preventDefault()
    const length = parseFloat(footLength)
    if (isNaN(length) || length < 15 || length > 35) {
      setCalculatedSize(null)
      alert('Please enter a realistic foot length between 15 cm and 35 cm.')
      return
    }

    // Rough conversion logic for demo
    let ukSize = 6
    if (length <= 24.4) ukSize = 5
    else if (length <= 25.1) ukSize = 6
    else if (length <= 25.7) ukSize = 7
    else if (length <= 26.4) ukSize = 8
    else if (length <= 27.1) ukSize = 9
    else if (length <= 27.8) ukSize = 10
    else if (length <= 28.6) ukSize = 11
    else ukSize = 12

    setCalculatedSize(ukSize)
  }

  const chartData = {
    men: [
      { uk: 'UK 5', us: 'US 5.5', eu: 'EU 38.5', cm: '24.1' },
      { uk: 'UK 6', us: 'US 6.5', eu: 'EU 39.5', cm: '24.8' },
      { uk: 'UK 7', us: 'US 7.5', eu: 'EU 40.5', cm: '25.4' },
      { uk: 'UK 8', us: 'US 8.5', eu: 'EU 42', cm: '26.2' },
      { uk: 'UK 9', us: 'US 9.5', eu: 'EU 43', cm: '27.1' },
      { uk: 'UK 10', us: 'US 10.5', eu: 'EU 44.5', cm: '27.9' },
      { uk: 'UK 11', us: 'US 11.5', eu: 'EU 45.5', cm: '28.8' },
      { uk: 'UK 12', us: 'US 12.5', eu: 'EU 47', cm: '29.6' },
    ],
    women: [
      { uk: 'UK 3', us: 'US 5.5', eu: 'EU 36', cm: '22.4' },
      { uk: 'UK 4', us: 'US 6.5', eu: 'EU 37.5', cm: '23.3' },
      { uk: 'UK 5', us: 'US 7.5', eu: 'EU 38.5', cm: '24.1' },
      { uk: 'UK 6', us: 'US 8.5', eu: 'EU 39.5', cm: '24.8' },
      { uk: 'UK 7', us: 'US 9.5', eu: 'EU 40.5', cm: '25.4' },
      { uk: 'UK 8', us: 'US 10.5', eu: 'EU 42', cm: '26.2' },
      { uk: 'UK 9', us: 'US 11.5', eu: 'EU 43', cm: '27.1' },
    ]
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="w-12 h-12 bg-[#138695]/10 rounded-full flex items-center justify-center text-[#138695] mx-auto mb-4">
            <Ruler size={24} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Official Sizing & Fit Guide</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Find your perfect fit. Compare international sizes, calculate your Nike shoe size, and learn how to measure your feet correctly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Sizing Calculator */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Foot Length Calculator</h2>
            <p className="text-xs text-gray-500 mb-6">Enter your heel-to-toe measurement in centimeters to calculate your estimated UK size.</p>
            
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Foot Length (in cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    placeholder="e.g. 26.5"
                    value={footLength}
                    onChange={(e) => setFootLength(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#138695]/20 focus:border-[#138695] bg-white text-gray-900 shadow-sm outline-none font-semibold text-sm"
                  />
                  <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm font-bold text-gray-400">cm</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#138695] hover:bg-[#0f6c79] text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-md"
              >
                Find My Size
              </button>
            </form>

            {calculatedSize && (
              <div className="mt-8 p-5 bg-[#138695]/5 border border-[#138695]/10 rounded-xl text-center">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Estimated Nike Size is</span>
                <div className="text-4xl font-black text-[#138695] mt-1">UK {calculatedSize}</div>
                <p className="text-xs text-gray-500 mt-2">Recommended fit based on normal athletic socks.</p>
              </div>
            )}
          </div>

          {/* Sizing Charts */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Conversion Charts</h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveGender('men')}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${activeGender === 'men' ? 'bg-[#138695] text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Men
                </button>
                <button
                  onClick={() => setActiveGender('women')}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${activeGender === 'women' ? 'bg-[#138695] text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Women
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#138695]/5 text-[#138695] font-bold text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-3 border-r border-gray-200">UK Size</th>
                    <th className="p-3 border-r border-gray-200">US Size</th>
                    <th className="p-3 border-r border-gray-200">EU Size</th>
                    <th className="p-3">Heel-to-Toe (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700 divide-y divide-gray-100 bg-white">
                  {chartData[activeGender].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-3 font-bold border-r border-gray-100">{row.uk}</td>
                      <td className="p-3 border-r border-gray-100">{row.us}</td>
                      <td className="p-3 border-r border-gray-100">{row.eu}</td>
                      <td className="p-3">{row.cm} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How to Measure Feet Guide */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 md:mb-8 text-center">How to Measure Your Feet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#138695] text-white flex items-center justify-center font-bold text-sm">1</span>
              <h3 className="font-bold text-gray-900 text-base">Step on Paper</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Tape a piece of blank paper to the floor flush against a wall. Stand straight on it with your heel firmly touching the wall behind you.
              </p>
            </div>
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#138695] text-white flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="font-bold text-gray-900 text-base">Mark the Length</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Have someone mark the longest part of your foot (heel-to-toe length) on the paper with a pen. Repeat this process for both of your feet.
              </p>
            </div>
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#138695] text-white flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="font-bold text-gray-900 text-base">Measure with Ruler</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Use a ruler to measure the heel-to-toe distance you marked. Take the measurement of your larger foot and compare it to our charts.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-amber-50 rounded-xl p-4 border border-amber-200/50 flex gap-3 text-amber-800 text-xs">
            <Info className="flex-shrink-0 text-amber-600" />
            <p className="leading-relaxed text-amber-700">
              <strong>Fit Tip:</strong> Foot length measurements are best taken at the end of the day, when your feet are slightly wider due to warmth and activity.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SizeGuide
