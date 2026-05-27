import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Education from './education';
import Awards from './Awards';
import Pricing from './pricing';
import Openaccount from '../openaccount';
import Navbar from '../Navbar';
import Footer from '../footer';
function Homepage() {
    return ( 
        <>
        <Hero/> 
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
        <Navbar/>
        <Footer/>
        </>
     );
}

export default Homepage;