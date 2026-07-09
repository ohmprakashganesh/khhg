import { useEffect, useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});


  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Local object to collect errors
    let tempErrors = {};


    if (!name.trim()) {
       
      tempErrors.name = "name is empty ";
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required";
    }
    
    if (!address.trim()) {
      tempErrors.address = "Address is required";
    }

    if (!password.trim()) {
      tempErrors.password = "Password is required";
    }

    // Update the state with the found errors
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Validation passed!");
      // Proceed with API call or form submission here
    }
  };

  return (
    <div className='bg-blue-800 w-screen h-screen flex items-center'>
      {/* White form container */}
      <form onSubmit={handleSubmit} className='bg-white lg:w-[40%] sm:w-[80%] w-full rounded-md h-auto py-6 mx-auto'>
        <h1 className='py-3 text-center text-xl font-bold'>Registration</h1>
        <div className='w-full px-4 flex flex-col gap-y-2'>
          
          {/* Name Field */}
          <span>Name</span> 
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Enter your name'
            className='border-black border-1 shadow shadow-black rounded-md px-2 py-1' 
          />
          <p className='text-red-500 text-sm h-5'>{errors.name || ""}</p>

          <span>Email</span>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type='email'
            placeholder='Enter your email' 
            className='border-black border-1 shadow shadow-black rounded-md px-2 py-1' 
          />
          <p className='text-red-500 text-sm h-5'>{errors.email || ""}</p>
          
          {/* Address Field */}
          <span>Address</span>
          <input 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            type='text' 
            placeholder='Enter your address'
            className='border-black border-1 shadow shadow-black rounded-md px-2 py-1' 
          />
          <p className='text -red-50 text-sm h-5'>{errors.address || ""}</p>
          
          {/* Password Field */}
          <span>Password</span>
          <input 
            value={password}  
            onChange={(e) => setPassword(e.target.value)} 
            type='password' 
            placeholder='Enter your password'
            className='border-black border-1 shadow shadow-black rounded-md px-2 py-1' 
          />
          <p className='text-red-500 text-sm h-5'>{errors.password || ""}</p>
        </div>
        
        {/* Submit Button */}
        <div className='w-full px-4 flex py-3'>
          <input type='submit' value="submit" className='bg-blue-600 cursor-pointer py-2 mx-auto px-5 w-[70%] rounded-md text-white font-bold hover:bg-blue-700 transition' />
        </div>


        <div className='w-full px-4 py-3'>
          <p className='text-center'>Already have an account? <span className='text-blue-600 underline cursor-pointer'>Login Now</span></p>
        </div>
      </form>
    </div>
  );
};

export default Form;