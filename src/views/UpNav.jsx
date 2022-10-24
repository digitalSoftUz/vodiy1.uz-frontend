import React, { useState, useEffect } from 'react';
import { V1 } from '../context/context';
import { Logo, Obhavo, Dollor, Gradus } from '../assets/icons';
import dateFormat from "dateformat";
import axios from 'axios';
import Banner from './Banner';

const UpNav = () => {
  // const [valyuta, setValyuta] = useState();
  // const [weather, setWeather] = useState();
  // const result = weather?.toString().split('.', 1)
  // const [city, setCity] = useState();
  // var date = new Date().toLocaleDateString('en-US')
  // var now = dateFormat(date, "yyyy-mm-dd")
  useEffect(()=>{
    // const getValyuta = () =>{
    //   axios.get(`https://cbu.uz/oz/arkhiv-kursov-valyut/json/USD/${now}/`,{
    //     headers: { 
    //       'Cookie': 'BITRIX_SM_GUEST_ID=39944147; BITRIX_SM_LAST_VISIT=15.10.2022%2014%3A11%3A02; PHPSESSID=nu0ufWKBfdofZPNZoL4OIuT0LSz3f2cJ'
    //     }})
    //     .then((res)=>{
    //       // console.log(res)
    //       setValyuta(res.data[0])
    //   })
    // }
    // getValyuta()

    // const getWeather = () =>{
    //   var lat = (40.82)
    //   var lon = (72.28)
    //   var api = "26cef269b671e50cb02f7035722833fd"
    //   var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`
    //   axios.get(url)
    //     .then((res)=>{
    //       // console.log(res.data)
    //       setCity(res.data.name)
    //       setWeather(res.data.main.temp)
    //   })
    // }
    // getWeather()

  },[])
  return ( 
    <V1.Consumer>
      {(x)=>{
        return(
          <div className="up__nav">
            <div className="up__navbar">
              <a href='/' className="logo">
                <Logo/>
              </a>
              <div className="up__banner">
                <Banner />
              </div>
              <div className="up__info">
                <div>
                  <button className={x.til === "ru"? "til__active" :""} onClick={x.handleRu}>Ўз</button>
                  <button className={x.til === "uz"? "til__active" :""} onClick={x.handleUz}>O‘z</button>
                  {/* <button className={x.til === "en"? "til__active" :""} onClick={x.handleEn}>En</button> */}
                </div>
                {/* <div className='up__nav__stat'>
                  <div>
                    <Obhavo/>
                    <p>{result} <sup><Gradus/></sup></p>
                    <p>{city}</p> 
                  </div>
                  <div>
                    <Dollor/>
                    <p>{valyuta?.Rate}</p>
                  </div>
                </div> */}
                
              </div>
            </div>
          </div>
        )
      }}
    </V1.Consumer>
   );
}
 
export default UpNav;