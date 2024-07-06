import React from 'react'
import { Link } from 'react-router-dom'

import apiProduct from '../../../api/apiProduct'

import { imageUrl } from '../../../api/config'
import capitalizeFirstLetter from '../Capitalieze/capitalize'

function calculateDaysDifference(date) {
  // Chuyển đổi chuỗi ngày thành đối tượng Date
  const d1 = new Date(date);
  const currentDate = new Date();

  // Tính toán số milisecond giữa hai ngày
  const timeDifference = Math.abs(currentDate - d1);

  // Chuyển đổi số milisecond thành số ngày (1 ngày = 24 giờ * 60 phút * 60 giây * 1000 milisecond)
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

function ProductItem(props) {

  const formData = {
    product_name: props.product.name,
    description: props.product.description,
    price: props.product.price,    
    is_on_sale: props.product.is_on_sale,
    sale_price: props.product.sale_price,
    slug: props.product.slug,    
    views: props.product.views + 1
  }

  const handleClick = async(e) => {
    console.log("Click");

    console.log('form data', formData);        
                    
    const responseProduct = await apiProduct.editProduct(props.product.id, {data: formData});

    console.log('response product', responseProduct)
  }

  return (
    props.product && <div className="col-md-3">
        <figure className="card card-product-grid">
          <div className="img-wrap"> 
            <span className="badge badge-danger">
            {
              calculateDaysDifference(props.product.publishedAt) < 7 ? 'New' : ''
            } 
            </span>
            
            <Link to={`/product-detail/${props.product.slug}`} onClick={handleClick}>
            {
              props.product.image?.data &&
                <img loading="lazy" src={imageUrl + props.product.image.data[0].attributes.url} alt={props.product.name} key={props.index}/>
            } 
            </Link>
          </div> {/* img-wrap.// */}
          <figcaption className="info-wrap">
            <Link to={`/product-detail/${props.product.slug}`} className="title mb-2">{capitalizeFirstLetter(props.product.name)}</Link>
            <div className="price-wrap">
              <span className="price">{props.product.price}</span> 
              <small className="text-muted">/per item</small>
            </div> {/* price-wrap.// */}
           
            <Link to={`/${props.product.category_slug}`} className="text-muted ">{props.product.category_name}</Link>
            <hr />
            <p className="mb-3">
              <span className="tag"> <i className="fa fa-check" /> Verified</span> 
              <span className="tag"> 2 Years </span> 
              <span className="tag"> 23 reviews </span>
              <span className="tag"> Japan </span>
            </p>
            <label className="custom-control mb-3 custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label">Add to compare
              </div>
            </label>
            <Link to="/supplier" className="btn btn-outline-primary"> <i className="fa fa-envelope" /> Contact supplier </Link>	
          </figcaption>
        </figure>
    </div>
  )
}

export default ProductItem
