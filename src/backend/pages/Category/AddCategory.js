import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import unidecode from 'unidecode';


import apiCategory from '../../../api/apiCategory';
import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';


function AddCategory() {
  

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        apiCategory.getAll().then(res => {
          try{
            const categoryData = res.data.map(item =>{
              return {
                id: item.id,
                name: item.name,
              }
            });
            setCategories(categoryData);
            // console.log("Category:",categoryData);
          }
          catch(err){
              console.log("Category Error:",err.message);
          }
    
        })}, [])

    const [formData, setFormData] = useState({
        name:''       
    });
    
    const handleChange = (e) => {
       setFormData(e.target.value)
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        var check = false;        
        categories.forEach((cate) => {
            if(cate.name === formData.name){
              check = !check
            }                             
        })

        if(!check){
          const data = {
            name: formData
          }
          // console.log(localStorage.getItem('token'))
          try {
            apiCategory.createCategory(
                data,{
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
                }
            )
            .then(response => {
              console.log('response:',response);
            
              toast.success(`Add ${formData.name} to Database`, {
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
              navigate('/admin/dashboard/category-admin')
            })
            .catch(err => {
              console.log(err)
              console.log(data)
              throw err;
            })

            
          } 
          catch (error) {
              console.error('Error saving data:', error);
          }
        }    
        else{
          toast.error(`Category ${formData.name} already exist!`, {
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

  return (
    <div>
      <h1>Add New Category</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='category_name'>Category Name:</label>
        <input type="text" name="category_name" placeholder="Category Name" value={formData.category_name} onChange={handleChange} />

        <br/>      
       
        
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddCategory
