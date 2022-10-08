import React, { useState, useEffect } from 'react';
import { V1 } from '../context/context';
import { Logo, Obhavo, Dollor, Gradus } from '../assets/icons';
import dateFormat from "dateformat";
import axios from 'axios';
const UpNav = () => {
  const [valyuta, setValyuta] = useState();
  var date = new Date().toLocaleDateString('en-US')
  var now = dateFormat(date, "yyyy-mm-dd")
  console.log(valyuta)
  useEffect(()=>{
    const getValyuta = () =>{
      axios.get(`https://cbu.uz/ru/arkhiv-kursov-valyut/json/USD/${now}/`)
        .then((res)=>{
          console.log(res)
          setValyuta(res.data)
      })
    }
    getValyuta()
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
              <div className="up__info">
                <div>
                  <button className={x.til === "uz"? "til__active" :""} onClick={x.handleUz}>Uz</button>
                  <button className={x.til === "ru"? "til__active" :""} onClick={x.handleRu}>Уз</button>
                  <button className={x.til === "en"? "til__active" :""} onClick={x.handleEn}>En</button>
                </div>
                <div className='up__nav__stat'>
                  <div>
                    <Obhavo/>
                    <p>15 <sup><Gradus/></sup></p>
                    <p>Toshkent</p> 
                  </div>
                  <div>
                    <Dollor/>
                    <p>10 958</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        )
      }}
    </V1.Consumer>
   );
}
 
export default UpNav;