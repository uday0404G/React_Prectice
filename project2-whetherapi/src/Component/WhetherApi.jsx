import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const WhetherApi = () => {
  const [state,setState] = useState("");
  const [search,setSearch] =useState("")
  const [data,setData] = useState(null);
  const handleChange=(e)=>{
    setState(e.target.value)
  }
  console.log(state);
  const Sub =()=>{
    setSearch(state)
  }
  useEffect(()=>{
if(search)
  {

  

      
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d077f34de839f0a9d593bb80348efc2&units=metric`)
    .then((e)=>e.json())
    .then((data)=>setData(data))
    .catch((err)=>console.log(err))
}},[search])
  return (
    <div>
<section className="h-auto pt-5" style={{ backgroundColor: "#C1CFEA" }}>
      <input
        type="search"
        className="form-control w-25 m-auto"
        id="s"
        placeholder="Enter Country Name"
        onChange={handleChange}
      />
      <div className="text-center mt-2">
        <button type="button" className="btn btn-warning" onClick={Sub}>
          Search
        </button>
      </div>
      <div className="container mt-2 justify-content-center d-flex" id="countryData"></div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{ color: "#282828" }}>
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="card mb-4 gradient-custom" style={{ borderRadius: "25px" }}>
              <div className="card-body p-4">
                <div id="demo1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between mb-4 pb-0">
                        <div>
                          {data ? (
                           <>
                           <h2 className="display-2"><strong id="temp">{data.main?.temp}</strong></h2>
                           <p className="text-muted mb-0" id="cloud">{data.weather[0]?.description}</p>
                           <p className="text-muted mb-0" id="city">{data.name}</p>
                           <p className="text-muted mb-0 mt-2" id="time">{new Date().toDateString()}</p>
                         </>
                          ) : (
                            <h1>Search Now</h1>
                          )}
                        </div>
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                            width="150px"
                            alt="Weather"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <div className="card mb-4" style={{ borderRadius: "25px" }}>
          <div className="card-body p-4">
            <div id="demo2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div className="flex-column">
                      <p className="small"><strong>21°C</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>12:00</strong></p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>PM</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>2°C</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>1:00</strong></p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>PM</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>20°C</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>2:00</strong></p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>PM</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>19°C</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>3:00</strong></p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>PM</p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>18°C</strong></p>
                      <i className="fas fa-cloud-showers-heavy fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>4:00</strong></p>
                      <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderRadius: "25px" }}>
          <div className="card-body p-4">
            <div id="demo3" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div className="flex-column">
                      <p className="small"><strong>21°C</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>Mon</strong></p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>20°C</strong></p>
                      <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>Tue</strong></p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>16°C</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>Wed</strong></p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>17°C</strong></p>
                      <i className="fas fa-cloud fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>Thu</strong></p>
                    </div>
                    <div className="flex-column">
                      <p className="small"><strong>18°C</strong></p>
                      <i className="fas fa-cloud-showers-heavy fa-2x mb-3" style={{ color: "#ddd" }}></i>
                      <p className="mb-0"><strong>Fri</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</div>


  )
}

export default WhetherApi

