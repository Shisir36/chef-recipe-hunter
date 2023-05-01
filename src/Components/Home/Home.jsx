import React from 'react';
import bannerImg from "../../assets/foodPic/lily-banse--YHSwy6uqvk-unsplash.jpg"
import Marquee from "react-fast-marquee";
import "./Home.css"

const Home = () => {
    return (
        <div
        className="bg-center bg-cover md:h-96 h-64 banner-text"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-center">
        <div className=' md:w-7/12 w-11/12'>
          <Marquee  speed={100} className="md:text-5xl text-3xl py-5 font-bold w-52">Welcome to The Chief's Pantry</Marquee>
        </div> 
          <p className="md:text-xl lg:text-xl text-sm mt-3 md:px-72 lg:px-72 px-0">
            We provide the best culinary services in town. Our world-class chefs use only the freshest ingredients to create delicious and healthy meals that cater to all tastes and preferences.
          </p>
          <button className="bg-white text-black px-4 py-2 mt-5 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    );
};

export default Home;