import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/Products/`)
      .then((res) => res.json())  
      .then((res) => {
        setData(res.splice(30,12));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
 

      <div class="container-fluid py-5 text-center">
        <h1 class="text-center p-5">BEST SELLERS</h1>
        <div class="container-fluid row">
          {data.map((el) => (
            <div class="col-6 col-md-4 col-lg-3 " key={el.id}>
              <NavLink to={`/Single/${el.id}`} class="col-12 text-decoration-none">
                <img src={el.images} alt="" class="img-fluid" />
                <div class="col-12 py-lg-3 h-auto">
                  <h5 class="text-dark text-center">{el.title}</h5>
                  <p class="text-center text-dark">{el.category.name}</p>
                  <h5 class="text-center text-dark">${el.price}</h5>
                </div>
              </NavLink>
            </div>
          ))}

          <a type="button" class="btn btn-secondary rounded-pill m-3">
            Shop All Products
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
