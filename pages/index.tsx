import React from 'react';

import Sidebar from '@/components/layout/sidebar';
import Navbar from '@/components/layout/navbar';
import About from '@/components/layout/about';
import Resume from '@/components/layout/Resume';
import Portfolio from '@/components/layout/portfolio';
import Blog from '@/components/layout/blog';
import Contact from '@/components/layout/contact';

let active = "about";

const Index = () => {
    return (
        <>
            <main>
            {/* #SIDEBAR */}
            <Sidebar/>
            {/* #main-content */}
            <div className="main-content">
                {/* #NAVBAR */}
                <Navbar active={active}/>
                {/* #ABOUT */}
                <About active={true}/>
                {/* #resume */}
                <Resume active={false}/>
                {/* #portfolio */}
                <Portfolio active={false}/>
                {/* #blog */}
                <Blog active={false}/>
                {/* #contact */}
                <Contact active={false}/>
            </div>
            </main>
        </>
    );
}
export default Index;