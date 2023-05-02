import React from 'react';
import Header from '../Components/Shared/Header/Header';
import Footer from '../Components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Header/>
        <Outlet/>
        <Footer/>

      </div>
    );
};

export default Main;