import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

import UserContext from '../../context/userContext';
import SearchForm from './SearchForm';

function SearchBar(props) {

  const getDataCart = useSelector((state) => state.cart.carts);
 
  const {user} = useContext(UserContext);
  var username = user ? user : "";
  const authEmail = Cookies.get('authEmail');
  if(authEmail){
    username = authEmail;  
  }



  return (
    <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <Link to="/home" className="brand-wrap">
                <img
                  alt="logo.png"
                  className="logo"
                  src={require("../../assets/images/logo.png")}
                />
              </Link>{" "}
             
            </div>

            <div className="col-xl-6 col-lg-5 col-md-6">
              <SearchForm />             
            </div>

            {
              username !== "" && (
                <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
                
                <div className="widget-header mr-3">
                  <Link to="/my-profile" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-user" />
                      <span className="notify">3</span>
                    </div>
                    <small className="text"> {props.username} </small>
                  </Link>
                </div>

                <div className="widget-header mr-3">
                  <Link to="/message" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-comment-dots" />
                      <span className="notify">1</span>
                    </div>
                    <small className="text"> Message </small>
                  </Link>
                </div>

                <div className="widget-header mr-3">
                  <Link to="/orders" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-store" />
                    </div>
                    <small className="text"> Orders </small>
                  </Link>
                </div>

                <div className="widget-header">
                  <Link to="/cart" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-shopping-cart" />
                      {
                        getDataCart.length > 0 && (
                          <span className="notify">{getDataCart.length}</span>
                        )
                      }
                    </div>
                    <small className="text"> Cart </small>
                  </Link>
                </div>

              </div>{" "}
              {/* widgets-wrap.// */}
            </div>
              )
            }
            
          
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* container.// */}
      </section>
  )
}

export default SearchBar
