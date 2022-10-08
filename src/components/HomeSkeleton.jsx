import React from 'react';

const HomeSkeleton = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className="header__left"></div>
        <div className="header__right"></div>
      </header>
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
            <h2 className='reyt__title'>{t("REYTING_TITLE")}</h2>
            <Reyting til={til}/>
          </div>
          <div className="main__right">
            <h1 className='box__title'>{t("F_V")}</h1>
            <Card6 data={MainData6} til={til}/>
          </div>
        </div>
        <h1 className='box__title'>{t("ANDIJON")} - {t("NAMANGAN")} - {t("FARGONA")}</h1>
        <div className="card__box__container">
          <div className='slider__box'></div>
          <div className='slider__box'></div>
          <div className='slider__box'></div>
        </div>
        <h1 className='box__title'>{t("OSH")}</h1>
        <Slider2 til={til} data={x.andijon}/>
        {/* <CardBox data={x.xojand} til={til}/> */}
      </div>
    </React.Fragment>
  )
}

export default HomeSkeleton;