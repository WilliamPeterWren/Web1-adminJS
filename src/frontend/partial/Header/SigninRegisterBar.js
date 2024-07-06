import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function SigninRegisterBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <nav className="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTop4"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTop4">
              <ul className="navbar-nav mr-auto">
                <li>
                  <span className="nav-link">
                    Hi, <Link to="/login"> Sign in </Link> or <Link to="/register"> Register </Link>
                  </span>
                </li>
                <li>
                  <Link to="/deal" className="nav-link">
                    {" "}
                    Deals{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/sell" className="nav-link">
                    {" "}
                    Sell{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="nav-link">
                    {" "}
                    Help{" "}
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                
                <li>
                  <Link to="/location" className="nav-link">
                    {" "}
                    <img src={require("../../assets/images/icons/flags/US.png")} height={16} alt=""/> 
                    Ship to{" "}
                  </Link>
                </li>

                <li
                    className="nav-item dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                  <Link
                    to="/watchlist"
                    className="nav-link dropdown-toggle"
                    role="button"
                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                  >
                    Watchlist
                  </Link>
                  <ul
                    className={`dropdown-menu small ${isDropdownOpen ? 'show' : ''}`}
                    aria-labelledby="navbarDropdown"
                    >
                    <li>
                      <Link className="dropdown-item" to="#">
                        First item
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Second item
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Third item
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/myshop" className="nav-link">
                    {" "}
                    My shop{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/notification" className="nav-link">
                    {" "}
                    <i className="fa fa-bell" />{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/cart" className="nav-link">
                    {" "}
                    <i className="fa fa-shopping-cart" />{" "}
                  </Link>
                </li>
                
              </ul>{" "}
              
            </div>{" "}
            
          </div>{" "}
          
        </nav>
  )
}

export default SigninRegisterBar
