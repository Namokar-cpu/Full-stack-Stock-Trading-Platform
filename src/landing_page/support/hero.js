import React from 'react'
function Hero() {
    return ( <section className='container-fluid p-3' id="support-portal">
        
            <div className='mb-3  p-3  ' id='support-title'>
            <h3>Support Portal</h3>
            <a href="">Track Tickets</a>
            </div>
            <div className='row   p-3 'id='support-wrapper' >
            <div className='col-6 mb-5  p-3  '  >
            <h1>Search for an answer or browse help topics to create a ticket </h1>
            <input placeholder='E.g.:how do i activate F&O'className="mb-3  mt-3"></input><br></br>
            <a href="" style={{color:"white"}}>Track Account Opening</a><br></br>
            <a href="" style={{color:"white"}}>Track Segment Activation</a><br></br>
            <a href="" style={{color:"white"}}>Intraday Margins</a> <br></br>
            <a href="" style={{color:"white"}}>Kite user Manual</a>
            </div>
            <div className='col-6 mb-5  p-3  ' >
            <h1>Features</h1>
            <a href="" style={{color:"white"}}>1:Current Takeovers and Delisting-Jan-2026</a><br></br>
            <a href="" style={{color:"white"}}>2:Latest Intraday Leverages- MIS & CO</a>
            </div>
            </div>
           
            
            
            </section>
     );
}

export default Hero;