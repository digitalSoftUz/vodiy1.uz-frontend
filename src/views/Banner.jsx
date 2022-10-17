import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BaseUrl } from '../contans';

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(()=>{
    axios.get(`${BaseUrl}api/banner`)
      .then((res)=>{
        const data = res.data.banner
        setBanner(data)
      })
  },[])
  return (
    <React.Fragment>
        <div className="brand-wheel">
          <div className="brand-slide">
            {banner?.map((item, index) => {
              return (
                <a href={item.silka} key={index}>
                  <img src={BaseUrl+item.img} alt="" />
                </a>
              );
            })}
          </div>
          <div className="brand-slide delay">
          {banner?.map((item, index) => {
              return (
                <a href={item.silka} key={index}>
                  <img src={BaseUrl+item.img} alt="" />
                </a>
              );
            })}
          </div>
        </div>
    </React.Fragment>
  )
}

export default Banner;