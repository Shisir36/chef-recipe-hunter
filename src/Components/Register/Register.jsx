import React, { useContext, useState } from 'react';
import './Register.css'
import Photo from '../../assets/foodPic/brooke-lark-M4E7X3z80PQ-unsplash.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {user,createUser,updateUserProfile} = useContext(AuthContext)
    console.log(createUser);
  const [password, PasswordError] = useState('');
  const [Error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        if (password.length < 6) {
            PasswordError('Password should be at least 6 characters long');
            return;
            
          }
          PasswordError('')
        
          if (!email || !password) {
            setError('Please provide your email and password');
            return;
          }
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name, photoURL)
            form.reset()
        })
        .catch(error => setError(error))
      };      
  return (
<div className="hero-overlay bg-opacity-60 h-full w-full bg-cover" style={{ backgroundImage: `url(${Photo})` }}>
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md px-6 py-11 bg-white rounded-md shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 title">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="text" id="name" v-model="name" required/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="email" id="email" v-model="email" required/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800" htmlFor="password" >Password</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="password" id="password" v-model="password"  required/>
        </div>
        {password && <p className="mb-4 text-red-600">{password}</p>}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800" htmlFor="photoURL">Photo URL</label>
          <input className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" type="url" id="photoURL" v-model="photoURL"/>
        </div>
        {Error && <p className="mb-4 text-red-600">{Error}</p>}
        <div className="flex justify-end">
          <button className="px-4 py-4 w-full text-white bg-green-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700" type="submit">Sign Up</button>
        </div>
        <h2 className='font-bold mt-5'>already have an account? <span><Link to= '/login'>Login here</Link></span></h2>
      </form>
    </div>
   
  </div>
</div>

 
    );
};

export default Register;