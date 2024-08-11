import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';

const HomeLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-col justify-between'>
            <Navbar />
            <div className='flex-grow'>
                <Outlet />
            </div>
            {isHomePage && <Footer />}
        </div>
    );
}

export default HomeLayout;