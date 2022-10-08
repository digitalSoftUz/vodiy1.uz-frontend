import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Facebook, Telegram, Instagram, Youtube, Logof } from '../assets/icons';
import { BaseUrl } from '../contans';
import axios from "axios"

const Footer = (props) => {
  var til = props.til
  const { t } = useTranslation()
  const [data, setData] = useState([]);
  const getNews = () =>{
    axios.get(`${BaseUrl}api/footer`).then((res)=>{
      const data = res?.data.footer[0]
      setData(data)
      // console.log(data)
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
            <a href="/">{t("NAV1")}</a>
            <a href="/">{t("FARGONA")}</a>
            <a href="/">{t("ANDIJON")}</a>
            <a href="/">{t("NAMANGAN")}</a>
            <a href="/">{t("NAV3")}</a>
            <a href="/">{t("NAV4")}</a>
            <a href="/">{t("VIDEO")}</a>
            <a href="/">{t("FOTO")}</a>
          </div>
          <div className='footer__link'>
            <a href="/">{t("NAV5")}</a>
            <a href="/">{t("NAV8")}</a>
            <a href="/">{t("NAV6")}</a>
            <a href="/">{t("OSH2")}</a>
            <a href="/">{t("XOJAND")}</a>
            <a href="/">{t("JAXON")}</a>
          </div>
          <div className='footer__info'>
            {/* <img src={Footer__logo} alt="" /> */}
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