import React from 'react';

const Product = () => {
  return (
    <div>  
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a className="d-flex m-2 py-2 Aa rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                      <span className="text-dark" style={{ width: '130px' }}>All Products</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex py-2 m-2 Aa rounded-pill" data-bs-toggle="pill" href="#tab-2">
                      <span className="text-dark" style={{ width: '130px' }}>Vegetables</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex m-2 py-2 Aa rounded-pill" data-bs-toggle="pill" href="#tab-3">
                      <span className="text-dark" style={{ width: '130px' }}>Fruits</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex m-2 py-2 Aa rounded-pill" data-bs-toggle="pill" href="#tab-4">
                      <span className="text-dark" style={{ width: '130px' }}>Bread</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="d-flex m-2 py-2 Aa rounded-pill" data-bs-toggle="pill" href="#tab-5">
                      <span className="text-dark" style={{ width: '130px' }}>DALS</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4" id="aa">
                      <div className="col-md-6 col-lg-4 col-xl-3 aaa">
                        <a href="shop-detail.php?id=1">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/sample1.jpg" className="img-fluid w-100 rounded-top imgh" alt="" />
                            </div>
                            <div className="text-white px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px', backgroundColor: '#ffb524' }}>Fruits</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Sample Product 1</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$10.00 /kg</p>
                                <a href="shop-detail.php" className="btn border aa rounded-pill px-3" style={{ color: '#81c408' }}>
                                  <i className="fa fa-shopping-bag me-2" style={{ color: '#81c408' }}></i> Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 aaa">
                        <a href="shop-detail.php?id=2">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/sample2.jpg" className="img-fluid w-100 rounded-top imgh" alt="" />
                            </div>
                            <div className="text-white px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px', backgroundColor: '#ffb524' }}>Vegetables</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Sample Product 2</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$15.00 /kg</p>
                                <a href="shop-detail.php" className="btn border aa rounded-pill px-3" style={{ color: '#81c408' }}>
                                  <i className="fa fa-shopping-bag me-2" style={{ color: '#81c408' }}></i> Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* Additional static product cards can be added here */}
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3 aaa">
                        <a href="shop-detail.php?id=3">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/sample3.jpg" className="img-fluid w-100 rounded-top imgh" alt="" />
                            </div>
                            <div className="text-white px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px', backgroundColor: '#ffb524' }}>Vegetables</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Sample Product 3</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$12.00 /kg</p>
                                <a href="shop-detail.php" className="btn border aa rounded-pill px-3" style={{ color: '#81c408' }}>
                                  <i className="fa fa-shopping-bag me-2" style={{ color: '#81c408' }}></i> Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 aaa">
                        <a href="shop-detail.php?id=4">
                          <div className=    "rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img src="img/sample4.jpg" className="img-fluid w-100 rounded-top imgh" alt="" />
                            </div>
                            <div className="text-white px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px', backgroundColor: '#ffb524' }}>Vegetables</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Sample Product 4</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$18.00 /kg</p>
                                <a href="shop-detail.php" className="btn border aa rounded-pill px-3" style={{ color: '#81c408' }}>
                                  <i className="fa fa-shopping-bag me-2" style={{ color: '#81c408' }}></i> Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* Additional static product cards for the Vegetables tab can be added here */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional tabs for Fruits, Bread, and DALS can be added here in a similar manner */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
