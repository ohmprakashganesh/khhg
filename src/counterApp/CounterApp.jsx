import React, { useState } from 'react'
import CounterChild from './CounterChild';

const CounterApp = () => {
  const [val, setVal]=useState(0);
  

    return (
        <div className=' h-screen w-screen flex justify-center items-center'>

            <div className=' h-[60%] w-[35%] bg-red-400 '>

                <div className=' w-full text-2xl font-bold flex justify-center ' >
                    this is counter app
                </div>

                <h1 className='text-xl mt-10 mb-30 font-bold text-red-800  text-center'>{val}</h1>

                <div className=' flex justify-center gap-6 mb-6 '>
                    <button onDoubleClick={()=> setVal(val+1)} className='bg-black cursor-pointer text-white  px-4 py-1' >increment</button>
                    <button onClick={()=>setVal(val-1)} className='bg-black cursor-pointer text-white px-4'>Decrement</button>
                </div>
                <h2 className=' mb-4 text-center text-xl font-bold'>this is call from children</h2>

             <CounterChild value={val} setVal={setVal}  />

            </div>

        </div>
    )
}
export default CounterApp
