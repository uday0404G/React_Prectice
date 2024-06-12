import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = ({ arr }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {arr.map((el, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={el.picture.large} className="card-img-top" alt={`${el.name.first} ${el.name.last}`} />
              <div className="card-body">
                <h5 className="card-title">{`${el.name.title} ${el.name.first} ${el.name.last}`}</h5>
                <p className="card-text"><strong>Gender:</strong> {el.gender}</p>
                <p className="card-text"><strong>Address:</strong> {`${el.location.street.number} ${el.location.street.name}, ${el.location.city}, ${el.location.state}, ${el.location.country}, ${el.location.postcode}`}</p>
                <p className="card-text"><strong>Email:</strong> {el.email}</p>
                <p className="card-text"><strong>Username:</strong> {el.login.username}</p>
                <p className="card-text"><strong>Date of Birth:</strong> {new Date(el.dob.date).toLocaleDateString()} (Age: {el.dob.age})</p>
                <p className="card-text"><strong>Registered:</strong> {new Date(el.registered.date).toLocaleDateString()} (Age: {el.registered.age})</p>
                <p className="card-text"><strong>Phone:</strong> {el.phone}</p>
                <p className="card-text"><strong>Cell:</strong> {el.cell}</p>
                <p className="card-text"><strong>ID:</strong> {el.id.name}: {el.id.value}</p>
                <p className="card-text"><strong>Nationality:</strong> {el.nat}</p>
                <p className="card-text"><strong>Coordinates:</strong> {`Latitude: ${el.location.coordinates.latitude}, Longitude: ${el.location.coordinates.longitude}`}</p>
                <p className="card-text"><strong>Timezone:</strong> {`${el.location.timezone.offset} (${el.location.timezone.description})`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
