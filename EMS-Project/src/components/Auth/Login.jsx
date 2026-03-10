import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("email is ", email)
    console.log("password is ", password)


    setEmail("")
    setPassword("")
    
    
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-pink-400">
      
      <div className="w-87.5 p-10 bg-white rounded-[15px] shadow-lg text-center">
        
        <h2 className="mb-6 text-xl font-semibold text-gray-700">Login</h2>

        <form 
        className="flex flex-col gap-5"
        onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <div className="relative text-left">
            <input
              type="email"
              required
              className="peer w-full p-3 border border-gray-300 rounded-lg outline-none text-sm"
              value={email}
              onChange={(e) =>{
                setEmail(e.target.value)
              }}
              />
            <label className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm transition-all
            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:bg-white peer-focus:px-1
            peer-valid:-top-2 peer-valid:left-2 peer-valid:text-xs peer-valid:text-blue-900 peer-valid:bg-white peer-valid:px-1">
              Email
            </label>
          </div>

          <div className="relative text-left">
            <input
              type="password"
              value={password}
              onChange={(e) =>{
                setPassword(e.target.value)
              }}
              required
              className="peer w-full p-3 border border-gray-300 rounded-lg outline-none text-sm"
              
              />
            <label className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm transition-all
            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-900 peer-focus:bg-white peer-focus:px-1
            peer-valid:-top-2 peer-valid:left-2 peer-valid:text-xs peer-valid:text-blue-900 peer-valid:bg-white peer-valid:px-1">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-cyan-600 rounded-lg text-white text-base transition hover:bg-lime-950"
          >
            Log in
          </button>

          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-blue-900 font-bold">
              Sign up
            </a>
          </p>

        </form>

      </div>

    </div>
  )
}

export default Login