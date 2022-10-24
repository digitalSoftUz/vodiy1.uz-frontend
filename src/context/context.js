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
      load: false,
      menyu: [],
      oxrgi: [],
      songi5: [],
      songi15: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      data9: [],
      data10: [],
    }
  }
  handleLoad = () => {
    this.setState({
      load: true
    })
    setTimeout(() => {
      this.setState({
        load: false
      })
    }, 700);
  }
  handleRu = () => {
    this.setState({ til: "ru" })
    return i18next.changeLanguage("ru")
  }
  handleUz = () => {
    this.setState({ til: "uz" })
    return i18next.changeLanguage("uz")
  }
  handleEn = () => {
    this.setState({ til: "en" })
    return i18next.changeLanguage("en")
  }
  componentDidMount() {
    axios.get(`${BaseUrl}api/test`).then((res) => {
      const data = res?.data
      console.log(data)
      this.setState({
        // data:data,
        oxrgi: data?.oxrgi[0],
        menyu: data?.menyu,
        songi5: data?.songi5,
        songi15: data?.songi15,
        // 
        data1: data?.xabarlar[0],
        data2: data?.xabarlar[1],
        data3: data?.xabarlar[2],
        data4: data?.xabarlar[3],
        data5: data?.xabarlar[4],
        data6: data?.xabarlar[5],
        data7: data?.xabarlar[6],
        data8: data?.xabarlar[7],
        data9: data?.xabarlar[8],
        data10: data?.xabarlar[9],
      })
    })
  }
  render() {
    // console.log(this.state.songi5)
    return (
      <V1.Provider
        value={{
          ...this.state,
          handleRu: this.handleRu,
          handleUz: this.handleUz,
          handleEn: this.handleEn,
          handleLoad: this.handleLoad,
        }}
      >
        {this.props.children}
      </V1.Provider>
    );
  }
}

export default Mode;