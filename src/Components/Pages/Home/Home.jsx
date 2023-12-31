import React, { useContext, useEffect, useState } from 'react';
import bannerImg from "../../../assets/foodPic/lily-banse--YHSwy6uqvk-unsplash.jpg"
import Marquee from "react-fast-marquee";
import ChefDetails from '../chefDetails/chefDetails';
import { FaBirthdayCake, FaUserTie, FaHeart, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ColorRing } from 'react-loader-spinner'

const Home = () => {

// Our Special Foods section information

const [hoveredFood, setHoveredFood] = useState('');
const images = [
  { name: 'Ramen', src: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { name: 'Natto', src: 'https://images.unsplash.com/photo-1569239602012-e2b4575d1d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
  { name: 'Sushi', src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' },
  { name: 'Tacos', src: 'https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { name: 'Tamagoyaki', src: 'https://images.unsplash.com/photo-1606501129419-38058bd81ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
  { name: 'Sukiyaki', src: 'https://images.unsplash.com/photo-1669530538946-8f594e0d6e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { name: 'Tonkatsu', src: 'https://images.unsplash.com/photo-1611077855004-cc0614011bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
];

const handleImageHover = (name) => {
  setHoveredFood(name);
};


  const [chefsData, setChefData] = useState([])
  const {  loading} = useContext(AuthContext)
  useEffect(()=>{
    fetch("https://chef-recipe-hunter-server-shisir36.vercel.app/chef")
    .then(res => res.json())
    .then(data => setChefData(data))
  },[])
    return (
  <div>
      { loading &&
      <div className='mx-auto text-center h-screen flex items-center justify-center'>
      <div>
       <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />
      </div>
        </div>
    }
   <div className="hero h-96 " style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
     <div className=' md:w-7/12 mx-auto'> 
      <Marquee>
      <h1 className="mb-5 md:text-5xl lg:text-6xl text-4xl font-bold bg-gradient-to-r from-green-400 to-orange-500 via-yellow-500 text-transparent bg-clip-text title ">Welcome to our website</h1>
      </Marquee>
      </div>
     <div className=' md:w-4/6 mx-auto'>
      <p className="mb-5">We provide the best culinary services in town. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.</p>
      </div>
      <button className=" bg-green-600 hover:bg-indigo-700 btn border-0"> 
      <Link to= "/register">Get Started</Link>
      </button>
    </div>
  </div>
</div>
  <section className='mt-10 md:px-10 px-2'>
  <p className="text-center mb-5 md:text-5xl lg:text-6xl text-3xl font-semibold bg-gradient-to-r from-gray-400 to-black via-gray-500 text-transparent bg-clip-text title ">Our All Chefs</p>

<hr />
<div className=' grid md:grid-cols-2 gap-11'>
    {
      chefsData.map(chefData => <ChefDetails key={chefData.id} chefData = {chefData}></ChefDetails>)
    }
    </div>
  </section>
  <div className=" bg-gray-100 mt-16">
  <div className=" mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-20">
      <div className="md:w-1/2 md:ml-20 ml-3 mt-3">
        <h2 className="text-3xl mb-4 title">About Us</h2>
        <p className="text-gray-600 mb-6">
Our chefs offer you perfect Japanese cuisine, with expertly crafted dishes made from fresh and seasonal ingredients. We have only carefully sourced and authentic Japanese ingredients in our disposal to create a variety of dishes, from classic sushi to flavorful ramen bowls. We provide you with daily homemade miso soup, tempura vegetables, grilled seafood, and many more delicious dishes that will transport your taste buds to Japan.</p>
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

<section className='mb-10'>
  <h1 className='text-center mb-10 md:text-5xl lg:text-6xl text-3xl font-semibold bg-gradient-to-r from-gray-400 to-black via-gray-500 text-transparent bg-clip-text title'>Our Special Foods<hr className=' border md:w-6/12 w-11/12 text-center mx-auto mt-6' /></h1>
<Marquee 
 speed={120}
 >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 mr-4 cursor-pointer"
          onMouseEnter={() => handleImageHover(image.name)}
          onMouseLeave={() => handleImageHover('')}
        >
          <img
            src={image.src}
            alt={image.name}
            className="object-cover md:w-60 md:h-60 lg:w-64 lg:h-64 w-52 h-52 rounded-sm"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
              hoveredFood === image.name ? 'opacity-75' : 'opacity-0'
            }`}
          />
          <p
            className={`${
              hoveredFood === image.name ? 'visible' : 'invisible'
            } absolute bottom-0 w-full text-white font-bold text-center bg-black bg-opacity-50 rounded-lg`}
          >
            {image.name}
          </p>
        </div>
      ))}
    </Marquee>
</section>

</section>


 </div>
    );
};

export default Home;

