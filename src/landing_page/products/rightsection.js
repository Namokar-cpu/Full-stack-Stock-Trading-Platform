import React from 'react'

function Rightsection({imageURL,productName,productDescription,learnmore}) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'  >
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <a href={learnmore} style={{textDecoration:'none'}}>Learn More<i className="fa-solid fa-arrow-right-long ms-2" style={{fontSize:"12px"}}></i></a>
        </div>
        <div className='col-6'>
          <img src={imageURL} alt="product" className='img-fluid' />
        </div>
        </div>

    </div>
  )
}

export default Rightsection