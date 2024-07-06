import React from 'react'

import {Link} from 'react-router-dom';
import {imageUrl} from '../../../api/config';

function ProductItemDeal(props) {
  return (
    <div className="col-md col-6">

        <figure className="card-product-grid card-sm">

            <Link to={`/product-detail/${props.product.slug}`} className="img-wrap"> 
            {
                <img loading="lazy" src={imageUrl + props.product.image.data[0].attributes.url} alt={props.product.name} key={props.index}/>
            } 
            </Link>

            <div className="text-wrap p-3">
                <Link to={`/product-detail/${props.product.slug}`} className="title">{props.product.name}</Link>
                <span className="badge badge-danger"> {` -${((props.product.price - props.product.sale_price)/props.product.price*100).toFixed(0)}%`} </span>
            </div>

        </figure>
    </div>
  )
}

export default ProductItemDeal
