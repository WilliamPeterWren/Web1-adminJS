import { blue, red } from '@mui/material/colors';
import React, {useState, useContext} from 'react';
import { Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'

// import UserContext from '../../context/userContext';
import UserContext from '../../context/userContext';
import apiUser from '../../../api/apiUser';



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const authEmail = Cookies.get('authEmail');
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data ={
      identifier: email, 
      password: password
    };

    try {        
      const response = await apiUser.loginUser(data);
      console.log("response data: ",response.data);

      var username = response.data.user.username;

      setUser(username);  
      console.log("response.data.user: ",response.data.user);
      
      Cookies.set('authId', response.data.user.id, { expires: 7 });
      Cookies.set('authFirstname', response.data.user.first_name, { expires: 7 }); // Expires in 7 days
      Cookies.set('authLastname', response.data.user.last_name, { expires: 7 }); // Expires in 7 days

      Cookies.set('authEmail', email, { expires: 7 }); // Expires in 7 days
      Cookies.set('authPassword', password, { expires: 7 }); // Expires in 7 days

      Cookies.set('authPhone', response.data.user.phone, { expires: 7 }); // Expires in 7 days
      Cookies.set('authAddress', response.data.user.address, { expires: 7 }); // Expires in 7 days
      
      


      navigate('/home');
    } catch (error) {
      alert("Wrong Username or Password")
      console.log(error);      
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
          <input name="email" className="form-control" placeholder="Email" type="email" defaultValue={authEmail} onChange={(e) => setEmail(e.target.value)}/>
        </div> 

        <div className="form-group">
          <input name="password" className="form-control" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="form-group">
          <Link to="/forgot-password" className="float-right">Forgot password?</Link> 
          <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked /> <div className="custom-control-label"> Remember </div> </label>
        </div> {/* form-group form-check .// */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Login</button>
        </div> {/* form-group// */}    
      </form>
    </div> {/* card-body.// */}
  </div> {/* card .// */}
  <p className="text-center mt-4">Don't have account? <Link to="/register">Sign up</Link></p>
  <br /><br />

</section>

  )
}

export default Login
