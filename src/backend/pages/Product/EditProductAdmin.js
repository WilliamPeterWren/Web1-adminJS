import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import unidecode from 'unidecode';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import apiCategory from '../../../api/apiCategory';
import apiProduct from '../../../api/apiProduct';
import { imageUrl } from '../../../api/config';

import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';
import axiosInstance from '../../../api/axios';
import apiStock from '../../../api/apiStock';



function EditProductAdmin() {
    const id = useParams().id;

    const [categories, setCategories] = useState([]);
    const [stocks, setStocks] = useState();
    
    const [productDetail, setProductDetail] = useState()    
  
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        // setSelectedFiles(Array.from(e.target.files));
    };  
    
    const handleChange = (e) => {
      const { name, value } = e.target;    
        if(name==="category_id"){
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
        // console.log(formData);
    };

    const [dataStock, setDataStock] = useState({
        size: '',
        quantity: 0,
        color: ''
    });

    const handleChangeStock = (e) => {
        const { name, value } = e.target; 
        
        if(name === 'quantity'){
            setDataStock({
                ...formData,
                [name]: parseInt(value)
            });
        }
        else{
            setDataStock({
                ...formData,
                [name]: value
            });

        }
       
    }
  
    
    useEffect(() => {
        apiCategory.getAll().then(res => {
            // console.log(res.data)
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

        apiStock.getOne(id).then(res => {
            console.log(res.data)
            setStocks(res.data)
        });

        apiProduct.getProductById(id).then(res => {
            // console.log(res.data)
            const productData = res.data;
            const form = [{
                id: productData.id,
                name: productData.name,
                photo: JSON.parse(productData.photo),       
                description: productData.description,
                details: productData.details,
                price: productData.price,
                category_id: productData.category.id,
                brand: productData.brand,
            }]
            setProductDetail(form); 
        });


    }, [])

    

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        details:'',
        price: 0,   
        photo:[],    
        category_id: 0, 
        brand:  '',  
    }); 

    const handleSubmit = async(e) =>{
        e.preventDefault();
        // console.log("form data: ", formData); 

        axiosInstance.enableJson();
           
        try {                               

            if(formData.name === ''){
                formData.name = productDetail[0].name;
            }

            if(formData.description === ''){
                formData.description = productDetail[0].description;
            }

            if(formData.details === ''){
                formData.details = productDetail[0].details;
            }

            if(formData.price === 0){
                formData.price = productDetail[0].price;
            }

            if(formData.category_id === 0){
                formData.category_id = productDetail[0].category_id;
            }

            if(formData.brand === ''){
                formData.brand = productDetail[0].brand;
            }
            

            // console.log('form data: ', formData); 

            formData.photo = JSON.stringify(productDetail[0].photo);

            const response = await apiProduct.editProduct(id, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            
            if(response.status === 200){
                toast.info(`Update quantity ${formData.product_name}`, {
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
        catch (error) {
            console.error('Error saving data:', error.message);
        }
        
        if (dataStock.size === ""){
            dataStock.size = stocks.size; 
        }

        if (dataStock.color === ""){
            dataStock.color = stocks.color;
        }

        if (dataStock.quantity === 0){
            dataStock.quantity = parseInt(stocks.quantity);
        }

        apiStock.update(id, dataStock).then(res => {
            console.log(res)
        })

        navigate('/admin/dashboard/product-admin')
          
    }

    const handleBackToProductAdmin = () => {
        navigate('/admin/dashboard/product-admin')
    }

  return (
    <div>
      <h1>Edit Product</h1>
    
      <h5> <button className='btn btn-primary' onClick={handleBackToProductAdmin}>Back to Product Admin</button> </h5>
      {
        productDetail && (
          <form className="add-product-admin-list" onSubmit={handleSubmit}>

        <label htmlFor='product_name'>Product Name</label>
        <input type="text" className="" placeholder={productDetail[0]?.name} name='name'  onChange={handleChange} />
        <br/>

        <label htmlFor='description'>Description</label>
        <input type="text" className="" placeholder={productDetail[0]?.description} name='description' onChange={handleChange} />
        <br/>

        <label htmlFor='details'>Details</label>
        <input type="text" className="" placeholder={productDetail[0]?.details} name='details' onChange={handleChange} />
        <br/>

        <label htmlFor='price'>Price</label>
        <input type="number" className="" placeholder={productDetail[0]?.price} name='price' min='0' onChange={handleChange} />
        <br/>
        
        <label htmlFor='image'>Images</label>
        <input 
            type="file" 
            className="" 
            placeholder="Image" 
            name='image'
            onChange={handleFileChange} 
            multiple     
            accept=".jpg, .jpeg, .png"
            />
        <br/>       

        <label htmlFor='category'>Category</label>        
        <select className="" name='category_id' defaultValue={productDetail[0]?.category_id} onChange={handleChange} title="Select a category" >
        
        {
            categories.map((item, index) => {                
                return (
                    <option 
                        key={index} 
                        value={item.id}
                        // selected={item.name === productDetail[0]?.category_name}
                        > 
                        {capitalizeFirstLetter(item.name)} 
                    </option>
                )
            })
        }
        </select>
        <br/>

        <label htmlFor='size'>Size</label>
        <input type="text" className="" placeholder={stocks?.size} name='size' onChange={handleChangeStock} />
        <br/>

        <label htmlFor='color'>Color</label>
        <input type="text" className="" placeholder={stocks?.color} name='color' onChange={handleChangeStock} />
        <br/>

        <label htmlFor='quantity'>Quantity</label>
        <input type="number" className="" placeholder={stocks?.quantity} name='quantity' min='0' onChange={handleChangeStock} />
        <br/>
      
        <button className='btn btn-info' type='submit'>submit</button>
      </form>
        )
      }
      
      
    </div>
  )
}

export default EditProductAdmin