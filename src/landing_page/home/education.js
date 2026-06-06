import React from 'react'
function Education() {
    return ( 
    <div className='container p-5 mb-5'>
        <div className='row'>
            <div className='col-6 mb-5'>
                <img  src='media/education.svg' alt='education' style={{width:"75%",marginTop:"-50px"}}></img>
            </div>
            <div className='col-6'>
                <h2 className='fs-3 mb-5'>Free and open market education</h2>
                <p className='text-muted mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' className='mb-5' style={{textDecoration:"none"}} >Varsity<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a>
                <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' className='mb-5' style={{textDecoration:"none"}} >TradingQ&A<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a>
            </div>
        </div>
    </div>
    );
}

export default Education;