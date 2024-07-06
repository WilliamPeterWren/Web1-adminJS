import React,{useContext} from 'react';
import Cookies from 'js-cookie';

import UserContext from "../../context/userContext";
import Deal from './Deal'
import New from './New'
import Electronics from './Electronics'
import Request from './Request'
import Items from './Items'
import Services from './Services'
import Region from './Region'
import Subscribe from './Subscribe'
import Article from './Article'
import SliderLogIn from './SliderLogIn'
import SliderLogOut from './SliderLogOut'
import Banner from './Banner'
import DailySale from './DailySale'


function Home() {

  const {user} = useContext(UserContext);
  var username = user ? user : "";

  const authEmail = Cookies.get('authEmail');
  
  if(authEmail){
    username = authEmail;
  }


  return (
    <div>   
      <div className='container'>
      {
        username !== "" ? (
            <div>
              <SliderLogIn />
              <Deal />
              <New />
              <Electronics />
              <Request />
              <Items />
              <Services />
              <Region />
              <Article />
            </div>
          ) : (
            <div>
              <SliderLogOut/>
              <Items />
              <Banner />
              <DailySale />
            </div>
          )
      }
      </div>
      
      <Subscribe/>
  
    </div>
  )
}

export default Home
