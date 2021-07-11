import React, { useState, useEffect } from 'react'; 
import "./covid.css";
import img from "../assests/covid.png";
import img2 from "../assests/syringe.png";
import img3 from "../assests/stayhome.png";

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async() => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json")
            console.log(res);
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }     
    };

    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <>
        <div className="container-fluid justify-content-center">

            <div className="title text-center bg-dark text-white p-2 mb-2">
             <h3 className="text-danger">LIVE* <img src={img} alt="logo" width="42px" height="42px"/> DATA</h3> 
             <h2>Covid-19 Tracker</h2>
            </div>

          <div className="row">

              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-primary">
                     <p className="card-name">COUNTRY</p>
                     <p className="card-total card-small">INDIA</p>
                 </div>   
              </div>

              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-success">
                     <p className="card-name"><span>TOTAL</span> RECOVERED</p>
                     <p className="card-total card-small">{data.recovered}</p>
                 </div>   
              </div>

              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-warning">
                     <p className="card-name"><span>TOTAL</span> CONFORMED</p>
                     <p className="card-total card-small">{data.confirmed}</p>
                 </div>   
              </div>

              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-danger">
                     <p className="card-name"><span>TOTAL</span> DEATH</p>
                     <p className="card-total card-small">{data.deaths}</p>
                 </div>   
              </div>  


              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-info">
                     <p className="card-name"><span>TOTAL</span> ACTIVE</p>
                     <p className="card-total card-small">{data.active}</p>
                 </div>   
              </div>  

              <div className="card-col col-sm-4">
                 <div className="card text-center m-4 bg-secondary">
                     <p className="card-name"><span>LAST</span> UPDATED</p>
                     <p className="card-total card-small">{data.lastupdatedtime}</p>
                 </div>   
              </div>  

          </div>
 
          <div className="bg-dark text-center text-white">
            <p className="">Learn more about COVID-19 data</p>
            <a href="https://www.worldometers.info/coronavirus/country/india/" className="btn btn-outline-success btn-center p-2 m-2">For more Information</a>
            <p className="m-2 text-success">Let's Get Vaccinated <img src={img2} alt="logo" width="" height=""/> and Stay Safe <img src={img3} alt="logo" width="" height=""/> </p>
          </div>
        </div> 
        </>
    )
}
 
export default Covid;
