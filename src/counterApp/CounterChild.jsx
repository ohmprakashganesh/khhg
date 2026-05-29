import React from 'react'

const CounterChild = ({
    value, setVal
}) => {
  return (
    <div className=' w-full flex gap-x-5 justify-center'>
      <button onClick={()=>setVal(value+1)}  className='bg-green-600 px-3'>child increment</button>
    <button onClick={()=>setVal(value+1)} className='bg-yellow-600 px-3'>child decrement</button>
    </div>
  )
}
export default CounterChild;
