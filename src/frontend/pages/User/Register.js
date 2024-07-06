import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { indigo } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import apiUser from '../../../api/apiUser';
function Register() {

  const [nation, setNation] = useState('vietnam');  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address:'',
    phone: '',
    password: '',
    repeat_password:'re',
  });
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    apiUser.getAll().then(res => {
      const form = res.data.map(item => {
        return {           
          username: item.username,        
          email: item.email,
          phone: item.phone, 
        }
      })
      setUser(form);
  })})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const handleNationChange = (e) => {
    setNation(e.target.value);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

   if(formData.password === formData.repeat_password){

      var check = true;
      
      user.map(item => {
        if(item.username === formData.username){
          toast.warning(`Already has this user name!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                top: "-50%",
                transform: "translateY(50%)",
                marginRight: "2%",
                width: "fit-content",
            },
          });       
          check = false;
        }
        if(item.email === formData.email){
          toast.warning(`${formData.email} has register to our!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                top: "-50%",
                transform: "translateY(50%)",
                marginRight: "2%",
                width: "fit-content",
            },
          });
          check = false;
        }
        if(item.phone === formData.phone){
          toast.warning(`This ${formData.phone} has been used`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                top: "-50%",
                transform: "translateY(50%)",
                marginRight: "2%",
                width: "fit-content",
            },
          });
          check = false;
        }
      })

      if(formData.password.length < 8){
        check = false;
        toast.warning(`Password is weak! At least 8 character`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
              top: "-50%",
              transform: "translateY(50%)",
              marginRight: "2%",
              width: "fit-content",
          },
        });
      }

      if(check){
        formData.address += ", " + nation;
        console.log("form data: ",formData);
  
        try {  
          axios
            .post('http://localhost:1337/api/auth/local/register', {
              first_name: formData.first_name,
              last_name: formData.last_name,    
              username: formData.username,    
              email: formData.email,
              address: formData.address,
              phone: formData.phone,
              password: formData.password,
            })
            .then(response => {
              toast.success(`Welcome ${formData.username}!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    top: "-50%",
                    transform: "translateY(50%)",
                    marginRight: "2%",
                    width: "fit-content",
                },
              });
  
              navigate('/login');            
            })
            .catch(error => {         
             
              toast.error(`Something is wrong with this Account`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    top: "-50%",
                    transform: "translateY(50%)",
                    marginRight: "2%",
                    width: "fit-content",
                },
              });
            });
        } 
        catch (error) {
          // console.log("Error nè: ",error);   
          toast.error(`It's our fault! Not your!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                top: "-50%",
                transform: "translateY(50%)",
                marginRight: "2%",
                width: "fit-content",
            },
        });     
        }
      }

      
    }
    else{
      alert('Passwords do not match');
      toast.error(`Password do not match`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
            top: "-50%",
            transform: "translateY(50%)",
            marginRight: "2%",
            width: "fit-content",
        },
    });
    }
    
  };

  return (
  <section className="section-content padding-y">

  <div className="card mx-auto" style={{maxWidth: 520, marginTop: 40, backgroundColor: indigo['100']}}>
    <article className="card-body">
      <header className="mb-4"><h4 className="card-title">Sign up</h4></header>
      <form onSubmit={handleSubmit} method='post'>
        
        {/* FIRST NAME + LAST NAME */}
        <div className="form-row">
          
          <div className="col form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First Name" name="first_name" onChange={handleChange} required autoFocus />
          </div> 
          
          <div className="col form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last Name" name="last_name" onChange={handleChange} required />
          </div> 
        </div> 

        {/* USERNAME  */}
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username" name="username" onChange={handleChange} required />
          <small className="form-text text-muted">Create your username</small>
        </div> 

        {/* EMAIL  */}
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} required />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div> 

        {/* Phone  */}
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} required />
          <small className="form-text text-muted">We don't share customer information</small>
        </div>
        
        {/* GENDER  */}
        <div className="form-group">
          <label className="custom-control custom-radio custom-control-inline">
            <input className="custom-control-input" defaultChecked type="radio" name="gender" defaultValue="option1" />
            <span className="custom-control-label"> Male </span>
          </label>
          <label className="custom-control custom-radio custom-control-inline">
            <input className="custom-control-input" type="radio" name="gender" defaultValue="option2" />
            <span className="custom-control-label"> Female </span>
          </label>
        </div> 

        {/* LOCATION  */}
        <div className="form-row">
          
          <div className="form-group col-md-6">
            <label>City</label>
            <input name="address" type="text" className="form-control" placeholder='City'
              onChange={handleChange} required
            />
          </div> 
          
          <div className="form-group col-md-6">
            <label>Country</label>
            <select id="inputState" className="form-control"
              value={nation}
              onChange={handleNationChange}
            >          
              <option value="vietnam">VietNam</option>
              <option value="russia">Russia</option>
              <option value="united state">United States</option>
              <option value="india">India</option>
              <option value="france">France</option>
            </select>
          </div> 
        </div> 
        
        {/* CREATE PASSWORD  */}
        <div className="form-row">
          
          <div className="form-group col-md-6">
            <label>Create password</label>
            <input className="form-control" type="password" name="password" onChange={handleChange} />
          </div> 
          
          <div className="form-group col-md-6">
            <label>Repeat password</label>
            <input className="form-control" type="password" name="repeat_password" onChange={handleChange} />
          </div> {/* form-group end.// */} 

        </div>

        {/* REGISTER  */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Register</button>
        </div>      
        
        <div className="form-group"> 
          <label className="custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked /> <div className="custom-control-label"> I am agree with <Link to="/term-and-conditions">terms and contitions</Link></div> </label>
        </div>   

      </form>
    </article>
  </div> 
  <p className="text-center mt-4">Have an account? <Link to="/login">Log In</Link></p>
  <br /><br />

</section>

  )
}

export default Register
