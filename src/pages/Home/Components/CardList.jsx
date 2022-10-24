import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BaseUrl } from '../../../contans';
import { Calendar, Views } from '../../../assets/icons';

const CardList = (props) => {
  var data = props.data
  var til = props.til
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  const [data1, setData1] = useState([]);
  const getData1 = () => {
    axios.get(`${BaseUrl}api/all?page=1`).then(
      (res) => {
        const data = res.data.data
        setData1(data)
      }
    )
  }
  useEffect(() => {
    getData1()
  }, [])
  return (
    <React.Fragment>
      <div className="card__list b_bot">
        {data?.map((item, index) => {
          return (
            <a href={`news/${item.id}`} onClick={scrollTop} className="card__list__item" key={index}>
              {/* <div className='list__img'>
                <img src={BaseUrl+item.img} alt="" />
              </div> */}
              <div className='list__content'>
                <span><Views />{item.order} <Calendar />{item.sana}</span>
                <h1>
                  {
                    til === "uz" ? item.title_uz
                      : til === "ru" ? item.title_ru
                        : item.title_en
                  }
                </h1>
                {/* <p>
                  {
                    til === "uz" ? item.description_uz
                    : til === "ru" ? item.description_ru
                    : item.description_en
                  }
                </p> */}
              </div>
            </a>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default CardList;