import React, { Component, createContext } from 'react';
import axios from 'axios';
import i18next from 'i18next';
import { BaseUrl } from '../contans';

export const V1 = createContext();

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      til: i18next.language,
      load: true,
      data:[],
      menyu:[],
      oxrgi:[],
      sport5:[],
      songi5:[],
      xojand:[],
      songi15:[],
      minbar5:[],
      andijon:[],
      fargona:[],
      namangan:[],
      vodiybugun9:[],
      sorovnomalar5:[],
      surushtiruvlar5:[],
    }
  }
  handleRu = () =>{
    this.setState({til:"ru"})
    return i18next.changeLanguage("ru")
  }
  handleUz = () =>{
    this.setState({til:"uz"})
    return  i18next.changeLanguage("uz")
  }
  handleEn = () =>{
    this.setState({til:"en"})
    return  i18next.changeLanguage("en")
  }
  componentDidMount() {
    axios.get(`${BaseUrl}api/test`).then((res)=>{
      const data = res?.data
      // console.log(data)
      this.setState({
        // data:data,
        oxrgi: data?.oxrgi[0],
        menyu: data?.menyu,
        xojand: data?.xojand,
        sport5: data?.sport5,
        songi5: data?.songi5,
        songi15: data?.songi15,
        minbar5: data?.minbar5,
        andijon: data?.andijon,
        fargona: data?.fargona,
        namangan: data?.namangan,
        vodiybugun9: data?.vodiybugun9,
        sorovnomalar5: data?.sorovnomalar5,
        surushtiruvlar5: data?.surushtiruvlar5
      })
    })
  }
  render() { 
    // console.log(this.state.songi5)
    return (
      <V1.Provider
        value={{
          ...this.state,
          handleRu:this.handleRu,
          handleUz:this.handleUz,
          handleEn:this.handleEn,
        }}
      >
        {this.props.children}
      </V1.Provider>
    );
  }
}
 
export default Mode;