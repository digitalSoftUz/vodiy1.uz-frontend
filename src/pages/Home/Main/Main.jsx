import React from 'react';
// import Card4 from '../Components/Cards4';
import Card5 from '../Components/Cards5';
import Card6 from '../Components/Cards6';
import Slider from '../Components/Slider';
import Slider2 from '../Components/Slider2';
// import CardBox from "../Components/CardBox";
import Reyting from "../Components/Reyting";
import CardList from '../Components/CardList';
import { V1 } from '../../../context/context';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import EastIcon from '@mui/icons-material/East';

const Main = () => {
  const { t } = useTranslation()
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  return (  
    <V1.Consumer>
      {(x)=>{
        // console.log(x.songi15)
        return(
          <div className="container">
            <div className="main">
              <div className="main__left">
                <Link to={`news`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>{t("LASTNEWS")} <div><span>{t("ALL")}</span> <EastIcon/></div></Link>
                <CardList data={x.songi15} til={x.til}/>
              </div>
              <div className="main__right">
                <Link to={`category/${x.data1?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data1?.name_uz
                    : x.til === "ru" ? x.data1?.name_ru
                    : x.data1?.name_en
                  } 
                  <div><span>{t("ALL")}</span> <EastIcon/></div>
                </Link>
                <div className="b_bot">
                  <Card5 data={x.data1?.xabar} til={x.til}/>
                </div>
                <Link to={`category/${x.data2?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data2?.name_uz
                    : x.til === "ru" ? x.data2?.name_ru
                    : x.data2?.name_en
                  } 
                  <div><span>{t("ALL")}</span> <EastIcon/></div>
                </Link>
                <div className="b_bot">
                  <Card5 data={x.data2?.xabar} til={x.til}/>
                </div>
                <Link to={`category/${x.data3?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data3?.name_uz
                    : x.til === "ru" ? x.data3?.name_ru
                    : x.data3?.name_en
                  }  
                  <div><span>{t("ALL")}</span> <EastIcon/></div>
                </Link>
                <div className="b_bot">
                  <Card5 data={x.data3?.xabar} til={x.til}/>
                </div>
              </div>
            </div>

            <div className="main">
              <div className="main__left">
              <Link to={`category/${x.data5?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data5?.name_uz
                    : x.til === "ru" ? x.data5?.name_ru
                    : x.data5?.name_en
                  }  
                  <div><span>{t("ALL")}</span> <EastIcon/></div>
                </Link>
                <div className="b_bot">
                  <Card5 data={x.data5?.xabar} til={x.til}/>
                </div>
              </div>
              <div className="main__right">
              <Link to={`category/${x.data4?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data4?.name_uz
                    : x.til === "ru" ? x.data4?.name_ru
                    : x.data4?.name_en
                  }  
                  <div><span>{t("ALL")}</span> <EastIcon/></div>
                </Link>
                <div className="b_bot">
                  <Card5 data={x.data4?.xabar} til={x.til}/>
                </div>
              </div>
            </div>

            <div className="main">
              <div className="main__left b_bot">
                <Link to={`questions`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>{t("REYTING")} <div><span>{t("ALL")}</span> <EastIcon/></div></Link>
                <Reyting til={x.til}/>
              </div>
              <div className="main__right b_bot">
                <Link to={`news`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>{t("F_V")} <div><span>{t("ALL")}</span> <EastIcon/></div></Link>
                <Card6 data={x.songi15.slice(0, 6)} til={x.til}/>
              </div>
            </div>
            <div className="card__box__container b_bot">
              <div className='card__box__content'>
                <Link to={`category/${x.data6?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data6?.name_uz
                    : x.til === "ru" ? x.data6?.name_ru
                    : x.data6?.name_en
                  } 
                </Link>
                <div className='slider__box'>
                  <Slider til={x.til} data={x.data6?.xabar}/>
                </div>
              </div>
              <div className='card__box__content'>
                <Link to={`category/${x.data7?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data7?.name_uz
                    : x.til === "ru" ? x.data7?.name_ru
                    : x.data7?.name_en
                  }   
                </Link>
                <div className='slider__box'>
                  <Slider til={x.til} data={x.data7?.xabar}/>
                </div>
              </div>
              <div className='card__box__content'>
                <Link to={`category/${x.data8?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
                  {
                    x.til === "uz" ? x.data8?.name_uz
                    : x.til === "ru" ? x.data8?.name_ru
                    : x.data8?.name_en
                  }
                </Link>
                <div className='slider__box'>
                  <Slider til={x.til} data={x.data8?.xabar}/>
                </div>
              </div>
            </div>
            <Link to={`category/${x.data9?.id}`} onClick={()=>{scrollTop(); x.handleLoad()}} className='box__title'>
              {
                x.til === "uz" ? x.data9?.name_uz
                : x.til === "ru" ? x.data9?.name_ru
                : x.data9?.name_en
              }
            </Link>
            <Slider2 til={x.til} data={x.data9?.xabar}/>
            {/* <CardBox data={x.xojand} til={til}/> */}
          </div>
        )
      }}
      
      
      

    </V1.Consumer>
   );
}
 
export default Main;