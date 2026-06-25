import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import About from './Pages/About'
import FAQ from './Pages/FAQ'
import ShippingReturns from './Pages/ShippingReturns'
import TrackOrder from './Pages/TrackOrder'
import Login from './Pages/Login'
import SizeGuide from './Pages/SizeGuide'
import Footer from './components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import ProductList from './components/ProductList'
import Navbar2 from './components/Navbar2'
import SingleProduct from './components/SingleProduct'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <><ScrollToTop /><Home/><Footer/></>
  },
  {
    path:'/mens',
    element: <><ScrollToTop /><Navbar2/><ProductList category="men"/><Footer/></>
  },
  {
    path:'/womens',
    element: <><ScrollToTop /><Navbar2/><ProductList category="women"/><Footer/></>
  },
  {
    path:'/kids',
    element: <><ScrollToTop /><Navbar2/><ProductList category="kid"/><Footer/></>
  },
  {
    path:'/contact',
    element: <><ScrollToTop /><Navbar2/><Contact/><Footer/></>
  },
  {
    path: "/products/:productId",
    element: <><ScrollToTop /><Navbar2/><SingleProduct/><Footer/></>
  },
  {
    path:'/cart',
    element: <><ScrollToTop /><Navbar2/><Cart/><Footer/></>
  },
  {
    path:'/about',
    element: <><ScrollToTop /><Navbar2/><About/><Footer/></>
  },
  {
    path:'/faq',
    element: <><ScrollToTop /><Navbar2/><FAQ/><Footer/></>
  },
  {
    path:'/shipping-returns',
    element: <><ScrollToTop /><Navbar2/><ShippingReturns/><Footer/></>
  },
  {
    path:'/track-order',
    element: <><ScrollToTop /><Navbar2/><TrackOrder/><Footer/></>
  },
  {
    path:'/login',
    element: <><ScrollToTop /><Navbar2/><Login/><Footer/></>
  },
  {
    path:'/size-guide',
    element: <><ScrollToTop /><Navbar2/><SizeGuide/><Footer/></>
  },
])

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 9999,
        followSpeed: 1.5,
        mixBlendMode: "difference",
        scale: 0.8
      }}
      >
     <RouterProvider router={router}/>
     </UpdateFollower>
    </main>
  )
}

export default App
