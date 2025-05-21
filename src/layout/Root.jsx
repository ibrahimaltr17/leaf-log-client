import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header/Navbar';
import './Root.css'

const Root = () => {
    return (
        <div className='m-plus-rounded-1c'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;