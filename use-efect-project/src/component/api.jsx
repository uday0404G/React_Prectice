import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Api = ({ arr }) => {
  return (
    <div>
      {arr.map((el, index) => (
        <div key={index}>
          <div class="nft">
            <div class="main">
              <img
                class="tokenImage"
                src={el.picture.large}
                alt={el.name.first}
              />

              <h5 className="description">{`${el.name.title} ${el.name.first} ${el.name.last}`}</h5>
              <p className="description">
                <strong>Gender:</strong> {el.gender}
              </p>
              <p className="description">
                <strong>Address:</strong>{" "}
                {`${el.location.street.number} ${el.location.street.name}, ${el.location.city}, ${el.location.state}, ${el.location.country}, ${el.location.postcode}`}
              </p>

              <div class="tokenInfo">
                <div class="price">
                  <p className="card-text">
                    <strong>Email:</strong> {el.email}
                  </p>
                </div>
                <div class="duration">
                  <p className="card-text">
                    <strong>Phone:</strong> {el.phone}
                  </p>
                </div>
              </div>
        
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api;
