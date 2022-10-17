import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { V1 } from '../../context/context';
import { Calendar, Views } from '../../assets/icons';
import { Link, useParams } from 'react-router-dom';
import CardSkeleton from '../../components/CardSkeleton';

const Search = (props) => {
  var til = props.til
  const {word} = useParams()
  console.log(word)
  const [load, setLoad] = useState(true);
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const [data, setdata] = useState();

  useEffect(()=>{
    const Search = () =>{
      setLoad(true)
      const data = {
        search: word
      }
      axios.post(`${BaseUrl}api/search`, data).then((res)=>{
        const data = res.data.data
        setTimeout(() => {
          setdata(data)
          setLoad(false)
        }, 900);
        // console.log(data)
      })
    }
    Search()
  },[word])
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
        )
      }}     
    </V1.Consumer>
  )
}

export default Search;