import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = ({ data }) => {
  if (!data) {
    return <div>No results found</div>;
  }

  return (
    <div>

    <div className='container-fluid mt-5 d-flex flex-wrap gap-3'>
        {data.map((product, index) => (

          <div key={index} className="card mb-4" style={{ width: '18rem', height:'450px'}}>
                <img src={product.Poster} alt={product.Title} className="h-50 img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{product.Title}</h5>
                    <p className="card-text">Year: {product.Year}</p>
                    <p className="card-text">Type: {product.Type}</p>
                </div>
                    <button type="button" className="btn btn-success">Book Move tickit</button>
            </div>
        ))}
      </div>
      </div>
  );
};

export default Api;
