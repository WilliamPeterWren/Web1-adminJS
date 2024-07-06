import { blue, red } from '@mui/material/colors';
import React, {useState, useContext, useEffect} from 'react';
import { Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'

import UserContext from '../../../frontend/context/userContext';
import apiUser from '../../../api/apiUser';



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

    // Cookies.remove('adminCookie')
 
    useEffect(()=>{
        if(!user){
          navigate('/admin/login');
        }
        else{
          navigate('/admin/dashboard');
        }
      },[])
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email, 
      password: password
    };

      
    try {        
    // console.log(data)
   
        const response = await apiUser.loginUser(data);

        console.log(response.data.token);

        const getId = response.data.user.id;

        if(getId === 1){
            var username = response.data.user.name;
            setUser(username);      

            Cookies.set('username',response.data.user.name, {expires: 1});
            localStorage.setItem('token', response.data.token)

            navigate('/admin/dashboard');
        }
        else{
            alert("This is for admin only");
            navigate('/admin/login');
        }
        
  

    } catch (error) {
      alert("Wrong Username or Password")
      console.log(error.message);      
    }
  };




  return (
   <section className="section-conten padding-y" style={{minHeight: '84vh'}}>

  <div className="card mx-auto" style={{maxWidth: 380, marginTop: 100}}>
    <div className="card-body">
      <h4 className="card-title mb-4">Sign in</h4>
      <form onSubmit={handleSubmit}>
        
        <a href="https://web.facebook.com/pykenhamster/" className="btn btn-facebook btn-block mb-2" style={{ backgroundColor: blue['900'], color: 'whitesmoke' }}> <i className="fab fa-facebook-f" />&nbsp; Sign in with Facebook</a>
        <a href="https://www.google.com/" className="btn btn-google btn-block mb-4" style={{ backgroundColor: red['900'], color: 'whitesmoke' }}> <i className="fab fa-google" /> &nbsp;  Sign in with Google</a>
        
        <div className="form-group">
          <input name="email" className="form-control" placeholder="Email" type="email"  onChange={(e) => setEmail(e.target.value)}/>
        </div> 

        <div className="form-group">
          <input name="password" className="form-control" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="form-group">
          <Link to="/forgot-password" className="float-right">Forgot password?</Link> 
          <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked /> <div className="custom-control-label"> Remember </div> </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Login</button>
        </div>    
      </form>
    </div> 
  </div> 
  
  <br /><br />

</section>

  )
}

export default Login
