import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import unidecode from 'unidecode';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import apiCategory from '../../../api/apiCategory';

import apiProduct from '../../../api/apiProduct';

import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';
// import axiosInstance from '../../../api/axios';


function AddProduct() {

  
   

    const [categories, setCategories] = useState([]);
    // const [brands, setBrands] = useState([]);
    // const [selectedFiles, setSelectedFiles] = useState([]); 
    // const [products, setProducts] = useState([]);    
  
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        details:'',
        price: 0,   
        photo:'Untitled.png',    
        category_id: 0, 
        brand:  '',  
        size:'',
        quantity:0,
        color:'',
    });    
    

    // const handleFileChange = (e) => {
    //     setSelectedFiles(Array.from(e.target.files));
    // };
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;    
        
    
        if(name === 'category_id'){
            setFormData({
                ...formData,
                [name]: parseInt(value)
            });
        }
        else{
            setFormData({
                ...formData,
                [name]: value
            });
        }
            
        
         
        console.log(formData);

    };
    
    useEffect(() => {

        apiCategory.getAll().then(res => {
            try{
                const categoryData = res.data.map(item =>{
                return {
                    id: item.id,
                    name: item.name,             
                }});
                setCategories(categoryData);                
            }
            catch(err){
                console.log("Category Error:",err.message);
            }    
        })

    }, [])

   

    const handleSubmit = async(e) =>{
        e.preventDefault();

        console.log(formData)
        await apiProduct.createProduct(formData, {
            headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
        })
        .then(response => {
            // console.log(response)
            if(response.status === 200){
                toast.success(`Create ${formData.name} successfully!`, {
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
                navigate('/admin/dashboard/product-admin')
            }
        })
        .catch(err => {
            console.log(err);
            throw err;
        })

        
    }

    const handleBackToProductAdmin = () => {
        navigate('/admin/dashboard/product-admin')
    }

  return (
    <div>
        <br/>
      <h1 className='ml-4'>Add Product</h1>
      <h5> <button className='btn btn-primary ml-4' onClick={handleBackToProductAdmin}>Back to Product Admin</button> </h5>
      <form className="add-product-admin-list ml-4 mt-4" onSubmit={handleSubmit}>

        <table>
            <tr>
                <th><label htmlFor='name'>Product Name</label></th>
                <td><input type="text" className="p-2" placeholder="Product Name" name='name' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='description'>Description</label></th>
                <td><input type="text" className="p-2" placeholder="Description" name='description' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='description'>Details</label></th>
                <td><input type="text" className="p-2" placeholder="Details" name='details' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='brand'>Brand</label></th>
                <td><input type="text" className="p-2" placeholder="Brand" name='brand' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='size'>Size</label></th>
                <td><input type="text" className="p-2" placeholder="Size" name='size' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='color'>Color</label></th>
                <td><input type="text" className="p-2" placeholder="Color" name='color' onChange={handleChange} require="true" /></td>
            </tr>

            <tr>
                <th><label htmlFor='price'>Price</label></th>
                <td> <input type="number" className="p-2" placeholder="Price" name='price' min='0' onChange={handleChange} require="true" /></td>
            </tr> 

            <tr>
                <th><label htmlFor='price'>Quantity</label></th>
                <td> <input type="number" className="p-2" placeholder="Quantity" name='quantity' min='0' onChange={handleChange} require="true" /></td>
            </tr>            

            <tr>
                <th><label htmlFor='photo'>Images</label></th>
                <td><input type="file" placeholder="Image" name='photo' min='0' onChange={handleChange} multiple /></td>
            </tr>

            <tr>
                <th><label htmlFor='category_id'>Category</label></th>
                <td> <select className="p-2" placeholder="category_id" name='category_id' onChange={handleChange} title="Select a category" >
                    <option value="undefined">Select Category</option>

                    {
                        categories.map((item, index) => {                
                            return (
                                <option id={item.id} key={index} value={item.id}> {capitalizeFirstLetter(item.name)} </option>
                            )
                        })
                    }
                    </select></td>
            </tr>           

        </table>
     

      
        <button className={`ml-4 mt-4 btn btn-info`} type='submit' >submit</button>
      </form>
    </div>
  )
}

export default AddProduct
