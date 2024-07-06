import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import apiUser from '../../../api/apiUser';

function UserAdmin() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    apiUser.getAll().then(res => {
      console.log(res.data)
      setUsers(res.data);
    });
  },[])
  return (
    users && <div>
      <br/>
      <h1 className='ml-4'>User Admin</h1>
      <table className='mt-4 ml-4'>
        <thead>
          <tr>            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
          
          </tr>
        </thead>
        <tbody>
          {users && users.map(user => (
            <tr key={user.id}>
              <td>{user.addresses?.[0]?.firstname}</td>
              <td>{user.addresses?.[0]?.lastname}</td>
              <td>{user.email}</td>
              <td>{user.addresses?.[0]?.telephone}</td>
              <td>{user.addresses?.[0]?.address}</td>
              <td>{user.addresses?.[0]?.city}</td>
              <td>{user.addresses?.[0]?.country}</td>


             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserAdmin
