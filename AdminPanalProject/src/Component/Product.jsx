import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './ProductPage.css';
import { db } from '../Firebase/firebase';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productCollection = collection(db, 'productdatabase');

  const getProducts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(productCollection);
      const productArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productArray);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);



  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteDoc(doc(db, 'productdatabase', id));
        alert('Product deleted successfully');
        getProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      }
    }
  };

    const [search,setSearch]=useState("")

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

      
    


  if (loading) return <div>Loading products...</div>;




  return (
    <div className="container">
      <h1>Product Page</h1>
      <input type="search" placeholder='search here ' onChange={(e)=>setSearch(e.target.value)}   value={search}/><br /><br /><br />
      <div className="product-list">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-card-content">
                <h3 className='h3'>{product.title}</h3>
                <p>{product.description}</p>
                <p><span><b>Rs.{product.price}</b></span> </p>
                <div className='editbtn'>
                <Link to={`/edit/${product.id}`}>Edit</Link>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Product;
