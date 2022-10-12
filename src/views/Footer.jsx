import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Facebook, Telegram, Instagram, Youtube, Logof } from '../assets/icons';
import { BaseUrl } from '../contans';
import axios from "axios"
import { Link } from 'react-router-dom';

const Footer = (props) => {
  var til = props.til
  var menyu = props.menyu
  var menyuL = menyu.length / 2
  var menyu1 = props.menyu.slice(0, menyuL)
  var menyu2 = props.menyu.slice(menyuL)
  const { t } = useTranslation()
  const [data, setData] = useState([]);
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const getNews = () =>{
    axios.get(`${BaseUrl}api/footer`).then((res)=>{
      const data = res?.data.footer[0]
      setData(data)
    })
  } 
  useEffect(()=>{
    getNews()
  },[])
  return ( 
    <React.Fragment>
      <div className="footer__container">
        <div className="footer container">
          <div className='footer__description'>
            <p>{data.text}</p>
          </div>
          <div className='footer__link'>
            {menyu1.map((item, index)=>{
              return(
                <Link to={`/category/${item.id}`} key={index} onClick={scrollTop}>
                  {
                    til === "uz" ? item.name_uz
                    : til === "ru" ? item.name_ru
                    : item.name_en
                  }
                </Link>
              )
            })}
          </div>
          <div className='footer__link'>
            {menyu2.map((item, index)=>{
              return(
                <Link to={`/category/${item.id}`} key={index} onClick={scrollTop}>
                  {
                    til === "uz" ? item.name_uz
                    : til === "ru" ? item.name_ru
                    : item.name_en
                  }
                </Link>
              )
            })}
          </div>
          <div className='footer__info'>
            <Logof/>
            <p>
              {t("ADDRESS")} 
              {
                til === "uz" ? data.manzil_uz
                : til === "ru" ? data.manzil_ru
                : data.manzil_en
              }
            </p>
            <p>{t("TEL")} +99899 123 45 67</p>
            <div className='socialsets'>
              <a href={`${data.facebook}`}><Facebook /></a>
              <a href={`${data.telegram}`}><Telegram /></a>
              <a href={`${data.instagram}`}><Instagram /></a>
              <a href={`${data.youtbe}`}><Youtube /></a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Footer;