import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "../Redux/ProductReducer/action";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const dispatch = useDispatch();
  const ProData = useSelector((s) => s.rootReducer);
  useEffect(() => {
    ProductData(dispatch);
  }, [dispatch]);

  console.log(ProData);

  return (
    <>
      <div class="product-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3>
                  <span class="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            {ProData.data.map((el) => {
              return (
                <div
                  class="col-lg-4 col-md-6 text-center strawberry"
                  key={el.id}
                >
                  <div class="single-product-item">
                    <div class="product-image">
                      <Link to={`/Product/${el.id}`}>
                        <img src={el.image} alt={el.title} />
                      </Link>
                    </div>
                    <h3>{el.title}</h3>
                    <p class="product-price">
                      <span>Per Kg</span> {el.price}${" "}
                    </p>
                    <Link to="/cart" class="cart-btn">
                      <i class="fas fa-shopping-cart"></i> Add to Cart
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
