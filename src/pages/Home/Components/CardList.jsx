import React from 'react';
import { Link } from "react-router-dom";
// import { BaseUrl } from '../../../contans';
import { Calendar, Views } from '../../../assets/icons';

const CardList = (props) => {
  var data = props.data
  var til = props.til 
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  return ( 
    <React.Fragment>
      <div className="card__list b_bot">
        {data?.map((item, index)=>{
          return(
            <Link to={`news/${item.id}`} onClick={scrollTop} className="card__list__item" key={index}>
              {/* <div className='list__img'>
                <img src={BaseUrl+item.img} alt="" />
              </div> */}
              <div className='list__content'>
                <span><Views/>{item.order} <Calendar/>{item.sana}</span>
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
            </Link>
          )
        })}
      </div>
    </React.Fragment>
   );
}
 
export default CardList;