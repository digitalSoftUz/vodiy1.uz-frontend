import React from 'react';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../../../contans';

const Card4 = (props) => {
  var data = props.data
  var til = props.til
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <React.Fragment>
      <div className="card__4">
        {data?.map((item, index) => {
          return (
            <a href={`news/${item.id}`} onClick={scrollTop} className="card__item" key={index}>
              <div className='card__img'>
                <img src={BaseUrl + item.img} alt="" />
              </div>
              <div className='card__title'>
                <p>
                  {
                    til === "uz" ? item.title_uz
                      : til === "ru" ? item.title_ru
                        : item.title_en
                  }
                </p>
                <span>
                  {
                    til === "uz" ? item.name
                      : til === "ru" ? item.name_ru
                        : item.name_uz
                  }
                </span>
              </div>

            </a>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Card4;