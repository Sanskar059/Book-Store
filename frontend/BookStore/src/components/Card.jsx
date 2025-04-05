import React, { useState } from 'react'

function Card({data}) {
  const [buy , setbuy ] = useState(false);
  const handlebuy = ()=>{
    if (buy) {
      setbuy(false);

    }
    else{
      setbuy(true)
    }
  }
  return (
    <div className='mt-4 my-3 p-3 text-black dark:bg-slate-900 dark:text-white '>
        <div className="card  w-92 shadow-sm hover:scale-105 duration-200 transition-all  bg-white text-black  dark:bg-slate-900 dark:text-white">
  <figure className="px-10 pt-10">
    <img
      src={data.img}
      alt="Books"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.title}</p>
    
    <div className="  card-actions flex justify-between gap-25">
      <div className=" ">Rs {data.price}</div>
      <button onClick={handlebuy} className={`${buy ? " text-green-500 border-2 cursor-pointer  px-2 py-1 rounded-full hover:bg-pink-500 duration-300":" border-2 cursor-pointer  px-5 py-1 rounded-full hover:bg-pink-500 duration-300"}`}>{buy ? "Purchased":"Buy"}</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Card
