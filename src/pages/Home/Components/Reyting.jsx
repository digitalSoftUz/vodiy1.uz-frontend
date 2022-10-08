import React, { useState } from 'react';
import { Line } from 'rc-progress';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { MainReyting } from '../../../data/Data';
import { Circle } from '../../../assets/icons';

const colors = scaleOrdinal(schemeCategory10).range();

const Reyting = (props) => {
  var til = props.til 
  const [num, setnum] = useState(4);
  return ( 
    <React.Fragment>
      {MainReyting?.map((item, index)=>{
        return(
          <div className="reyting__box" key={index}>
            <p>
              {
                til === "uz" ? item.name
                : til === "ru" ? item.name_ru
                : item.name_uz
              }
            </p>
            <div className='reyting__progress'>
              <div onClick={()=>{setnum(index)}} className="radio">
                <Circle 
                  color={colors[index % 20]} 
                  color2={num === index ? colors[index % 20] : "#fff"}
                  pick={num === index ? 17.5 : 0}
                />
              </div>
              <Line 
                percent={num === index ? item.num+1 : item.num} 
                strokeWidth={2} 
                strokeColor={colors[index % 20]}
              />
              <b>{num === index ? item.num+1 : item.num}%</b>
            </div>
          </div>
        )
      })}
    </React.Fragment>
   );
}
 
export default Reyting;