import React, { useState } from 'react'
import { Star, CheckCircle2, Award, Sparkles, Plus, X } from 'lucide-react'

const Description = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description')
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    comment: ''
  })

  // State-managed list of reviews
  const [reviews, setReviews] = useState([
    {
      name: 'Rohan Sharma',
      rating: 5,
      date: 'June 12, 2026',
      title: 'Absolutely worth every penny!',
      comment: 'Super comfortable for daily running. The air cushioning is top-notch and absorbs impact wonderfully. Highly recommend!',
      verified: true,
    },
    {
      name: 'Priya Patel',
      rating: 4,
      date: 'May 28, 2026',
      title: 'Extremely comfortable & stylish',
      comment: 'Looks great and fits perfectly. The material is very breathable, which is perfect for hot days. Took one star off because shipping took a day longer than expected.',
      verified: true,
    },
    {
      name: 'Vikram Malhotra',
      rating: 5,
      date: 'April 15, 2026',
      title: 'Amazing grip and support',
      comment: 'The traction on these is incredible. I use them for court workouts and outdoor jogging, and they hold up beautifully. True to size.',
      verified: true,
    },
    {
      name: 'Anjali Desai',
      rating: 4,
      date: 'March 30, 2026',
      title: 'Good gym shoes',
      comment: 'Very lightweight and flexible. Great stability for lifting and treadmill work. Def buying another pair soon.',
      verified: false,
    }
  ])

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (!newReview.name.trim() || !newReview.title.trim() || !newReview.comment.trim()) {
      alert('Please fill out all fields before submitting your review.')
      return
    }

    const today = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = today.toLocaleDateString('en-US', options)

    const submittedReview = {
      name: newReview.name,
      rating: rating,
      date: formattedDate,
      title: newReview.title,
      comment: newReview.comment,
      verified: true // Marking self-submitted reviews as verified buyer for realistic demo
    }

    // Add new review to top of the list
    setReviews([submittedReview, ...reviews])
    
    // Reset form states
    setNewReview({ name: '', title: '', comment: '' })
    setRating(5)
    setShowReviewForm(false)
  }

  const productName = product?.name || 'Nike Shoes'

  return (
    <div className='mt-16 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-gray-150 pt-10'>
      {/* Tabs Header */}
      <div className='flex gap-8 border-b border-gray-100 justify-center md:justify-start'>
        <button
          onClick={() => setActiveTab('description')}
          className={`pb-4 font-black text-xs tracking-widest uppercase border-b-2 transition-all duration-300 ${
            activeTab === 'description' 
              ? 'border-black text-black' 
              : 'border-transparent text-gray-400 hover:text-black'
          }`}
        >
          Product Innovation
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-4 font-black text-xs tracking-widest uppercase border-b-2 transition-all duration-300 flex items-center gap-2 ${
            activeTab === 'reviews' 
              ? 'border-black text-black' 
              : 'border-transparent text-gray-400 hover:text-black'
          }`}
        >
          <span>Reviews</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors duration-300 ${
            activeTab === 'reviews' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            {reviews.length}
          </span>
        </button>
      </div>

      {/* Tabs Content */}
      <div className='py-10'>
        {activeTab === 'description' ? (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16'>
            <div className='lg:col-span-8 space-y-6'>
              <h3 className='text-xl md:text-2xl font-black text-black uppercase tracking-tight'>
                Athletic Engineering & Premium Performance
              </h3>
              <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                The {productName} represents the absolute pinnacle of modern athletic engineering. Custom-designed for creators and athletes who demand elite durability, responsive energy returns, and striking street-ready aesthetics, this model redefines everyday comfort.
              </p>
              <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                Integrating an ultra-durable dual-density foam core alongside Nike's legendary pressurized Air unit, every step feels springy, padded, and responsive. The high-ventilation multi-layered mesh upper ensures feet remain dry and cool under extreme conditions, while reinforced midfoot structures guarantee lockdown security.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6'>
                <div className='flex gap-4 items-start p-4 bg-[#fafafa] rounded-2xl border border-gray-100'>
                  <div className='p-3 bg-white rounded-xl text-black shadow-sm shrink-0'>
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className='font-bold text-black text-sm uppercase tracking-wider'>Premium Materials</h4>
                    <p className='text-xs text-gray-500 mt-1 leading-relaxed'>
                      Crafted using high-density polymers and sustainable engineered technical mesh.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start p-4 bg-[#fafafa] rounded-2xl border border-gray-100'>
                  <div className='p-3 bg-white rounded-xl text-black shadow-sm shrink-0'>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className='font-bold text-black text-sm uppercase tracking-wider'>Responsive Energy</h4>
                    <p className='text-xs text-gray-500 mt-1 leading-relaxed'>
                      High mechanical energy feedback helps propel stride momentum dynamically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Specs */}
            <div className='lg:col-span-4 bg-[#fafafa] p-8 rounded-3xl border border-gray-100 shadow-sm self-start'>
              <h3 className='text-xs font-mono tracking-widest text-black uppercase font-black mb-6'>
                Technical Specs
              </h3>
              <ul className='space-y-4 text-sm font-medium'>
                <li className='flex justify-between py-2.5 border-b border-gray-200/50'>
                  <span className='text-gray-400 font-bold uppercase text-[10px] tracking-wider'>Cushioning</span>
                  <span className='font-bold text-black'>Max Air / React Core</span>
                </li>
                <li className='flex justify-between py-2.5 border-b border-gray-200/50'>
                  <span className='text-gray-400 font-bold uppercase text-[10px] tracking-wider'>Surface</span>
                  <span className='font-bold text-black'>Road, Gym, Track</span>
                </li>
                <li className='flex justify-between py-2.5 border-b border-gray-200/50'>
                  <span className='text-gray-400 font-bold uppercase text-[10px] tracking-wider'>Support Level</span>
                  <span className='font-bold text-black'>Neutral Stability</span>
                </li>
                <li className='flex justify-between py-2.5 border-b border-gray-200/50'>
                  <span className='text-gray-400 font-bold uppercase text-[10px] tracking-wider'>Arch Type</span>
                  <span className='font-bold text-black'>Standard Arch</span>
                </li>
                <li className='flex justify-between py-2.5'>
                  <span className='text-gray-400 font-bold uppercase text-[10px] tracking-wider'>Outsole</span>
                  <span className='font-bold text-black'>Carbon Waffle Rubber</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='space-y-8 max-w-4xl'>
            
            {/* Review Form Toggle */}
            <div className='flex justify-between items-center pb-4 border-b border-gray-100'>
              <div>
                <h3 className='text-lg font-black uppercase text-black tracking-tight'>Customer Feedback</h3>
                <p className='text-xs text-gray-500 mt-0.5'>Read verified customer reviews and ratings</p>
              </div>
              {!showReviewForm && (
                <button
                  onClick={() => setShowReviewForm(true)}
                  className='bg-black hover:bg-neutral-900 text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 transition-all shadow-md'
                >
                  <Plus size={14} />
                  <span>Write a Review</span>
                </button>
              )}
            </div>

            {/* Interactive Review Form */}
            {showReviewForm && (
              <div className='bg-[#fafafa] border border-gray-200/50 rounded-3xl p-6 md:p-8 mb-8 relative animate-in slide-in-from-top duration-350'>
                <button
                  type='button'
                  onClick={() => setShowReviewForm(false)}
                  className='absolute top-6 right-6 text-gray-400 hover:text-black p-1.5 rounded-full hover:bg-white transition-all shadow-sm'
                >
                  <X size={16} />
                </button>

                <h4 className='font-black text-black text-sm uppercase tracking-widest mb-6 font-mono'>Share Your Experience</h4>
                <form onSubmit={handleReviewSubmit} className='space-y-6'>
                  
                  {/* Rating Selector */}
                  <div>
                    <label className='block text-xs font-mono font-black uppercase tracking-wider text-black mb-2'>Your Rating</label>
                    <div className='flex gap-1.5'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type='button'
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className='text-black transition-transform duration-100 hover:scale-110'
                        >
                          <Star
                            size={26}
                            fill={(hoverRating || rating) >= star ? 'currentColor' : 'transparent'}
                            stroke='currentColor'
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-xs font-mono font-black uppercase tracking-wider text-black mb-2'>Your Name</label>
                      <input
                        type='text'
                        required
                        placeholder='e.g. Hemant Bhosale'
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className='w-full px-5 py-3.5 border border-gray-200 rounded-2xl bg-white focus:ring-2 focus:ring-black/10 focus:border-black outline-none text-sm text-black font-semibold'
                      />
                    </div>
                    <div>
                      <label className='block text-xs font-mono font-black uppercase tracking-wider text-black mb-2'>Review Title</label>
                      <input
                        type='text'
                        required
                        placeholder='e.g. Incredibly comfortable!'
                        value={newReview.title}
                        onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                        className='w-full px-5 py-3.5 border border-gray-200 rounded-2xl bg-white focus:ring-2 focus:ring-black/10 focus:border-black outline-none text-sm text-black font-semibold'
                      />
                    </div>
                  </div>

                  {/* Review Comment */}
                  <div>
                    <label className='block text-xs font-mono font-black uppercase tracking-wider text-black mb-2'>Comments</label>
                    <textarea
                      required
                      rows='4'
                      placeholder='Tell us what you like or dislike about the shoe...'
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className='w-full px-5 py-3.5 border border-gray-200 rounded-2xl bg-white focus:ring-2 focus:ring-black/10 focus:border-black outline-none text-sm text-black font-semibold resize-none'
                    />
                  </div>

                  <div className='flex gap-3 justify-end pt-2'>
                    <button
                      type='button'
                      onClick={() => setShowReviewForm(false)}
                      className='px-5 py-3 border border-gray-200 rounded-full font-bold text-xs uppercase tracking-wider text-gray-500 hover:bg-gray-100 transition-all'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='px-6 py-3 bg-black hover:bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-md transition-all'
                    >
                      Submit Review
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* Reviews list */}
            <div className='space-y-8 divide-y divide-gray-100'>
              {reviews.map((review, idx) => (
                <div key={idx} className={`pt-8 ${idx === 0 && !showReviewForm ? 'pt-0' : ''}`}>
                  <div className='flex justify-between items-start gap-4'>
                    <div>
                      <h4 className='font-black text-black text-base uppercase tracking-tight'>{review.title}</h4>
                      <div className='flex items-center flex-wrap gap-2 mt-2'>
                        <div className='flex text-black'>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill={i < review.rating ? 'currentColor' : 'transparent'} stroke='currentColor' />
                          ))}
                        </div>
                        <span className='text-xs text-gray-300 font-mono'>|</span>
                        <span className='text-xs text-gray-800 font-extrabold'>{review.name}</span>
                        {review.verified && (
                          <span className='flex items-center gap-1 text-emerald-700 text-[9px] font-black uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded'>
                            <CheckCircle2 size={10} className='fill-emerald-700 text-white' />
                            <span>Verified Buyer</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <span className='text-xs text-gray-400 font-mono'>{review.date}</span>
                  </div>
                  <p className='text-gray-600 text-sm leading-relaxed mt-4'>
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* Write a review teaser */}
            {!showReviewForm && (
              <div className='mt-10 bg-[#fafafa] p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm'>
                <div>
                  <h4 className='font-black text-black text-base uppercase tracking-tight'>Have Your Say</h4>
                  <p className='text-xs text-gray-500 mt-1 leading-relaxed'>
                    Bought these kicks? Help out other athletes by leaving your honest rating and review.
                  </p>
                </div>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className='bg-black text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-900 transition-all shadow-md shrink-0 self-start md:self-auto'
                >
                  Write a Review
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Description
