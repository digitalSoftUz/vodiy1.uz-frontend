import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { Calendar } from '../../assets/icons';
import { Link, useParams } from 'react-router-dom';
import CardSkeleton from '../../components/CardSkeleton';
import ListSkeleton from '../../components/ListSkeleton';

const Category = (props) => {
  var til = props.til
  var vodiybugun9 = props.vodiybugun9
  const id = useParams().id
  const [data, setdata] = useState();
  const [load, setLoad] = useState(true);
  // const [first, setfirst] = useState();

  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  useEffect(()=>{
    async function GetNews() {
      setLoad(true)
      try {
        const res = await axios.get(`${BaseUrl}api/menyu/${id}`);
        if (res) {
          setTimeout(() => {
            setdata(res.data.menyus);
            setLoad(false)
          }, 900);
        }
      } catch (err) {
        console.log(err);
        setLoad(false)
      }
    }
    GetNews()
  },[id])
  return (
    <React.Fragment>
      <div className="container">
        <Link to={``} className="category__top">
          <div>
            <img src="{cat1.img}" alt="" />
          </div>
          <div>
            {/* <h1></h1>
            <p></p>
            <span></span> */}
          </div>
        </Link>
        <div className="category__main">
          <div className="category__items">
            {load
              ? <CardSkeleton/> 
              : data?.map((item, index)=>{
                  return(
                    <Link to={`/news/${item.id}`} onClick={scrollTop} className="card__item" key={index}>
                      <div className='card__img'>
                        <img src={BaseUrl+item.img} alt="" />
                      </div>
                      <span><Calendar/>{item.sana}</span>
                      <p>
                        { 
                          til === "uz" ? item.title_uz
                          : til === "ru" ? item.title_ru
                          : item.title_en
                        } 
                      </p>
                    </Link>
                  )
                })
            }
          </div>
          <div className="category__news single__news">
            {load
              ? <ListSkeleton/> 
              : vodiybugun9.map((item, index)=>{
                return(
                  <Link to={`/news/${item.id}`} className="single__item b_bot" key={index}>
                    <span><Calendar/>{item.sana}</span>
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default Category;