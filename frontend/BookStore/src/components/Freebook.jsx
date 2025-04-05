import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios  from 'axios';
import Card from './Card';
function Freebook() {
 
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const [book , setbook ] = useState([]);
  useEffect(()=>{
   const getbook =  async()=>{
    const books =await axios.get("http://localhost:8003/book")
    setbook(books.data);
  }

getbook();
  },[])

  const books = book.filter((data)=>data.Catogry==="Free")

  return (

    
    <div className="container mx-auto max-w-screen-2xl md:px-20 px-4  dark:bg-slate-900 dark:text-white ">
    <div className='font-semibold text-xl pb-2'> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus nulla quae dolorum non nemo asperiores debitis ex cum itaque.</p>
    </div>


     
      <div className="slider-container">
      <Slider {...settings}>
      {books.map((item) => (
      <Card key={item.id} data={item} />
    ))}
      </Slider>
    </div>
    </div>
    
  )
}

export default Freebook



