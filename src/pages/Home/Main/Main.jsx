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

const Main = (props) => {
  var til = props.til
  const { t } = useTranslation()
  return (  
    <V1.Consumer>
      {(x)=>{
        return(
          <div className="container">
            <div className="main">
              <div className="main__left">
                <h1 className='box__title'>{t("LASTNEWS")}</h1>
                <CardList data={x.songi15} til={til}/>
              </div>
              <div className="main__right">
                <h1 className='box__title'>{t("NAV2")}</h1>
                <div className="b_bot">
                  <Card5 data={x.vodiybugun9.slice(0, 5)} til={til}/>
                </div>
                <h1 className='box__title'>{t("NAV4")}</h1>
                <div className="b_bot">
                  <Card5 data={x.sorovnomalar5} til={til}/>
                </div>
                <h1 className='box__title'>{t("MAQOLA")}</h1>
                <div className="b_bot">
                  <Card5 data={x.surushtiruvlar5} til={til}/>
                </div>
              </div>
            </div>

            <div className="main">
              <div className="main__left">
                <h1 className='box__title'>{t("VODIY")}</h1>
                <div className="b_bot">
                  <Card5 data={x.sport5} til={til}/>
                </div>
              </div>
              <div className="main__right">
                <h1 className='box__title'>{t("MINBAR")}</h1>
                <div className="b_bot">
                  <Card5 data={x.minbar5} til={til}/>
                </div>
              </div>
            </div>

            <div className="main">
              <div className="main__left">
                <h1 className='box__title'>{t("REYTING")}</h1>
                <Reyting til={til}/>
              </div>
              <div className="main__right">
                <h1 className='box__title'>{t("F_V")}</h1>
                <Card6 data={x.songi15.slice(0, 6)} til={til}/>
              </div>
            </div>
            {/* <div className="main">
              <div className='main__left'>
                
              </div>
              <div className='main__right b_bot'>
                <Card4 data={x.vodiybugun9.slice(5, 9)} til={til}/>
              </div>
            </div> */}
            {/* <h1 className='box__title'>{t("ANDIJON")}</h1>
            <CardBox data={x.andijon} til={til}/>
            <h1 className='box__title'>{t("NAMANGAN")}</h1>
            <CardBox data={x.namangan} til={til}/>
            <h1 className='box__title'>{t("FARGONA")}</h1>
            <CardBox data={x.fargona} til={til}/> */}
            <h1 className='box__title'>{t("ANDIJON")} - {t("NAMANGAN")} - {t("FARGONA")}</h1>
            <div className="card__box__container">
              <div className='slider__box'><Slider til={til} data={x.andijon}/></div>
              <div className='slider__box'><Slider til={til} data={x.namangan}/></div>
              <div className='slider__box'><Slider til={til} data={x.fargona}/></div>
            </div>
            <h1 className='box__title'>{t("OSH")}</h1>
            <Slider2 til={til} data={x.andijon}/>
            {/* <CardBox data={x.xojand} til={til}/> */}
          </div>
        )
      }}
      
      
      

    </V1.Consumer>
   );
}
 
export default Main;