import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Star, Ruler, X, ShoppingBag, ArrowRight, ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart, cartItems } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState('UK 8')
    const [showSizeChart, setShowSizeChart] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [mainImage, setMainImage] = useState(product.image)

    const sizes = [
        { label: 'UK 6', status: 'normal' },
        { label: 'UK 7', status: 'normal' },
        { label: 'UK 8', status: 'low' }, // Low stock marker
        { label: 'UK 9', status: 'normal' },
        { label: 'UK 10', status: 'low' },
        { label: 'UK 11', status: 'normal' }
    ]

    const handleAddToCart = () => {
        addToCart(product.id)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    const getDynamicDescription = () => {
        const cat = product.category || 'sports'
        return `Experience next-level performance and unmatched comfort with the ${product.name}. Engineered specifically for ${cat === 'men' ? "men's" : cat === 'women' ? "women's" : "kids'"} athletic needs, this premium footwear combines a breathable engineered mesh upper with responsive Nike Air cushioning. Designed to absorb impact and deliver explosive energy return, it features a durable traction outsole that ensures maximum grip on all surfaces.`
    }

    // Get all available product images
    const productImages = [product.image, product.image1, product.image2, product.image3].filter(Boolean)

    return (
        <div className='my-8 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto'>
            {/* Main Layout Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start'>
                
                {/* Left Column: Traditional Gallery with Side Thumbnails */}
                <div className='lg:col-span-7 flex flex-col md:flex-row gap-4'>
                    {/* Thumbnails on Left (Desktop) / Bottom (Mobile) */}
                    <div className='flex md:flex-col gap-3 justify-start overflow-x-auto md:overflow-x-visible py-2 md:py-0 order-2 md:order-1'>
                        {productImages.map((img, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-[#f6f6f6] hover:shadow-md flex items-center justify-center ${mainImage === img ? 'border-black scale-[1.02]' : 'border-transparent hover:border-gray-300'}`}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className='max-h-full object-contain p-2' />
                            </button>
                        ))}
                    </div>
                    
                    {/* Main Image View */}
                    <div className='flex-1 bg-[#f6f6f6] rounded-3xl overflow-hidden flex items-center justify-center p-6 md:p-12 border border-gray-100 relative group cursor-zoom-in min-h-[300px] md:min-h-[600px] order-1 md:order-2'>
                        <img 
                            src={mainImage} 
                            alt={product.name} 
                            className='max-h-[250px] md:max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]' 
                        />
                        <span className='absolute top-6 left-6 bg-black text-white text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full uppercase font-bold shadow-md'>
                            {product.category}'s Collection
                        </span>
                    </div>
                </div>

                {/* Right Column: Sticky Purchase Details (Nike Style) */}
                <div className='lg:col-span-5 lg:sticky lg:top-28 space-y-8'>
                    <div>
                        {/* Collection Tag */}
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='text-xs font-mono tracking-widest text-[#ff4500] uppercase font-extrabold bg-orange-50 px-2.5 py-1 rounded-md'>
                                Nike Premium
                            </span>
                            <span className='text-xs text-gray-400 font-medium font-mono'>
                                ID: NK-{product.id}902
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight md:leading-none mb-3'>
                            {product.name}
                        </h1>
                        
                        {/* Rating & Short Info */}
                        <div className='flex items-center gap-3 py-2 border-y border-gray-100 my-4'>
                            <div className='flex items-center gap-1 text-black bg-gray-100 px-2 py-1 rounded-md'>
                                <Star size={14} fill='currentColor' className='text-black' />
                                <span className='text-xs font-extrabold'>4.8</span>
                            </div>
                            <span className='text-xs text-gray-500 font-bold hover:underline cursor-pointer transition-all'>
                                128 Reviews
                            </span>
                            <span className='text-gray-300'>|</span>
                            <span className='text-xs text-emerald-600 font-extrabold flex items-center gap-1'>
                                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping'></span>
                                Highly Rated
                            </span>
                        </div>

                        {/* Price Card */}
                        <div className='flex flex-wrap items-baseline gap-2 md:gap-4 mt-6'>
                            <span className='text-black text-3xl md:text-4xl font-black tracking-tight'>
                                ${product.new_price}
                            </span>
                            {product.old_price && (
                                <>
                                    <span className='text-gray-400 text-lg line-through font-bold decoration-2'>
                                        ${product.old_price}
                                    </span>
                                    <span className='bg-[#ff4500] text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md'>
                                        SAVE {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}%
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Short Hook Description */}
                        <p className='text-gray-600 text-sm md:text-base leading-relaxed mt-6'>
                            {getDynamicDescription()}
                        </p>
                    </div>

                    {/* Size Selector */}
                    <div className='space-y-4'>
                        <div className='flex justify-between items-center'>
                            <span className='font-black text-black text-xs uppercase tracking-widest font-mono'>
                                Select Size (UK)
                            </span>
                            <button 
                                onClick={() => setShowSizeChart(true)}
                                className='text-black hover:opacity-70 flex items-center gap-1.5 text-xs font-bold border-b border-black pb-0.5 transition-all'
                            >
                                <Ruler size={13} />
                                <span>Size Guide</span>
                            </button>
                        </div>
                        
                        <div className='grid grid-cols-3 gap-2.5'>
                            {sizes.map((size) => (
                                <button
                                    key={size.label}
                                    onClick={() => setSelectedSize(size.label)}
                                    className={`relative py-4 rounded-xl font-bold text-sm transition-all duration-300 border flex flex-col items-center justify-center overflow-hidden ${
                                        selectedSize === size.label 
                                            ? 'border-black bg-black text-white shadow-md scale-[1.02]' 
                                            : 'border-gray-200 bg-white text-black hover:border-gray-400'
                                    }`}
                                >
                                    <span>{size.label}</span>
                                    {size.status === 'low' && (
                                        <span className={`text-[8px] font-mono tracking-tighter uppercase font-extrabold mt-0.5 ${
                                            selectedSize === size.label ? 'text-[#ff4500]' : 'text-[#ff4500]'
                                        }`}>
                                            Low Stock
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='space-y-3 pt-2'>
                        <div className='flex gap-2 md:gap-3'>
                            {/* Add to Cart */}
                            <button 
                                onClick={handleAddToCart}
                                className={`flex-1 py-4 md:py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 border-2 ${
                                    isAdded 
                                        ? 'bg-emerald-600 border-emerald-600 text-white' 
                                        : 'bg-black border-black text-white hover:bg-neutral-900 shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.01]'
                                }`}
                            >
                                <ShoppingBag size={18} />
                                <span className="text-center">{isAdded ? `Added! (${cartItems[product.id] || 1})` : (cartItems[product.id] > 0 ? `Add Another (${cartItems[product.id]})` : 'Add to Bag')}</span>
                            </button>

                            {/* Favorite Toggle */}
                            <button 
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`p-4.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                                    isFavorite 
                                        ? 'bg-red-50 border-red-500 text-red-500 scale-105' 
                                        : 'border-gray-200 text-black hover:border-gray-400 hover:scale-105'
                                }`}
                                aria-label='Add to Favorites'
                            >
                                <Heart size={18} fill={isFavorite ? 'currentColor' : 'transparent'} className='transition-all' />
                            </button>
                        </div>

                        {/* Secondary Navigation */}
                        <Link 
                            to='/cart' 
                            className='w-full py-4 rounded-full border-2 border-gray-200 font-bold text-xs uppercase tracking-widest text-black hover:border-black transition-all flex justify-center items-center gap-1.5'
                        >
                            <span>View Bag & Checkout</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Minimal Premium Benefits (Nike Style) */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-100 pt-8'>
                        <div className='flex items-start gap-3 p-3 bg-[#fafafa] rounded-xl hover:shadow-sm transition-all duration-300'>
                            <Truck size={18} className='text-black mt-0.5' />
                            <div>
                                <h4 className='text-xs font-bold text-black'>Free Shipping</h4>
                                <p className='text-[10px] text-gray-500 mt-0.5'>On orders over $150</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3 p-3 bg-[#fafafa] rounded-xl hover:shadow-sm transition-all duration-300'>
                            <RotateCcw size={18} className='text-black mt-0.5' />
                            <div>
                                <h4 className='text-xs font-bold text-black'>30-Day Returns</h4>
                                <p className='text-[10px] text-gray-500 mt-0.5'>Hassle-free exchange</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3 p-3 bg-[#fafafa] rounded-xl hover:shadow-sm transition-all duration-300'>
                            <ShieldCheck size={18} className='text-black mt-0.5' />
                            <div>
                                <h4 className='text-xs font-bold text-black'>100% Original</h4>
                                <p className='text-[10px] text-gray-500 mt-0.5'>Official Nike warranty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Size Chart Modal */}
            {showSizeChart && (
                <div className='fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity duration-300'>
                    <div className='bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200'>
                        {/* Header */}
                        <div className='flex justify-between items-center px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10'>
                            <div className='flex items-center gap-2.5'>
                                <Ruler className='text-black' size={20} />
                                <h3 className='text-lg font-black uppercase tracking-tight text-black'>Nike Footwear Size Guide</h3>
                            </div>
                            <button 
                                onClick={() => setShowSizeChart(false)}
                                className='p-1.5 rounded-full text-gray-400 hover:bg-gray-100 hover:text-black transition-colors'
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className='p-6 space-y-6'>
                            <p className='text-sm text-gray-500 leading-relaxed'>
                                Find your perfect Nike shoe fit below. If your heels measure between sizes, we strongly recommend opting for the larger size for maximum athletic comfort.
                            </p>

                            {/* Table */}
                            <div className='overflow-x-auto rounded-2xl border border-gray-100 shadow-sm'>
                                <table className='w-full text-left border-collapse'>
                                    <thead>
                                        <tr className='bg-[#fafafa] text-black font-extrabold text-xs uppercase tracking-wider border-b border-gray-200'>
                                            <th className='p-4 border-r border-gray-150'>UK Size</th>
                                            <th className='p-4 border-r border-gray-150'>US Men</th>
                                            <th className='p-4 border-r border-gray-150'>US Women</th>
                                            <th className='p-4 border-r border-gray-150'>EU Size</th>
                                            <th className='p-4'>Heel-to-Toe</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-sm text-gray-600 divide-y divide-gray-100 font-mono'>
                                        {[
                                            { uk: 'UK 5', usM: 'US 5.5', usW: 'US 7.5', eu: 'EU 38.5', cm: '24.1 cm' },
                                            { uk: 'UK 6', usM: 'US 6.5', usW: 'US 8.5', eu: 'EU 39.5', cm: '24.8 cm' },
                                            { uk: 'UK 7', usM: 'US 7.5', usW: 'US 9.5', eu: 'EU 40.5', cm: '25.4 cm' },
                                            { uk: 'UK 8', usM: 'US 8.5', usW: 'US 10.5', eu: 'EU 42', cm: '26.2 cm' },
                                            { uk: 'UK 9', usM: 'US 9.5', usW: 'US 11.5', eu: 'EU 43', cm: '27.1 cm' },
                                            { uk: 'UK 10', usM: 'US 10.5', usW: 'US 12.5', eu: 'EU 44.5', cm: '27.9 cm' },
                                            { uk: 'UK 11', usM: 'US 11.5', usW: 'US 13.5', eu: 'EU 45.5', cm: '28.8 cm' },
                                            { uk: 'UK 12', usM: 'US 12.5', usW: 'US 14.5', eu: 'EU 47', cm: '29.6 cm' },
                                        ].map((row, idx) => (
                                            <tr 
                                                key={idx} 
                                                className={`hover:bg-[#fafafa] transition-colors ${selectedSize === row.uk ? 'bg-black/5 font-extrabold text-black' : ''}`}
                                            >
                                                <td className='p-4 font-bold border-r border-gray-100 text-black'>{row.uk}</td>
                                                <td className='p-4 border-r border-gray-100'>{row.usM}</td>
                                                <td className='p-4 border-r border-gray-100'>{row.usW}</td>
                                                <td className='p-4 border-r border-gray-100'>{row.eu}</td>
                                                <td className='p-4 font-bold text-black'>{row.cm}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Measuring Tip */}
                            <div className='bg-orange-50 rounded-2xl p-4 border border-orange-100 flex gap-3.5 items-start'>
                                <span className='text-lg'>💡</span>
                                <div>
                                    <h4 className='text-black font-extrabold text-xs uppercase tracking-wider font-mono'>Pro Fitting Tip</h4>
                                    <p className='text-gray-600 text-xs mt-1 leading-relaxed'>
                                        For running and workout shoes, a slightly roomier fit prevents toe bruising during heavy impact. We recommend sizing up by 0.5 if your current fit is tight.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className='px-6 py-4 border-t border-gray-100 flex justify-end bg-[#fafafa] rounded-b-3xl'>
                            <button 
                                onClick={() => setShowSizeChart(false)}
                                className='px-6 py-3 bg-black text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-900 transition-colors shadow-md'
                            >
                                Close Guide
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDisplay
