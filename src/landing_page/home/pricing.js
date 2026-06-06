import React from 'react'
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 '>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div ><a href='' className='mb-5 ' style={{textDecoration:"none"}} >See Pricing<i className="fa-solid fa-arrow-right-long ms-2 " style={{fontSize:"12px"}}></i></a></div>
                </div>
                
                <div className='col-6 p-5'>
                    <div className='row'>
                        <div className='col-4'>
                        <img src='media/pricing-eq.svg' alt='pricing' style={{width:"80%"}}></img>
                        <p className='text-muted fs-7'>Free account opening</p>
                        </div>
                        <div className='col-4'>
                        <img src='media/pricing-eq.svg' alt='pricing' style={{width:"80%"}}></img>
                        <p className='text-muted fs-7'>Free equity deliveryand direct mutual funds</p>
                        </div>
                        <div className='col-4'>
                        <img src='media/other-trades.svg' alt='pricing' style={{width:"80%"}}></img>
                        <p className='text-muted fs-7'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;