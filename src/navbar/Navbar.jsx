import React from 'react'
import myPic from "../assets/images/one.avif"
const Navbar = () => {
    return (
        <div className='h-12 w-screen  text-green-500 bg-amber-700 flex justify-between '>
            <div className=' h-fit my-auto ml-3'>
                <img
                src={myPic} 
                alt="my Pics"
               className='h-10 w-18 hover:rounded-full' />
            </div>
            <div className=' flex h-fit my-auto gap-4'>  
               <p className="one hover:text-xl">Home</p>
               <p className="one cursor-pointer">About</p>
               <p className="one  cursor-pointer">Gallery</p>
               <p className="one  cursor-pointer">Service</p>
            </div>
            <div className='h-fit my-auto mr-3'>
               activate
            </div>
        </div>
    )
}

export default Navbar;
