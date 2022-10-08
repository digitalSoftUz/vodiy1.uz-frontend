import React from 'react';
import Main from './Main/Main';
import Header from './Header/Header';
import { V1 } from '../../context/context';

const HomePage = () => {
  // const [data, setData] = useState([]);
  // const getNews = () =>{
  //   axios.get("")
  // } 
  // useEffect(()=>{

  // },[])
  return ( 
    <V1.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <Header til={x.til}/>
            <Main   til={x.til} data={x.data}/>
          </React.Fragment>
        )
      }}
      
    </V1.Consumer>
   );
}
 
export default HomePage;