import React, { useState, useEffect } from 'react';
import { Facebook, Telegram, Instagram, Youtube, Logof, Twitter, Tiktok } from '../assets/icons';
import { BaseUrl } from '../contans';
import axios from "axios"
import { Link } from 'react-router-dom';
import { V1 } from '../context/context';

const Footer = (props) => {
  var til = props.til
  var menyu = props.menyu
  var menyuL = menyu.length / 2
  var menyu1 = props.menyu.slice(0, menyuL)
  var menyu2 = props.menyu.slice(menyuL)
  const [data, setData] = useState([]);
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const getNews = () =>{
    axios.get(`${BaseUrl}api/footer`).then((res)=>{
      const data = res?.data.footer[0]
      // console.log(data)
      setData(data)
    })
  } 
  useEffect(()=>{
    getNews()
  },[])
  return ( 
    <V1.Consumer>
      {(x)=>{
        var TEL = x.til === "uz"? "Telefon:" : "Телефон:"
        var ADDRESS = x.til === "uz"? "Manzil:" : "Манзил:"
        return(
          <div className="footer__container">
            <div className="footer container">
              <div className='footer__description'>
                <p>
                  {
                    til === "uz" ? data.text_uz
                    : til === "ru" ? data.text_ru
                    : data.text_en
                  }
                </p>
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
                  {ADDRESS} 
                  {
                    til === "uz" ? data.manzil_uz
                    : til === "ru" ? data.manzil_ru
                    : data.manzil_en
                  }
                </p>
                <p>{TEL} +99899 123 45 67</p>
                <div className='socialsets'>
                  <a href={`${data.telegram}`}><Telegram /></a>
                  <a href={`${data.facebook}`}><Facebook /></a>
                  <a href={`${data.youtbe}`}><Youtube /></a>
                  <a href={`${data.instagram}`}><Instagram /></a>
                  <a href={`${data.twitter}`}><Twitter /></a>
                  <a href={`${data.tiktok}`}><Tiktok /></a>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </V1.Consumer>
   );
}
 
export default Footer;