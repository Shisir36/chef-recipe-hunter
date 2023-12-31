import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from "lottie-react";
import login from '../../../public/login.json';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const {signIn,signInWithGoogle, signInWithGithub} = useContext(AuthContext)
    const [error, setError] = useState(null);
    const from = location.state?.from?.pathname||"/";
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email,password)
      .then(result => {
        console.log(result.user);
        navigate(from,{replace:true})
        form.reset()
      })
      .catch(error => setError("Invalid email or password"))
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from,{replace:true})
          })
          .catch((error) => {
            console.log(error);
          });
    };
    const handleSignInWithGithub = () => {
        signInWithGithub()
        .then((result) => {
            const user = result.user;
            navigate(from,{replace:true})
          })
          .catch((error) => {
            console.log(error);
          });
    }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-400 flex flex-col justify-center py-12 sm:px-6 lg:px-8 md:grid grid-cols-2 px-3 gap-3 items-center">
          <div className='order-last sm:order-first w-4/5'>
               <Lottie  animationData={login} height={600} width={300} loop = {true}></Lottie>   
              </div>
           <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-md text-gray-100">
          Or{" "}
          <Link to="/register" className="text-white font-medium">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-sm">
        <div className=" rounded-sm bg-gradient-to-r from-green-200 to-purple-400 bg-opacity-25 py-12 px-4 sm:px-6 lg:px-8">
        {error && <div className="text-red-500 mb-4">{error}</div>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent bg-indigo-600 rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                Sign in
                </button>
                <h2 className='text-center mt-5'>Sign in With</h2>
                <div>
                    <button onClick={handleSignInWithGoogle} className='bg-red-500 btn border-none flex hover:bg-red-600 items-center py-3 gap-2 mx-auto mt-3 w-full'>
                    <FaGoogle></FaGoogle><span>Sign in with Google</span>
                    </button>
                    <button onClick={handleSignInWithGithub} className='bg-black btn border-none py-3 flex items-center gap-2 mx-auto mt-3 w-full'>
                    <FaGithub></FaGithub><span>Sign in with Github</span>
                    </button>
                </div>
                </div>
                </form>
                </div>
               </div>
               </div>
                  </div>

    );
};

export default Login;