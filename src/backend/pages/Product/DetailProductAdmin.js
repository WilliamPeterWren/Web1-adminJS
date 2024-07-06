import React,{useState, useEffect} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';

// import apiCategory from '../../../api/apiCategory';

import apiProduct from '../../../api/apiProduct';
import { imageUrl } from '../../../api/config';

import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';
import apiStock from '../../../api/apiStock';
// import axiosInstance from '../../../api/axios';


function DetailProductAdmin() {

  const {id} = useParams();

  const [stock, setStock] = useState();

  const [productDetail, setProductDetail] = useState() 

  useEffect(() => {

    apiProduct.getProductById(id).then(res => {
        // console.log(res.data)
        const productData = res.data;
        const form = [{
            id: productData.id,
            name: productData.name,
            image: JSON.parse(productData.photo),       
            description: productData.description,
            details: productData.details,
            price: productData.price,
            category_name: productData.category.name,
            brand_name: productData.brand,
        }]
        setProductDetail(form); 
    });

    apiStock.getOne(id).then(res => {
      console.log(res.data)
      setStock(res.data);
    });
    

  }, [id,])

  

  return (
    productDetail && 
    <div>
      <br/>
      <h1 className='mb-4 ml-4'>Detail Product Admin</h1>
      <table className="product-admin-list">
        <thead>
          <tr>        
            <th>Name</th>            
            <th>Image</th> 
            <th>Description</th>
            <th>Details</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Size</th>
            <th>Quantity</th>
          </tr>
        </thead>
              
        <tbody>
          <tr>        
            <td>{productDetail[0].name}</td>            
            <td>
            {
                  
                  productDetail[0].image.map((i,key) => {
                   
                   
                    return (
                      <img       
                      key={key}                
                      src={imageUrl + i}
                      alt="ProductImage" style={{width: "300px", height: "300px", objectFit: "cover"}} />
                    )
                  })
                }
            </td> 
            <td>{capitalizeFirstLetter(productDetail[0].description)}</td>
            <td>{capitalizeFirstLetter(productDetail[0].details)}</td>
            <td>{productDetail[0].price}</td>
            <td>{capitalizeFirstLetter(productDetail[0].category_name)}</td>
            <td>{capitalizeFirstLetter(productDetail[0].brand_name)}</td>

            <td>{stock?.color}</td>
            <td>{stock?.size}</td>
            <td>{stock?.quantity}</td>

          </tr>
        </tbody>        

      </table>
    </div>
  )
}

export default DetailProductAdmin
