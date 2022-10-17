import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { Calendar, Views } from '../../assets/icons';
import { Link, useParams } from 'react-router-dom';
import CardSkeleton from '../../components/CardSkeleton';
import ListSkeleton from '../../components/ListSkeleton';
import { useTranslation } from 'react-i18next';

const Category = (props) => {
  var til = props.til
  var {t} = useTranslation()
  var vodiybugun9 = props.vodiybugun9
  const id = useParams().id
  const [data, setdata] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(12);
  const [dataLoad, setDataLoad] = useState(false);
  // const [first, setfirst] = useState();
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const LoadMore = () => {
    setLoad(true)
    setTimeout(() => {
      setPage((prevValue) => prevValue + 12)
      setLoad(false)
    }, 500);
  }
  async function GetNews() {
    setDataLoad(true)
    try {
      const res = await axios.get(`${BaseUrl}api/menyu/${id}`);
      if (res) {
        setTimeout(() => {
          setDataLoad(false)
          setdata(res.data.menyus)
        }, 600);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    GetNews()
    if (dataLoad) {
      setPage(12)
    }
  },[id, page])
  return (
    <React.Fragment>
      <div className="container">
        { dataLoad 
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
              {data?.slice(0, page).map((item, index)=>{
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
                            til === "uz" ? item.title_uz
                            : til === "ru" ? item.title_ru
                            : item.title_en
                          } 
                        </p>
                      </Link>
                    )
                  })
              }
              {load ? <CardSkeleton/> 
                : "" 
              }
            </div>
            <div className='more__btn'>
              {page >= data.length 
                ? ""
                : <button onClick={LoadMore}>{t("MORE")}</button>
              }
            </div>
          </div>
          
          <div className="category__news single__news">
            {
            // load ? <ListSkeleton/> 
            //   : 
              vodiybugun9.map((item, index)=>{
                return(
                  <Link to={`/news/${item.id}`} className="single__item b_bot" key={index}>
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
                  </Link>
                )
              })}
          </div>
        </div>
        }
      </div>
    </React.Fragment>
  )
}

export default Category;