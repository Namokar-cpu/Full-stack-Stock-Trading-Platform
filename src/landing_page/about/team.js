import React from 'react'
import { Link } from 'react-router-dom'
function Team() {
    return (
        <div className='container p-5'>
            <div className='p-3 row '>

                <h1 className="fs-3 text-center ">People</h1>
            </div>
            <div className='p-5 mt-5 row '>
                <div className='fs-6 col-6 p-5'>
                    <img src="media/nithinKamath.jpg" alt="Nitin Kamath" style={{marginBottom:"20px",width:"65%" ,borderRadius:"100%",marginLeft:"100px"}}></img>
                    <h3 className='fs-5 text-center'>Nithin Kamath</h3>
                    <p className='fs-6 text-center'>Founder and CEO</p>
                </div>
                <div className='fs-6 col-6 p-5'>
                    <p className='mt-5 text-muted'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className='mt-4 text-muted'>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='mt-4 text-muted'>
                        Playing basketball is his zen.</p>
                        <p className='mt-4 text-muted'>
                            Connect on <Link style={{textDecoration:"none"}} to="/">Homepage</Link>, <a style={{textDecoration:"none"}}href="">TradingQnA</a>, and <a style={{textDecoration:"none"}}href="">Twitter</a>
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Team;