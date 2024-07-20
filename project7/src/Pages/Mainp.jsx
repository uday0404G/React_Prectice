import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import './product.css'; // Ensure this CSS file exists

const Mainp = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilter] = useState({
    Clothes: false,
    Furniture: false,
    Shoes: false,
    electronics: false,
    Miscellaneous: false,
  });
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/Products/`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter = (e) => {
    setFilter({
      ...filterData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredDatas = data;
  if (
    filterData.Clothes ||
    filterData.Furniture ||
    filterData.Shoes ||
    filterData.electronics ||
    filterData.Miscellaneous
  ) {
    filteredDatas = filteredDatas.filter((el) => {
      if (filterData.Clothes && el.category.name === "Clothes") {
        return true;
      }
      if (filterData.Furniture && el.category.name === "Furniture") {
        return true;
      }
      if (filterData.Shoes && el.category.name === "Shoes") {
        return true;
      }
      if (filterData.electronics && el.category.name === "Electronics") {
        return true;
      }
      if (filterData.Miscellaneous && el.category.name === "Miscellaneous") {
        return true;
      }
      return false;
    });
  }

  if (sort) {
    filteredDatas = filteredDatas.sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }

  if (search) {
    filteredDatas = filteredDatas.filter((el) => {
      return el.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <>
      <Navbar />
      <div className="filter-sort-search">
        <div className="filter-section">
          <label>
            <input type="checkbox" name="Clothes" onChange={handleFilter} /> Clothes
          </label>
          <label>
            <input type="checkbox" name="Furniture" onChange={handleFilter} /> Furniture
          </label>
          <label>
            <input type="checkbox" name="Shoes" onChange={handleFilter} /> Shoes
          </label>
          <label>
            <input type="checkbox" name="electronics" onChange={handleFilter} /> Electronics
          </label>
          <label>
            <input type="checkbox" name="Miscellaneous" onChange={handleFilter} /> Miscellaneous
          </label>
        </div>
        <div className="sort-section">
          <select value={sort} onChange={handleSort}>
            <option value="">Sort</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div className="search-section">
          <input type="text" placeholder="Search products" onChange={handleSearch} />
        </div>
      </div>
      <div className="container-fluid py-5 text-center">
        <h1 className="text-center p-5">BEST SELLERS</h1>
        <div className="container-fluid row">
          {filteredDatas.map((el) => (
            <div className="col-6 col-md-4 col-lg-3 product-card" key={el.id}>
              <NavLink to={`/Single/${el.id}`} className="col-12 text-decoration-none">
                <img src={el.images} alt={el.title} className="img-fluid product-image" />
                <div className="col-12 py-lg-3 h-auto">
                  <h5 className="text-dark text-center">{el.title}</h5>
                  <p className="text-center text-dark">{el.category.name}</p>
                  <h5 className="text-center text-dark">₹{el.price}</h5>
                </div>
              </NavLink>
            </div>
          ))}
          <a type="button" className="btn btn-secondary rounded-pill m-3">
            Shop All Products
          </a>
        </div>
      </div>
    </>
  );
};

export default Mainp;
