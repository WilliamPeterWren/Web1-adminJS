import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { imageUrl } from '../../../api/config';
import {REMOVE} from '../../../redux/action/cartAction';

function CartItem(props) {

    const dispatch = useDispatch();

    const removeItem = (item) => {
        dispatch(REMOVE(item))
        // console.log("item", item);
    }

  return (
    props.item && (
    <tr>                
        <td>
        <figure className="itemside">
            
            <div className="aside">            
                <img src={imageUrl + props.item[0].image.data[0].attributes.url} className="img-sm" alt="" />           
            </div>
            
            <figcaption className="info">
         
            <Link to={`/product-detail/${props.item[0].slug}`} className="title text-dark">{props.item[0].name}</Link>
            
            <p className="text-muted small">Size: XL, Color: blue<br /></p>
         
                <Link to={`/search/products-by-brands/${props.item[0].brand_slug}`} className="text-muted small">Brand: {props.item[0].brand_name}</Link> 
            
            </figcaption>
        </figure>
        </td>
        <td> 
            <p className="form-control">
                {props.item.quantity}	
            </p> 
        </td>
        <td> 
            <div className="price-wrap"> 
            {
                props.item[0].is_on_sale ? 
                (
                    <var className="price text-info">${props.item[0].sale_price * props.item.quantity}</var>
                ):(
                    <var className="price text-primary" >${props.item[0].price * props.item.quantity}</var> 
                )
            }                
                <small className="text-muted"> ${props.item[0].price} /each </small>
            </div> 
        </td>
        <td className="text-right"> 
            <button data-original-title="Save to Wishlist" title="heart" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart" /></button> 

            <button className="btn btn-light" onClick={() => removeItem(props.item)} > Remove</button>
        </td>
    </tr>
    )

  )
}

export default CartItem
