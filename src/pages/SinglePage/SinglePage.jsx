import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../contans';
import { useParams } from 'react-router-dom';
import { Calendar, Views } from '../../assets/icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import ShareIcon from '@mui/icons-material/Share';
import { V1 } from '../../context/context';

const SinglePage = (props) => {
  var til = props.til
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [item, setitem] = useState([]);
  const { id } = useParams()
  // console.log(SingleData)
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  const getData1 = () => {
    axios.get(`${BaseUrl}api/all?page=1`).then(
      (res) => {
        const data = res.data.data
        setData1(data)
      }
    )
  }
  const getData2 = () => {
    axios.get(`${BaseUrl}api/all?page=2`).then(
      (res) => {
        const data = res.data.data
        setData2(data)
      }
    )
  }

  useEffect(() => {
    axios.get(`${BaseUrl}api/findone/${id}`).then(
      (res) => {
        const data = res.data.data
        // console.log(data)
        setitem(data)
      }
    )
    getData1()
    getData2()
  }, [id])

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
      : item.title_ru
  const menu = (
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

  return (
    <V1.Consumer>
      {(x)=>{
        var SHARE = x.til === "uz"? "Ulashish" : "Улашиш"
        return(
          <div className="container">
            <div className="singlepage">
              <div className='single__news single__left'>
                {data1?.map((item, index) => {
                  return (
                    <a href={`${item.id}`} onClick={scrollTop} className="single__item b_bot" key={index}>
                      <div className='news__info'>
                        <span><Views />{item.order}</span>
                        <span><Calendar />{item.sana}</span>
                      </div>
                      <p>
                        {
                          til === "uz" ? item.title_uz
                            : til === "ru" ? item.title_ru
                              : item.title_ru
                        }
                      </p>
                    </a>
                  )
                })}
              </div>
              <div className='single__center'>
                <div className="center__item">
                  <div className='center__top'>
                    <div className='center__info'>
                      <span><Views />{item.order}</span>
                      <span><Calendar />{item.sana}</span>
                    </div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      {SHARE} <ShareIcon fontSize='small' />
                    </Button>
                    {menu}
                  </div>
                  <h1 className='center__title'>
                    {
                      til === "uz" ? item.title_uz
                        : til === "ru" ? item.title_ru
                          : item.title_ru
                    }
                  </h1>
                  <div className="center__img">
                    <img src={BaseUrl + item.img} alt="" />
                  </div>
                </div>
                <div className="center__item">
                  <p dangerouslySetInnerHTML={{
                    __html:
                      til === "uz" ? item.text_uz
                        : til === "ru" ? item.text_ru
                          : item.text_ru
                  }}>
                  </p>

                </div>
              </div>
              <div className='single__news single__right'>
                {data2?.map((item, index) => {
                  return (
                    <a href={`${item.id}`} className="single__item b_bot" key={index}>
                      <div className='news__info'>
                        <span><Views />{item.order}</span>
                        <span><Calendar />{item.sana}</span>
                      </div>
                      <p>
                        {
                          til === "uz" ? item.title_uz
                            : til === "ru" ? item.title_ru
                              : item.title_ru
                        }
                      </p>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )
      }}
    </V1.Consumer>
  )
}

export default SinglePage;
