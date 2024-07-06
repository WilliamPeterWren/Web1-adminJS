import React,{useContext} from "react";
import Cookies from 'js-cookie';

import SigninRegisterBar from "./Header/SigninRegisterBar";
import SearchBar from "./Header/SearchBar";
import UserContext from "../context/userContext";
import Menu from "./Header/Menu";

function Header() {

  const {user} = useContext(UserContext);
  var username = user ? user : "";
  // console.log("user", user);

  const authFirstname = Cookies.get('authFirstname');
  const authLastname = Cookies.get('authLastname');

  
  if(authFirstname){
    username = authFirstname + " " + authLastname;
  }


  return (
    <header className="section-header">      
      {
        username === "" && (
          <SigninRegisterBar />
        )
      } 
      <SearchBar username={username} />
      <Menu />
    </header>
  );
}

export default Header;
