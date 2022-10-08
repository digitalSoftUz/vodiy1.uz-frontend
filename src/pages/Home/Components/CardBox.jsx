import React from 'react';
import { Link } from 'react-router-dom';
import { BaseUrl } from '../../../contans';

const CardBox = (props) => {
  var data = props.data
  var til = props.til 
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  return ( 
    <React.Fragment>
      <div className="card__box b_bot">
        {data.map((item, index)=>{
          return(
            <Link to={`news/${item.id}`} onClick={scrollTop} className="card__box__item" key={index}>
              <div className="card__img">
                <img src={BaseUrl+item.img} alt="" />
              </div>
              <p>
                { 
                  til === "uz" ? item.title_uz
                  : til === "ru" ? item.title_ru
                  : item.title_en
                }
              </p>
            </Link>
          )
        })}
        
      </div>
    </React.Fragment>
   );
}
 
export default CardBox;