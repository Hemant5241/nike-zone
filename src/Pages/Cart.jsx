import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { X, ArrowRight, Minus, Plus, ShoppingBag, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import EmptyCart from '../assets/EmptyCart.png'

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } = useContext(ShopContext)
  
  const totalItems = getTotalCartItems()
  const totalAmount = getTotalCartAmount()

  return (
    <div className='min-h-screen bg-white text-black py-12 md:py-20'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
        
        {totalItems === 0 ? (
          // Empty State
          <div className='flex flex-col items-center justify-center text-center py-20 min-h-[60vh]'>
            <div className='w-48 h-48 md:w-64 md:h-64 mb-8 opacity-50 grayscale mix-blend-multiply'>
              <img src={EmptyCart} alt='Empty Cart' className='w-full h-full object-contain' />
            </div>
            <h1 className='text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4'>Your Bag is Empty.</h1>
            <p className='text-gray-500 mb-8 max-w-md mx-auto'>
              Looks like you haven't added anything to your bag yet. Discover our latest gear and elevate your game.
            </p>
            <Link to='/' className='px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-neutral-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.02] flex items-center gap-3'>
              <span>Shop New Arrivals</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          // Populated Cart
          <div>
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl font-black uppercase tracking-tighter'>Your Bag</h1>
              <p className='text-gray-500 mt-2 font-medium'>{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start'>
              
              {/* Left Column: Cart Items */}
              <div className='lg:col-span-8 space-y-6'>
                {/* Column Headers */}
                <div className='hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs font-black uppercase tracking-widest text-gray-400'>
                  <div className='col-span-6'>Product</div>
                  <div className='col-span-3 text-center'>Quantity</div>
                  <div className='col-span-3 text-right'>Total</div>
                </div>

                {/* Scrollable Items Container */}
                <div className='space-y-8 md:space-y-6 pt-4 max-h-[65vh] overflow-y-auto pr-2 md:pr-4 custom-scrollbar'>
                  {all_product.map((product) => {
                    if (cartItems[product.id] > 0) {
                      return (
                        <div key={product.id} className='flex flex-col md:grid md:grid-cols-12 gap-6 items-start md:items-center py-4 border-b border-gray-100 last:border-0 group'>
                          
                          {/* Product Info */}
                          <div className='col-span-6 flex gap-6 w-full'>
                            <Link to={`/products/${product.id}`} className='shrink-0 w-28 h-28 bg-[#f6f6f6] rounded-2xl p-2 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-gray-300 transition-colors'>
                              <img src={product.image} alt={product.name} className='max-h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500' />
                            </Link>
                            <div className='flex flex-col justify-center space-y-1'>
                              <div className='text-[10px] font-black uppercase tracking-widest text-[#ff4500] bg-orange-50 w-fit px-2 py-0.5 rounded'>{product.category}'s Shoes</div>
                              <Link to={`/products/${product.id}`} className='text-base md:text-lg font-black uppercase tracking-tight text-black hover:underline decoration-2 underline-offset-4'>
                                {product.name}
                              </Link>
                              <div className='text-gray-500 text-sm font-bold'>${product.new_price}</div>
                              
                              {/* Mobile Only: Price & Quantity Inline */}
                              <div className='md:hidden flex items-center justify-between w-full mt-4'>
                                <div className='flex items-center gap-3 border border-gray-200 rounded-full px-3 py-1.5'>
                                  <button onClick={() => removeFromCart(product.id)} className='text-gray-400 hover:text-black transition-colors'><Minus size={14} /></button>
                                  <span className='font-bold text-sm w-4 text-center'>{cartItems[product.id]}</span>
                                  <button onClick={() => addToCart(product.id)} className='text-gray-400 hover:text-black transition-colors'><Plus size={14} /></button>
                                </div>
                                <div className='font-black text-lg'>${product.new_price * cartItems[product.id]}</div>
                              </div>
                            </div>
                          </div>

                          {/* Desktop Only: Quantity Control */}
                          <div className='hidden md:flex col-span-3 justify-center'>
                            <div className='flex items-center gap-4 bg-[#fafafa] border border-gray-200 rounded-full px-4 py-2.5'>
                              <button onClick={() => removeFromCart(product.id)} className='text-gray-400 hover:text-black transition-colors'>
                                {cartItems[product.id] === 1 ? <X size={16} /> : <Minus size={16} />}
                              </button>
                              <span className='font-black text-sm w-4 text-center'>{cartItems[product.id]}</span>
                              <button onClick={() => addToCart(product.id)} className='text-gray-400 hover:text-black transition-colors'>
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          {/* Desktop Only: Total Price & Remove */}
                          <div className='hidden md:flex col-span-3 justify-end items-center gap-6'>
                            <div className='font-black text-xl text-black'>${product.new_price * cartItems[product.id]}</div>
                          </div>
                        </div>
                      )
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className='lg:col-span-4'>
                <div className='bg-[#fafafa] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 lg:sticky lg:top-28'>
                  <h2 className='text-2xl font-black uppercase tracking-tight mb-8'>Summary</h2>
                  
                  <div className='space-y-4 mb-8'>
                    <div className='flex justify-between text-gray-600 font-medium'>
                      <span>Subtotal</span>
                      <span className='text-black font-bold'>${totalAmount}</span>
                    </div>
                    <div className='flex justify-between text-gray-600 font-medium'>
                      <span>Estimated Shipping</span>
                      <span className='text-emerald-600 font-bold'>Free</span>
                    </div>
                    <div className='flex justify-between text-gray-600 font-medium'>
                      <span>Estimated Tax</span>
                      <span className='text-black font-bold'>—</span>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 pt-6 mb-8'>
                    <div className='flex justify-between items-end'>
                      <span className='text-gray-900 font-bold'>Total</span>
                      <span className='text-3xl font-black tracking-tight'>${totalAmount}</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className='mb-8'>
                    <div className='flex gap-2 bg-white border border-gray-200 rounded-full p-1 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all'>
                      <div className='flex items-center pl-4 text-gray-400'>
                        <Tag size={16} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Promo Code" 
                        className="flex-1 bg-transparent border-0 focus:ring-0 text-sm font-bold uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal placeholder:font-medium"
                      />
                      <button className='px-6 py-3 bg-gray-100 text-gray-600 hover:bg-black hover:text-white rounded-full text-xs font-black uppercase tracking-widest transition-colors'>
                        Apply
                      </button>
                    </div>
                  </div>

                  <button className='w-full flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-neutral-900 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.02]'>
                    <span>Guest Checkout</span>
                    <ArrowRight size={18} />
                  </button>
                  
                  <div className='mt-6 flex flex-col gap-4 text-center'>
                    <div className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Accepted Payment Methods</div>
                    <div className='flex justify-center gap-3 grayscale opacity-60'>
                      <div className='w-10 h-6 bg-gray-200 rounded'></div>
                      <div className='w-10 h-6 bg-gray-200 rounded'></div>
                      <div className='w-10 h-6 bg-gray-200 rounded'></div>
                      <div className='w-10 h-6 bg-gray-200 rounded'></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
