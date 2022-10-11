import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Photo } from '../../../assets/icons';
import { BaseUrl } from '../../../contans';

const Card6 = (props) => {
  var data = props.data
  var til = props.til 
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  return ( 
    <React.Fragment>
      <div className="card__6">
        {data?.map((item, index)=>{
          return(
            <Link
              to={`news/${item.id}`} 
              className="card__item"
              onClick={scrollTop}
              style={{
                background: `url(${BaseUrl+item.img})`,
                backgroundPosition:"center",
                backgroundSize:"cover"
              }}
              key={index}
            >
              {item.type === "video" 
                ? <Play/>
                : <Photo/>
              }
              <span>
                { 
                  til === "uz" ? item.title_uz
                  : til === "ru" ? item.title_ru
                  : item.title_en
                }  
              </span>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
   );
}
 
export default Card6;