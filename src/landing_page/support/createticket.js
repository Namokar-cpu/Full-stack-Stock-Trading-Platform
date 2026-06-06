import React from 'react'
function Createticket() {
    return ( 
        <div className='container p-5'>
            <div className='mb-5  p-3 row '>
            <h1 className="mt-5 fs-3 text-center ">To create a ticket select a relevant option.</h1>
            {/* <h1 className="fs-3 text-center ">Now, we are breaking ground with our technology.</h1> */}
            </div>
            <div className="row">
            <div className='col-4 p-5'>
                <h4><i class="fa fa-plus-circle" aria-hidden="true"></i>Account Opening</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Resident individual</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Minor</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Non-resident Indian (NRI)</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Foreign institutional investor (FII)</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>company,Partnership,HUF and LLP</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Glossary</a>
            </div>
            <div className='col-4 p-5'>
                <h4><i class="fa-solid fa-circle-user"></i>Your Zerodha Account</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Your profile</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Account Modification</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Client Master report and Depositry participate</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Nomination</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Transfer and conversion of securities</a><br></br>
                {/* <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Glossary</a> */}
            </div>
            <div className='col-4 p-5'>
                <h4><i class="fa-brands fa-xing"></i>Kite</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>IPO</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Trading FAQ's</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Margin Trading Facilities</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Charts and Orders</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Alerts and Nudges</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>General</a>
            </div>
            </div>
            <div className="row">
            <div className='col-4 p-5'>
                <h4><i class="fa-solid fa-indian-rupee-sign"></i>FUnds</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Add Money</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Withdraw Money</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Add bank accounts </a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>e-Mandates</a><br></br>
                
            </div>
            <div className='col-4 p-5'>
                <h4><i class="fa-solid fa-terminal"></i>Console</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Portfolio </a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Corporate Actions</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Fund statement</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Report</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Profile</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Segments</a>
            </div>
            <div className='col-4 p-5'>
                <h4><i class="fa-solid fa-coins"></i>Coin</h4>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Mutual Funds</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>National Pension Scheme</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Fixed Deposit</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Features on Coin</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>Payments and Orders</a><br></br>
                <a href="" className="mb-2" style={{ textDecoration: 'None',lineHeight:"2.5" }}>General</a>
            </div>
            </div>
        </div>
    );
}

export default Createticket;