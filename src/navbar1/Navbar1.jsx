import React from 'react'

 import one from "../assets/images/one.avif"
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        //parent screen
        <div className='w-full bg-gray-500 h-screen flex  '>           
            <nav className='h-15  bg-white w-full flex justify-between items-center ' >
                <div className=' h-full'>
                    <img src={one} alt="" 
                     className='w-10 h-10'
                    />
                </div>
                <div className='flex gap-x-3 transition-all duration-500'>
                    <div className='cursor-pointer  transition-all duration-500 hover:text-blue-800 hover:font-semibold hover:underline px-3 rounded-2xl border border-blue-900 hover:px-6' >home</div>
                    <div className='cursor-pointer'>gallaRY</div>
                    <div className='cursor-pointer'>contacts</div>
                    <div className='cursor-pointer'>blogs</div>
                </div>
                <div>
                   
             <Link to="https://www.npmjs.com/package/react-router-dom" > 
                    <button className='bg-blue-950 px-8 py-2 text-white rounded-lg mr-5'> google</button> 

              </Link>

              <Link to="https://www.facebook.com" > 
                    <button className='bg-blue-950 px-8 py-2 text-white rounded-lg mr-5'> fabeb99i</button> 

              </Link>

              <Link to="https://www.youtube.com" > 
                    <button className='bg-blue-950 px-8 py-2 text-white rounded-lg mr-5'> youtube</button> 

              </Link>


                </div>
            </nav>
                   
        </div>
    )
}

export default Navbar1;
