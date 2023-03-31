import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
<section class="flex flex-col items-center justify-center h-screen bg-register">
  <h2 class="text-2xl font-bold mb-8 text-white">Register</h2>
  <form class="w-full max-w-sm">
    <div class="mb-4">
      <label for="username" class="block text-white font-bold mb-2">Username:</label>
      <input type="text" id="username" name="username" required
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div class="mb-4">
      <label for="email" class="block text-white font-bold mb-2">Email:</label>
      <input type="email" id="email" name="email" required
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div class="mb-6">
      <label for="password" class="block text-white font-bold mb-2">Password:</label>
      <input type="password" id="password" name="password" required
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>

    <div class="flex items-center justify-center">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Register
      </button>
    </div>
    <p className='text-center pt-5 text-white'>Already have an account? <Link to={`/login`} className="text-blue-400" >Login</Link> </p>
  </form>
</section>

  )
}

export default Register
