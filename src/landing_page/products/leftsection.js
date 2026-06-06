import React from 'react'

function Leftsection({imageURL,productName,productDescription,tryDemo,learnMore,GooglePlay,AppStore}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-6 p-5 mt-4">
          <img src={imageURL} alt="product" className='img-fluid' />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className='mt-5'>{productName}</h1>
          <p>{productDescription}</p>
          <div><a className="mb-5" style={{textDecoration:'none'}} href={tryDemo}>Try Demo<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a>
          <a className="ml-5" style={{marginLeft:"20px",textDecoration:'none'}} href={learnMore}>Learn More<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a></div>
          <div className='mt-5'>
          <a href={GooglePlay}><img src="media\googlePlayBadge.svg" alt="Google Play Badge" /></a>
          <a href={AppStore}><img style={{marginLeft:"20px"}} src="media\appStoreBadge.svg" alt="App Store Badge" /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Leftsection