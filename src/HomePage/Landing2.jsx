import React from 'react'
import Navbar from '../navbar/Navbar'
import myPic from "../assets/images/one.avif"
import Footer from '../footer/Footer'


const Landing2 = () => {
  return (
    <div className=' w-screen h-screen bg-pink-200'>
        <Navbar />
        <div className='container h-[90%] w-full mx-auto bg-white 
        flex 
        '>

                <div
                 className=' w-[50%] ' >

                  <div className='text-black px-5 h-[40%] '>
                    <h1 className='text-6xl font-bold  h-fit mt-14  '>Boost Your Startup Business Faster</h1>
                  </div>


                  <div className=' px-5 mt-2  text-sm '>
                    <p>“Our attendance system does not trust IP addresses.
It verifies physical presence by validating the office router identity, internal network access, proximity proof, and time-limited authorization.
Dynamic IP changes do not affect the system.”</p>
                  </div>

                 <div className=' px-5 w-full  mt-10'>
                    <button className=' px-6 py-1 bg-black text-white rounded-xl'>Explore</button>
                 </div>
                    </div>






                <div className=' w-[50%] ' >
                   <div className=' h-[90%] w-[90%] my-5 mx-auto'>
                  <img src={myPic} alt="" className='h-full w-full' />
                   </div>
                    </div>
        </div>
 


    </div>
  )
}

export default Landing2
