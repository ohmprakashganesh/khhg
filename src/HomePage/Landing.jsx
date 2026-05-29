import React from 'react'
import Navbar from '../navbar/Navbar'

const Landing = () => {
  return (
    <>
      <Navbar />

      <div className=" h-fit mx-100 w-fit mt-20 flex ">
        <p className="text-2xl font-bold text-cyan-600">Welcome! Landing page made for just learning.</p>
        <img alt="picture"
          className='mx-50 h-50 w-80' />
      </div>


         <div> 
         <h4 className=" mb-10 w-80 mx-100 text-cyan-700">This is a simple landing page .Thanks for visiting bye.</h4>
        </div>


      <div className=" mx-100 mb-20">
        <button className="text-white bg-green-400 border-2 border-blue-200  w-25 h-10">Get Started</button>
        <button className="text-cyan-800 bg-white border-2 border-green-400 w-25 h-10 ml-5">Learn More</button>
      </div>


    </>
  )
}

export default Landing
