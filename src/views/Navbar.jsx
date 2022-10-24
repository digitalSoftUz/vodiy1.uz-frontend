import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Search } from '../assets/icons';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import { V1 } from '../context/context';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate()
  // const [nav_active, setNav_Active] = useState(0)
  const [burger, setburger] = useState(true);
  const [word, setWord] = useState("");
  // const [searchWord, setsearchWord] = useState("");
  const handleBurger = () =>{
    setburger(!burger)
  }
  const handleBurgerClose = () =>{
    setburger(true)
  }
  
  const handleKey = (e) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        navigate(`/search=${word}`)
      }, 100);
    }
    if (e.key === "NumpadEnter") {
      setTimeout(() => {
        navigate(`/search=${word}`)
      }, 100);
    }
  }
  
  return ( 
    <V1.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <div className="navbar">
              <div className="nav__top">
                <div className={burger ? "nav__links" : "nav__links nav__links__show"}>
                  <Button className='burger__btn burger__close' onClick={handleBurger}>
                    <CloseIcon color='success' fontSize='large'/>
                  </Button>
                  {x.menyu?.map((i, index)=>{
                    return(
                      <NavLink
                        to={`category/${i.id}`} 
                        key={index}
                        className="nav__item"
                        onClick={()=>{handleBurgerClose(); x.handleLoad()}}
                        // onClick={()=>{setNav_Active(i.id)}}
                      ><span>
                        {
                          x.til === "uz" ? i.name_uz
                          : x.til === "ru" ? i.name_ru
                          : i.name_en
                        }
                      </span></NavLink>
                    )
                  })}
                </div>
                <Button className='burger__btn' onClick={handleBurger}>
                  <ListIcon color='success' fontSize='large'/>
                </Button>
                <div className='nav__search'>
                  <input type="search" onKeyDown={handleKey} onChange={(e)=>{setWord(e.target.value); x.handleLoad()}}/>
                  {word === "" 
                    ? <span><Search /></span>
                    : <Link to={`/search=${word}`}><Search /></Link>
                  }
                </div>
              </div>
              {/* <div className="nav__bot">
                {nav2?.map((i, index)=>{
                  return(
                    <button key={index} onClick={()=>{setNav_Active(0)}}>
                      <span>{i.name}</span>
                    </button>
                  )
                })}
              </div> */}
            </div>
            <div onClick={handleBurger} className={burger ? "nav__close" : "nav__close nav__close__show"}></div>
          </React.Fragment>
        )
      }}
    </V1.Consumer>
    
   );
}
 
export default Navbar;