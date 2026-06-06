import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import Openaccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Homepage() {
    return ( 
        <> 
        <Hero/> 
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
       
       
        </>
     );
}

export default Homepage;