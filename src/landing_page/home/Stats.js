import React from 'react'
function Stats() {
    return ( 
    <div className='container p-3'>
        <div className='row'>
            <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-muted mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h3 className='fs-4'>No spam or gimmicks</h3>
                <p className='text-muted mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h3 className='fs-4'>The Zerodha universe</h3>
                <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h3 className='fs-4'>Do better with money</h3>
                <p className='text-muted mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/ecosystem.png' alt='Zerodha Ecosystem' style={{width:"100%"}} ></img>
                <div className='d-flex justify-content-center '>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i className="fa-solid fa-arrow-right-long ms-2"style={{fontSize:"12px"}}></i></a>
                    <a href='' style={{textDecoration:"none"}} >Try kite demo<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a>
                </div>
            </div>
            </div>
    </div>
    );
}

export default Stats;