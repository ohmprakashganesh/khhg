import { useState } from "react";
import { useCounter } from "../context/CounterContext";

const Counter = () => {
    const {count, add, subtract} =  useCounter();
    return (
        <div className=' w-screen h-screen text-3xl  bg-gray-500 '>
            <div className='w-[60%] h-[50%] mx-auto bg-gray-200'>
                <div className='w-full h-20  mx-auto bg-amber-200 flex justify-center items-center'>
                    <h1>Counter App</h1>
                </div>
                <div className='w-full h-40 bg-amber-200 flex justify-center items-center'>
                    <h1>{count} </h1>
                </div>
                <div className='w-full h-65 bg-amber-200 flex justify-center gap-x-10'>
                    <button onClick={() => add()} className='h-16 px-2 w-50 bg-green-500'>increment</button>
                    <button onClick={() => subtract()} className='h-16 px-2 w-50 bg-green-500'>dec</button>             </div>
            </div>

        </div>


    )
}

export default Counter;
