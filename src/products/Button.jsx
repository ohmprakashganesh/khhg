import React from 'react'

const Button = ({bg,name}) => {
  return (
    <div>

        <button className={`${bg} w-32 h-12 p-x-2 py-2`}> {name} </button>
      
    </div>
  )
}

export default Button;
