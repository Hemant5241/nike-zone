import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import HomeFeatures from '../components/HomeFeatures'
import Shoe1 from '../assets/Shoes1.png'
import Shoe2 from '../assets/Shoes2.png'
import Shoe3 from '../assets/Shoes3.png'

export const ShoesData = [
  {
    id: 1,
    image: Shoe1,
    title: "Jordan Luka 3 PF",
    subtitle: "Unleash your court dominance with responsive Zoom Air cushioning that absorbs impact and returns explosive energy on every cut.",
    price: "$140",
    oldPrice: "$180",
    modal: "Sports",
    bgColor: "#138695",
    rating: 4.8,
    reviews: 2340,
  },
  {
    id: 2,
    image: Shoe2,
    title: "Nike G.T. Cut 3 EP",
    subtitle: "Engineered for quick-twitch athletes who demand razor-sharp traction and featherweight speed on the hardwood floor.",
    price: "$190",
    oldPrice: "$240",
    modal: "Running",
    bgColor: "#727272",
    rating: 4.9,
    reviews: 1850,
  },
  {
    id: 3,
    image: Shoe3,
    title: "Nike G.T. Cut Academy",
    subtitle: "Academy-grade performance wrapped in a breathable Flyknit upper. Court-ready responsive cushioning for rising athletes.",
    price: "$120",
    oldPrice: "$160",
    modal: "Sports",
    bgColor: "#698869",
    rating: 4.7,
    reviews: 3120,
  },
];

const Home = () => {
  const [activeData, setActiveData] = useState(ShoesData[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % ShoesData.length;
        setActiveData(ShoesData[next]);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleActiveData = (data, index) => {
    setActiveData(data);
    setActiveIndex(index);
  }

  return (
    <div>
      <Hero 
        activeData={activeData} 
        activeIndex={activeIndex} 
        handleActiveData={handleActiveData} 
        ShoesData={ShoesData} 
      />
      <HomeFeatures activeData={activeData} />
    </div>
  )
}

export default Home
