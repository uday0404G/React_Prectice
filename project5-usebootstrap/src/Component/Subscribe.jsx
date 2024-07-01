import React from 'react'

const Subscribe = () => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center aaa py-lg-5" style={{ height: 'auto' }}>

      <div className="col-12 col-lg-8">
        <p className="text-center">JOIN OUR NEWSLETTER</p>
        <h1 className="display-3 fw-bolder text-center">Subscribe to get Updated with new offers</h1>
        <br />
        <div className="col-12 d-flex gap-1">
          <input type="email" name="" id="" className="form-control w-75" placeholder="Enter Email Address" /><br />
          <button type="button" className="btn py-2 text-white" style={{ backgroundImage: 'linear-gradient(16deg, #ff005a 0%, #ff5d2d 64%, #ffba00 100%)' }}>SUBSCRIBE NOW</button>
        </div>
      </div>

    </div>
  </>
  )
}

export default Subscribe