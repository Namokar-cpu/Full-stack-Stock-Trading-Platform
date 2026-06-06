import React from 'react'

function Universe() {
  return (
    <div className='container my-5' style={{padding:'100px'}}>
      <h1 className='text-center mb-4'>Zerodha Universe</h1>
      <p className='text-center text-muted mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className='row' style={{marginTop:'100px'}}>
        <div className='col-4 text-center p-5'>
          <img width="50%" src='media\zerodhaFundhouse.png' alt='zerodha fundhouse' /><br></br><br></br>
          <p className='text-small text-muted'>Our assesment venturethat is creating simple and transparent index funds to help you to save for your bright future </p>
        </div>
        <div className='col-4 text-center p-5'>
          <img width="60%" src='media\sensibullLogo.svg' alt='sensibull logo' /><br></br><br></br>
          <p className='text-small text-muted'>Advanced options trading platform with real-time data and analytics</p>
        </div>
        <div className='col-4 text-center p-5'>
          <img src="media/tijori.svg" alt="tijori Logo" width="60%" /><br></br><br></br>
          <p className='text-small text-muted'>A comprehensive financial planning and goal tracking platform to help you achieve your financial goals</p>
        </div>
      </div>

      <div className='row' >
        <div className='col-4 text-center p-5'>
          <img width="50%" src='media\streakLogo.png' alt='zerodha fundhouse' /><br></br><br></br>
          <p className='text-small text-muted'>Systematic trading platform that allows you and bakebast strategies without coding </p>
        </div>
        <div className='col-4 text-center p-5'>
          <img width="60%" src='media\smallcaseLogo.png' alt='sensibull logo' /><br></br><br></br>
          <p className='text-small text-muted'> Thermatic investing platform that helps you to invest in diversified baskets of stocks in ETF's</p>
        </div>
        <div className='col-4 text-center p-5'>
          <img src="media\dittoLogo.png" alt="tijori Logo" width="50%" /><br></br><br></br>
          <p className='text-small text-muted'>Personalized platform to provide best health and life insurance .No spam and no mispelling</p>
        </div>
        <button className=' text-center text-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}}>Sign up for free</button>
      </div>
      
    </div>
  )
}

export default Universe