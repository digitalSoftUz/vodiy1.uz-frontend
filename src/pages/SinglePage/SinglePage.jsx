import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { useParams } from 'react-router-dom';
import { Calendar, Views } from '../../assets/icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from "react-i18next";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import ShareIcon from '@mui/icons-material/Share';
// import MetaTags from 'react-meta-tags';
import { Helmet } from 'react-helmet-async';
// import DocumentMeta from 'react-document-meta';

const SinglePage = (props) => {
  var til = props.til
  const { t } = useTranslation()
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
  const metaTag =  <React.Fragment>
      <title>
        { 
          til === "uz" ? item.title_uz
          : til === "ru" ? item.title_ru
          : item.title_en
        }
      </title>
      <meta 
        name="description" 
        content={ 
          til === "uz" ? item.title_uz
          : til === "ru" ? item.title_ru
          : item.title_en
        }
      />
      <meta name="keywords" content="Yangiliklar,хабарлар,интервью, Dunyo Sport, фото ва видео материаллар"/>
      <meta type="image/jpeg" name="link" href={BaseUrl+item.img} rel="image_src"/>
      <meta property="og:title" content="Келажак Тошкенти қандай бўлади? Энди “снос”лар унутилиб, маҳаллалар, уйлар сақлаб қолинадими?"/>
      <meta 
        property="og:description" 
        content={ 
          til === "uz" ? item.title_uz
          : til === "ru" ? item.title_ru
          : item.title_en
        }
      />
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`https://vodiy1.uz/news/${item.id}`}/>
      <meta property="og:image" content={BaseUrl+item.img}/>
      <meta property="og:site_name" content="Vodiy1.uz"/>
    </React.Fragment>
  
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
    // if (id !== "") {
    //   // console.log(id)
    //   const ele = document.getElementById('head__tag')
    //   var meta = document.createElement("meta")
    //   meta.setAttribute("property", "og:type", "content", "article")
    //   ele.append(meta)
    // }
  },[id])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let title = til === "uz" ? item.title_uz
    : til === "ru" ? item.title_ru
    : item.title_en
  const menu =(
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>
        <FacebookShareButton
          url={`https://vodiy1.uz/news/${item.id}`}
          quote={title}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <TwitterShareButton 
          url={`https://vodiy1.uz/news/${item.id}`}
          title={title}  
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <TelegramShareButton 
          title={title}
          url={`https://vodiy1.uz/news/${item.id}`}
        >
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      </MenuItem>
    </Menu>
  )
  const meta = {
    // title: til === "uz" ? item.title_uz : til === "ru" ? item.title_ru : item.title_en,
    // description: til === "uz" ? item.title_uz : til === "ru" ? item.title_ru : item.title_en,
    // canonical: `https://vodiy1.uz/news/${item.id}`,
    // meta: {
    //   property: {
    //     "og:type": "website",
    //     "og:title": til === "uz" ? item.title_uz : til === "ru" ? item.title_ru : item.title_en,
    //     "og:description": til === "uz" ? item.title_uz : til === "ru" ? item.title_ru : item.title_en,
    //     "og:image:secure_url": BaseUrl+item.img,
    //     "og:image": BaseUrl+item.img,
    //     "og:image:type": "image/jpeg",
    //     "og:image:width": "400",
    //     "og:image:height": "300",
    //     "og:url": `https://vodiy1.uz/news/${item.id}`,
    //     "og:site_name": "Vodiy1.uz",
    //   },
    //   keywords:{
    //     content:"Yangiliklar,хабарлар,интервью, Dunyo Sport, фото ва видео материаллар"
    //   }
    // }
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>
          { 
            til === "uz" ? item.title_uz
            : til === "ru" ? item.title_ru
            : item.title_en
          }
        </title>
        <meta 
          name="description" 
          content={ 
            til === "uz" ? item.title_uz
            : til === "ru" ? item.title_ru
            : item.title_en
          }
        />
        <meta name="keywords" content="Yangiliklar,хабарлар,интервью, Dunyo Sport, фото ва видео материаллар"/>
        <meta type="image/jpeg" name="link" href={BaseUrl+item.img} rel="image_src"/>
        <meta property="og:title" content="Келажак Тошкенти қандай бўлади? Энди “снос”лар унутилиб, маҳаллалар, уйлар сақлаб қолинадими?"/>
        <meta 
          property="og:description" 
          content={ 
            til === "uz" ? item.title_uz
            : til === "ru" ? item.title_ru
            : item.title_en
          }
        />
        <meta property="og:type" content="article"/>
        <meta property="og:url" content={`https://vodiy1.uz/news/${item.id}`}/>
        <meta property="og:site_name" content="Vodiy1.uz"/>
        <meta property="og:image" content={BaseUrl+item.img}/>
        <meta property="og:image:secure_url" content={BaseUrl+item.img} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </Helmet>
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
          {/* <DocumentMeta {...meta}> */}
            <div className="center__item">
              <div className='center__top'>
                <div className='center__info'>
                  <span><Views/>{item.order}</span>
                  <span><Calendar/>{item.sana}</span>
                </div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {t("SHARE")} <ShareIcon fontSize='small'/>
                </Button>
                {menu}
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
            {/* </DocumentMeta> */}
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
