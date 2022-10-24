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
import { Helmet } from 'react-helmet-async';
import LOGOPNG from './assets/green.svg'
class App extends React.Component {
  state = {
    load: true
  }
  handleLoad = () => {
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
        {/* <Helmet>
          <title>Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ</title>
          <meta name="description" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />

          <meta itemprop="name" content="VODIY1.UZ" />
          <meta itemprop="description" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />
          <meta itemprop="image" content="" />


          <meta property="og:url" content="https://vodiy1.uz" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />
          <meta property="og:description" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />
          <meta property="og:image" content="" />


          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />
          <meta name="twitter:description" content="Vodiy va O'zbekiston yangiliklari, eng tezkor xabarlar, qiziqarli maqolalar - VODIY1.UZ" />
          <meta name="twitter:image" content="" />
        </Helmet> */}
        <V1.Consumer>
          {(x) => {
            return (
              <div className="App">
                {this.state.load ? <Loading /> : ""}
                <div>
                  <UpNav />
                  <Navbar />
                  <Routes>
                    <Route path='/' index element={<HomePage />} />
                    <Route path='*' index element={<h1>404</h1>} />
                    <Route path='news' element={<News />} load={x.load} />
                    <Route path='photos' element={<Photo />} load={x.load} />
                    <Route path='questions' element={<Reyting />} load={x.load} />
                    <Route path='search=:word' element={<Search />} />
                    <Route path='category/:id' element={<Category load={x.load} />} />
                    <Route path='news/:id' element={<SinglePage til={x.til} />} />
                  </Routes>
                </div>
                <Footer menyu={x.menyu} til={x.til} />
              </div>
            )
          }}
        </V1.Consumer>
      </Mode>
    );
  }
}

export default App;
