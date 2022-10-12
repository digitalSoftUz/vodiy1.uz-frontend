import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { useParams } from 'react-router-dom';
import { Calendar } from '../../assets/icons';

const SinglePage = (props) => {
  var til = props.til
  var songi15 = props.songi15
  const data1 = songi15.slice(0, 10)
  const data2 = songi15.slice(10, 20)
  const [item, setitem] = useState([]);
  const {id} = useParams()
  // console.log(SingleData)
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  useEffect(()=>{
    axios.get(`${BaseUrl}api/findone/${id}`).then(
      (res)=>{
        const data = res.data.data
        // console.log(data)
        setitem(data)
      }
    )
  },[id])
  return (
    <React.Fragment>
      <div className="container">
        <div className="singlepage">
          <div className='single__news single__left'>
            {data1?.map((item, index)=>{
              return(
                <a href={`${item.id}`} onClick={scrollTop} className="single__item b_bot" key={index}>
                  <span><Calendar/> {item.sana}</span>
                  <p>
                    { 
                      til === "uz" ? item.title_uz
                      : til === "ru" ? item.title_ru
                      : item.title_en
                    } 
                  </p>
                </a>
              )
            })}
          </div>
          <div className='single__center'>
            <div className="center__item">
              <p dangerouslySetInnerHTML={{ __html: 
                  til === "uz" ? item.text_uz
                  : til === "ru" ? item.text_ru
                  : item.text_en
                 }}>
              </p>
            </div>
          </div>
          <div className='single__news single__right'>
            {data2?.map((item, index)=>{
              return(
                <a href={`${item.id}`} className="single__item b_bot" key={index}>
                  <span><Calendar/> {item.sana}</span>
                  <p>
                    { 
                      til === "uz" ? item.title_uz
                      : til === "ru" ? item.title_ru
                      : item.title_en
                    } 
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SinglePage;
