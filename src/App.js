import React from 'react';
import UpNav from "./views/UpNav";
import Footer from './views/Footer';
import Navbar from './views/Navbar';
import News from './pages/News/News';
import Mode from './context/context';
import { V1 } from './context/context';
import Photo from './pages/Photo/Photo';
import Loading from './components/Loading';
import Search from './pages/Search/Search';
import HomePage from './pages/Home/HomePage';
import Reyting from './pages/Reyting/Reyting';
import Category from './pages/Category/Category';
import { Routes, Route } from 'react-router-dom';
import SinglePage from './pages/SinglePage/SinglePage';

class App extends React.Component {
  // fake authentication Promise
  // authenticate(){
  //   return new Promise(resolve => setTimeout(resolve, 1500)) // seconds
  // }
  // componentDidMount(){
  //   this.authenticate().then(() => {
  //     // const ele = document.getElementById('ipl-progress-indicator')
  //     // if(ele){
  //     //   // fade out
  //     //   ele.classList.add('available')
  //     //   setTimeout(() => {
  //     //     ele.classList.add('availablenone')
  //     //     // remove from DOM
  //     //     ele.outerHTML = ''
  //     //   }, 500)
  //     // }
  //     this.setState({
  //       load: false
  //     })
  //   })
  // }
  state={
    load: true
  }
  handleLoad = () =>{
    setTimeout(() => {
      this.setState({
        load: false
      })
    }, 1500);
  }
  componentDidMount() {
    this.handleLoad()
  }
  render() {
    return (
      <Mode>
        <V1.Consumer>
          {(x)=>{
            return(
              <div className="App">
                {this.state.load ? <Loading/> : ""}
                <div>
                  <UpNav/>
                  <Navbar/>
                  <Routes>
                    <Route path='/' index element={<HomePage/>}/>
                    <Route path='news' element={<News/>} load={x.load}/>
                    <Route path='photos' element={<Photo/>} load={x.load}/>
                    <Route path='questions' element={<Reyting/>} load={x.load}/>
                    <Route path='search=:word' element={<Search />}/>
                    <Route path='category/:id' element={<Category load={x.load}/>}/>
                    <Route path='news/:id' element={<SinglePage til={x.til}/>}/>
                  </Routes>
                </div>
                <Footer menyu={x.menyu} til={x.til}/>
              </div>
            )
          }}
        </V1.Consumer>
      </Mode>
      
    );
  }
}

export default App;
