import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { V1 } from '../../context/context';
import { Calendar, Views } from '../../assets/icons';
import { Link } from 'react-router-dom';
import CardSkeleton from '../../components/CardSkeleton';
import Pagination from '@mui/material/Pagination';

const News = (props) => {
  var load1 = props.load
  const [load, setLoad] = useState(false);
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const [pshow, setPshow] = useState(false);
  const [data, setdata] = useState();
  const [page, setPage] = React.useState(1);
  const [all, setAll] = useState();
  const handleChange = (event, value) => {
    setPage(value);
    setTimeout(() => {
      scrollTop()
    }, 400);
  };
  const GetNews = () =>{
    setLoad(true)
    axios.get(`${BaseUrl}api/all?page=${page}`).then((res)=>{
      const data = res.data
      // console.log(data)
      setAll(data?.meta?.last_page)
      if (data?.meta?.last_page > 1) {
        setPshow(true)
      } else{
        setPshow(false)
      }
      setTimeout(() => {
        setdata(data?.data)
        setLoad(false)
      }, 600);
    })
  }
  useEffect(()=>{
    GetNews()
    if (load1) {
      setPage(1)
    }
  },[page])
  return (
    <V1.Consumer>
      {(x)=>{
        return(
          <div className="search container">
            <div className="search__items">
            {load
              ? <CardSkeleton/> 
              : data?.map((item, index)=>{
                return(
                  <Link to={`/news/${item.id}`} onClick={scrollTop} className="card__item" key={index}>
                    <div className='card__img'>
                      <img src={BaseUrl+item.img} alt="" />
                    </div>
                    <div className='news__info'>
                      <span><Views/>{item.order}</span>
                      <span><Calendar/>{item.sana}</span>
                    </div>
                    <p>
                      { 
                        x.til === "uz" ? item.title_uz
                        : x.til === "ru" ? item.title_ru
                        : item.title_en
                      } 
                    </p>
                  </Link>
                )
              })}
            </div>
            <div className='more__btn'>
              {pshow === false
                ? ""
                : <Pagination 
                    count={all}
                    variant="outlined" 
                    shape="rounded"
                    page={page} 
                    onChange={handleChange}
                  />
              }
            </div>
          </div>
        )
      }}     
    </V1.Consumer>
  )
}

export default News;