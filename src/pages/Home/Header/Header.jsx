import React from 'react';
import { Calendar, Views } from '../../../assets/icons';
import { BaseUrl } from '../../../contans';
import { V1 } from '../../../context/context';
// import header from "../../../assets/Images/Header.png";

const Header = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <V1.Consumer>
      {(x) => {
        return (
          <header className='header'>
            <a href={`news/${x.oxrgi.id}`}
              className="header__left"
              onClick={scrollTop}
              style={{
                "--bg": x.oxrgi.length === 0 ? "" : `url(${BaseUrl + x.oxrgi?.img})`
              }}
            >
              <div>
                <h1>
                  {
                    x.til === "uz" ? x.oxrgi.title_uz
                      : x.til === "ru" ? x.oxrgi.title_ru
                        : x.oxrgi.title_en
                  }
                </h1>
                {/* <p>
                  {
                    x.til === "uz" ? x.oxrgi.description_uz
                    : x.til === "ru" ? x.oxrgi.description_ru
                    : x.oxrgi.title_en
                  }  
                </p> */}
              </div>

            </a>
            <div className="header__right">
              {x.songi5?.map((item, index) => {
                return (
                  <div className='header__item' key={index}>
                    <div className='header__info'>
                      <span><Views />{item.order}</span>
                      <span><Calendar />{item.sana}</span>
                    </div>

                    <a href={`news/${item.id}`}>
                      {
                        x.til === "uz" ? item.title_uz
                          : x.til === "ru" ? item.title_ru
                            : item.title_en
                      }
                    </a>
                  </div>
                )
              })}
            </div>
          </header>
        )
      }}

    </V1.Consumer>
  );
}

export default Header;