import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { Calendar, Views } from '../../assets/icons';
import { Link, useParams } from 'react-router-dom';
import CardSkeleton from '../../components/CardSkeleton';
import ListSkeleton from '../../components/ListSkeleton';
import Pagination from '@mui/material/Pagination';
import { V1 } from '../../context/context';

const Category = (props) => {
  var load1 = props.load
  
  // var num = 1
  // localStorage.setItem("pages", JSON.stringify(num))
  // var pages = localStorage.getItem("pages")
  // console.log(pages)

  const id = useParams().id
  const [data, setdata] = useState([]);
  const [data1, setData1] = useState([]);
  const [load, setLoad] = useState(false);
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const [pshow, setPshow] = useState(false);
  const [page, setPage] = React.useState(1);
  const [all, setAll] = useState();
  const handleChange = (event, value) => {
    setPage(value);
    setTimeout(() => {
      scrollTop()
    }, 400);
  };
  const getData1 = () => {
    axios.get(`${BaseUrl}api/all?page=1`).then(
      (res)=>{
        const data = res.data.data
        setData1(data)
      }
    )
  }
  // console.log(all)
  async function GetNews() {
    setLoad(true)
    try {
      const res = await axios.get(`${BaseUrl}api/menyu/${id}?page=${page}`);
      if (res) {
        var data = res?.data
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
        }, 500);
        
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    GetNews()
    getData1()
    if (load1) {
      setPage(1)
    }
  },[id, page])
  return (
    <V1.Consumer>
      {(x)=>{
        return(
          <div className="container">
          { x.load 
            ? 
            <div className="category__main">
              <div className="category__items">
                <CardSkeleton/>
              </div>
              <div className="category__news single__news">
                <ListSkeleton/>
              </div>
            </div>
            :
            <div className="category__main">
            <div>
              <div className="category__items">
                {
                load 
                ? <CardSkeleton/> 
                : 
                data?.map((item, index)=>{
                  return(
                    <a href={`/news/${item.id}`} onClick={scrollTop} className="card__item" key={index}>
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
                    </a>
                  )
                })
                }
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
            
            <div className="category__news single__news">
              {
                data1?.map((item, index)=>{
                  return(
                    <a href={`/news/${item.id}`} className="single__item b_bot" key={index}>
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
                    </a>
                  )
                })}
            </div>
          </div>
          }
        </div>
        )
      }}
      
    </V1.Consumer>
  )
}

export default Category;