import React from 'react'
function Awards() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row'>
              <div className='col-6 p-5'>
                <img src='media/largestBroker.svg' alt='award' className='mb-4'></img>
                </div>  
              <div className='col-6 p-5'>
                <h1 className="mt-3">Largest Stock Broker In India</h1>
                <p className='mb-5 mt-3'>2+ million Zerodha customers contribute to over 15% of the total retail trading volume in India daily by trading and investing in  </p>
                <div className='row'>
                    <div className='col-6 '>
                    <ul>
                        <li><p>Future and Options</p></li>
                        <li><p>Commodity Futures</p></li>
                        <li><p>Currency Futures</p></li>
                    </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                        <li><p>Stocks</p></li>
                        <li><p>Mutual Funds</p></li>
                        <li><p>ETFs</p></li>
                    </ul>
                    </div>
                </div>
                <img src='media/presslogos.png' style={{width:"90%"}} className="mt-10"/>
              </div>
            </div>
        </div>
     );
}

export default Awards;