import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { Circle } from '../../../assets/icons';
import axios from 'axios';
import { BaseUrl } from "../../../contans"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import { V1 } from '../../../context/context';

const colors = scaleOrdinal(schemeCategory10).range();

const Reyting = (props) => {
  var til = props.til 
  const [num, setNum] = useState(window.localStorage.getItem("ovoz"));
  // const num = )
  // console.log(num)
  const [savolId, setSavolId] = useState();
  const [savol, setSavol] = useState();
  const [javob, setJavob] = useState();
  const [myalert, setmyalert] = useState(false);
  const [alertText, setalertText] = useState("");
  const [status, setstatus] = useState("error");
  const [AllCount, setAllCount] = useState(0)
  const handleClose = () =>{
    setmyalert(false)
  }
  const REYTING_TITLE1 = til === "uz" ? "Ovozingiz qabul qilindi": "Овозингиз қабул қилинди"
  const REYTING_TITLE2 = til === "uz" ? "Siz ovoz berib bo'lgansiz": "Сиз овоз бериб болгансиз"
  const handleOvoz = (p) =>{
    const data = {
      id: savolId,
      hudud: p
    }
    axios.post(`${BaseUrl}api/ovoz`, data)
      .then((res)=>{
        // console.log(res)
        if (res.data === "ok") {
          localStorage.setItem("ovoz", p)
          setNum(p)
          setalertText(REYTING_TITLE1)
          setstatus("success")
        } else{
          setalertText(REYTING_TITLE2)
          setstatus("error")
        }
        setmyalert(true)
      })
  }
  useEffect(()=>{
    axios.get(`${BaseUrl}api/savol`).then((res)=>{
      var data = res.data
      // console.log(data.savol.variant)
      setSavol(data.savol)
      setSavolId(data.savol.id)
      setJavob(data.savol.variant)
      // console.log(data)
      let all_count = 0
      for (let dt of data.savol.variant){
        all_count = all_count + Number(dt.gols)
      }
      setAllCount(all_count)
    })
    // handleOvoz()
  },[num])
  return ( 
    <V1.Consumer>
      {(x)=>{
        var OVOZ = x.til === "uz"? "Ovoz" : "Овоз"
        return(
          <React.Fragment>
            <h2 className='reyt__title'>
              {savol?.savol}
              {
                til === "uz" ? savol?.savol_uz
                : til === "ru" ? savol?.savol_ru
                : savol?.savol_ru
              }  
            </h2>
            <Snackbar
              open={myalert}
              onClose={handleClose}
              autoHideDuration={2000}
            >
              <Alert severity={status}>{alertText}</Alert>
            </Snackbar>
            
            {javob?.map((item, index)=>{
              return(
                <div className="reyting__box" key={index}>
                  <p>
                    {
                      til === "uz" ? item.name_uz
                      : til === "ru" ? item.name_ru
                      : item.name_ru
                    }
                  </p>
                  <div className='reyting__progress'>
                    <div onClick={()=>{handleOvoz(item.id)}} className="radio">
                      <Circle 
                        color={colors[index % 20]} 
                        color2={num == item.id ? colors[index % 20] : "#fff"}
                        pick={num == item.id ? 17.5 : 0}
                      />
                    </div>
                    <Line 
                      percent={AllCount === 0 ? 0 : (100 / AllCount)*item.gols} 
                      // percent={num === index ? item.num+1 : item.num} 
                      strokeWidth={2} 
                      strokeColor={colors[index % 20]}
                    />
                    <Tooltip title={`${item.gols + " " + OVOZ}`} placement="top-end">
                      <b>{AllCount === 0 ? 0 : ((100 / AllCount)*item.gols).toFixed(2)}%</b>
                    </Tooltip>
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        )
      }}
      
    </V1.Consumer>
   );
}
 
export default Reyting;