import React, { useEffect, useState } from 'react';
import bannerImg from "../../../assets/foodPic/lily-banse--YHSwy6uqvk-unsplash.jpg"
import Marquee from "react-fast-marquee";
import ChefDetails from '../chefDetails/chefDetails';
import { FaBirthdayCake, FaUserTie, FaHeart, FaUsers } from 'react-icons/fa';

const Home = () => {
  const [chefsData, setChefData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/chef")
    .then(res => res.json())
    .then(data => setChefData(data.japanese_chefs))
  },[])
    return (
        <div>
   <div className="hero h-96" style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
     <div className=' md:w-7/12 mx-auto'> 
      <Marquee>
      <h1 className="mb-5 md:text-5xl lg:text-6xl text-3xl font-bold bg-gradient-to-r from-green-400 to-orange-500 via-yellow-500 text-transparent bg-clip-text title ">Welcome to our website</h1>
      </Marquee>
      </div>
     <div className=' md:w-4/6 mx-auto'>
      <p className="mb-5">We provide the best culinary services in town. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
      </div>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  <div className='mt-10'>
  <p className="text-center mb-5 md:text-5xl lg:text-6xl text-3xl font-semibold bg-gradient-to-r from-gray-400 to-black via-gray-500 text-transparent bg-clip-text title ">Our All Chefs</p>

<hr />
    {
      chefsData.map(chefData => <ChefDetails key={chefData.id} chefData = {chefData}></ChefDetails>)
    }
  </div>
  <div className=" bg-gray-100 mt-16">
  <div className=" mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-20">
      <div className="md:w-1/2 md:ml-20 ml-3">
        <h2 className="text-3xl mb-4 title">About Us</h2>
        <p className="text-gray-600 mb-6">Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes. We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more.</p>
       <button className=' p-4 border-black border-2'>Read More</button>
      </div>
      <div className=" md:w-1/2 flex justify-end">
        <img src="https://images.unsplash.com/photo-1578366941741-9e517759c620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="About Us" className="w-full h-full shadow-lg"/>
      </div>
    </div>
  </div>
</div>
<section>
<div className="flex flex-wrap justify-center max-w-6xl mx-auto my-16">
  <div className="w-full md:w-1/3 p-6 text-center">
    <div className="mx-auto flex flex-col items-center justify-center h-44 w-44 rounded-full bg-black transition-transform duration-300 transform hover:scale-110 hover:rounded-full">
      <FaBirthdayCake className="text-yellow-400  text-6xl" />
    </div>
    <h2 className="text-3xl text-gray-700 mt-4 mb-2 title">Birthdays</h2>
    <p className="text-gray-600 text-sm mb-4">Book a table for two with the best Italian dishes served for the anniversary. Or reserve a bigger one for a huge family to get together one sunny day. Gather your friends together</p>
  </div>
  <div className="w-full md:w-1/3 p-6 text-center">
    <div className="mx-auto flex flex-col items-center justify-center h-44 w-44 rounded-full bg-black transition-transform duration-300 transform hover:scale-110 hover:rounded-full">
      <FaUsers className="text-yellow-400  text-6xl" />
    </div>
    <h2 className="text-3xl  text-gray-700 mt-4 mb-2 title">Meetings</h2>
    <p className="text-gray-600  text-sm mb-4">You can also impress your boss by choosing the best place for corporate party with your co-workers. Reserve a spacious room, set the menu, choose the drinks and invite guests.</p>
  </div>
  <div className="w-full md:w-1/3 p-6 text-center">
    <div className="mx-auto flex flex-col items-center justify-center h-44 w-44 rounded-full bg-black transition-transform duration-300 transform hover:scale-110 hover:rounded-full">
      <FaUserTie className=" text-yellow-400 text-6xl" />
    </div>
    <h2 className="text-3xl  text-gray-700 mt-4 mb-2 title">Weddings</h2>
    <p className="text-gray-600  text-sm mb-4">75 seats for 75 guests are all at your disposal. Organize a party for a huge company and have fun in the restaurant. Show your friends the real world of European cuisine and especially Italian vibes.</p>
  </div>
</div>

</section>


 </div>
    );
};

export default Home;