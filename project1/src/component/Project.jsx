import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../pro.css' 
function Project() {
    let [state,setState] = useState("data");
    let [img,setimg] = useState("");
    let [Name,setName] = useState("");
    let [price,setprice] = useState("");
    let [Quantity,setQuantity] = useState("");
    let [arr,setarr] = useState([]);

    const handleAddProduct = () => {
    
          const product = {
              name: Name,
              price: price,
              quantity: Quantity,
              image: img,
          };
          setarr([...arr, product]);
         
        
      }
        
      return (
        <div className="container mt-5 text-center">
            {
                state === "data" ?
                    <div>
                        <h1 className="mb-4">Product Form</h1>
                        <input type="text" className="form-control mb-2" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                        <input type="text" className="form-control mb-2" placeholder="Image URL" onChange={(e) => setimg(e.target.value)} />
                        <input type="text" className="form-control mb-2" placeholder="Price" onChange={(e) => setprice(e.target.value)} />
                        <input type="text" className="form-control mb-2" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
                        <button className="btn btn-primary mr-2" onClick={handleAddProduct}>Add Product</button>
                        <button className="btn btn-secondary" type="button" onClick={() => setState("show")}>Show</button>
                    </div> :
                    <div>

                    <div className='container-fluid mt-5 d-flex flex-wrap gap-3'>
                        {arr.map((product, index) => (

                          <div key={index} className="card mb-4" style={{ width: '18rem' }}>
                                <img src={product.image} alt={product.name} className="card-img-top  h-75" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">Quantity: {product.quantity}</p>
                                    <button type="button" className="btn btn-success">Add to cart</button>
                                </div>
                            </div>
                        ))}
                      </div>
                        <button className="btn btn-secondary" type="button" onClick={() => setState("data")}>Back</button>
                      </div>
            }
        </div>
    )
}

export default Project;