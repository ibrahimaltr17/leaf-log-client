import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import './Root.css'
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='m-plus-rounded-1c'>
            <Navbar></Navbar>
            <div className='bg-[#F1F8E9]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;