import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { useParams } from 'react-router-dom';
import { Calendar, Views } from '../../assets/icons';

const SinglePage = (props) => {
  var til = props.til
  // var songi15 = props.songi15
  // const data1 = songi15.slice(0, 10)
  // const data2 = songi15.slice(10, 20)
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [item, setitem] = useState([]);
  const {id} = useParams()
  // console.log(SingleData)
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const getData1 = () => {
    axios.get(`${BaseUrl}api/all?page=1`).then(
      (res)=>{
        const data = res.data.data
        setData1(data)
      }
    )
  }
  const getData2 = () => {
    axios.get(`${BaseUrl}api/all?page=2`).then(
      (res)=>{
        const data = res.data.data
        setData2(data)
      }
    )
  }
  useEffect(()=>{
    axios.get(`${BaseUrl}api/findone/${id}`).then(
      (res)=>{
        const data = res.data.data
        // console.log(data)
        setitem(data)
      }
    )
    getData1()
    getData2()
  },[id])
  return (
    <React.Fragment>
      <div className="container">
        <div className="singlepage">
          <div className='single__news single__left'>
            {data1?.map((item, index)=>{
              return(
                <a href={`${item.id}`} onClick={scrollTop} className="single__item b_bot" key={index}>
                  <div className='news__info'>
                    <span><Views/>{item.order}</span>
                    <span><Calendar/>{item.sana}</span>
                  </div>
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
              <div className='center__info'>
                <span><Views/>{item.order}</span>
                <span><Calendar/>{item.sana}</span>
              </div>
              <h1 className='center__title'>
                { 
                  til === "uz" ? item.title_uz
                  : til === "ru" ? item.title_ru
                  : item.title_en
                } 
              </h1>
              <div className="center__img">
                <img src={BaseUrl+item.img} alt="" />
              </div>
            </div>
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
                  <div className='news__info'>
                    <span><Views/>{item.order}</span>
                    <span><Calendar/>{item.sana}</span>
                  </div>
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
