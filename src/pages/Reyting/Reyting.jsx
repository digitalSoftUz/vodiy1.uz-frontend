import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'rc-progress';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useTranslation } from 'react-i18next';
import { BaseUrl } from '../../contans';
import Pagination from '@mui/material/Pagination';
import { V1 } from '../../context/context';
import Tooltip from '@mui/material/Tooltip';
import ReytingSkeleton from '../../components/ReytingSkeleton';

const colors = scaleOrdinal(schemeCategory10).range();

const Reyting = () => {
  const { t } = useTranslation()
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const [all, setAll] = useState();
  const scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  const [pshow, setPshow] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
    setTimeout(() => {
      scrollTop()
    }, 400);
  };
  const getData = () =>{
    setLoad(true)
    axios.get(`${BaseUrl}api/allquestions`).then((res)=>{
      var data = res.data
      // console.log(data)
      setAll(data?.meta?.last_page)
      if (data?.meta?.last_page > 1) {
        setPshow(true)
      } else{
        setPshow(false)
      }
      setTimeout(() => {
        setData(data?.data)
        setLoad(false)
      }, 600);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <V1.Consumer>
      {(x)=>{
        return(
          <div className="container">
            <h1 className='box__title'>{t("REYTINGS")}</h1>
            <div className="reytings">
              {load
              ? <ReytingSkeleton/> 
              : data?.map((item,index)=>{
                  // console.log(item.variant)
                  let all_count = 0
                  for (let dt of item.variant){
                    all_count = all_count + Number(dt.gols)
                  }
                  return(
                    <div className="reytings__items b_bot" key={index}>
                      <h1 className='reytings__title'>
                        { 
                          x.til === "uz" ? item.savol_uz
                          : x.til === "ru" ? item.savol_ru
                          : item.savol_en
                        }
                      </h1>
                      {item.variant.map((v, index)=>{
                        return(
                          <div className="results" key={index}>
                            <p>
                              {
                                x.til === "uz" ? v.name_uz
                                : x.til === "ru" ? v.name_ru
                                : v.name_en
                              }
                            </p>
                            <Tooltip title={`${v.gols + " " + t("OVOZ")}`} placement="top-end">
                              <div className='reyting__box2'>
                                <Line 
                                  percent={all_count === 0 ? 0 : (100 / all_count)*v.gols} 
                                  // percent={num === index ? item.num+1 : item.num} 
                                  strokeWidth={3} 
                                  strokeColor={colors[index % 20]}
                                />
                                  <b>{all_count === 0 ? 0 : (100 / all_count)*v.gols}%</b>
                              </div>
                            </Tooltip>
                          </div>
                          )
                      })}
                    </div>
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
        )
      }}
    </V1.Consumer>
  )
}

export default Reyting;