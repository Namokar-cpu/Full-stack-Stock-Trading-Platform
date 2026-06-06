import React from 'react'
import Hero from './Hero'
import Leftsection from './Leftsection'
import Rightsection from './Rightsection'
import Universe from './Universe'
function Productpage() {
  return (
    <div>
        <Hero/>
        <Leftsection 
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        AppStore=""/>
        <Rightsection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
        />
        <Leftsection 
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        AppStore=""/> 
        <Rightsection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore=""
        />
        <Leftsection 
        imageURL="media/varsity (1).png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        AppStore=""/>
       <p className="text-center text-muted "><h4>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/blog" target="_blank" rel="noopener noreferrer" className="" style={{textDecoration:'None'}}>Zerodha.tech blog.</a></h4></p>
        
        <Universe />
    </div>
  )
}

export default Productpage