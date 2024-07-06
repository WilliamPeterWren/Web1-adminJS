import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

import CategoryDropdown from './CategoryDropdown'
import UserContext from "../../context/userContext";


function Menu() {
  // const [subMenu, setSubmenu] = useState([]);
  const {user} = useContext(UserContext);
  var username = user ? user : "";

  const authEmail = Cookies.get('authEmail');
  
  if(authEmail){
    username = authEmail;
  }
  return (
    <nav className="navbar navbar-main navbar-expand-lg border-bottom">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
          </button>
          
          <nav className="navbar navbar-main navbar-expand pl-0">
            <ul className="navbar-nav flex-wrap">
              

              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>

              <CategoryDropdown />
              
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Beauty</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Motors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Gardening</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Deals</a>
              </li>

              {
                username !== "" ?
                (
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">Log Out</Link>
                  </li>
                )
                :
                (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Log In</Link>
                  </li>
                )
              }
              

            </ul>
          </nav> {/* navbar-main  .// */}
        </div>{" "}
        {/* container .// */}
      </nav>
  )
}

export default Menu
