import React, {useState, useEffect} from 'react'
import apiProduct from '../../../api/apiProduct';
import { imageUrl } from '../../../api/config';

import { Link } from 'react-router-dom'

function New() {

  // get newest
  const [products, setProducts] = useState([]);

  useEffect(() => {
      apiProduct.getNewest().then(res => {
          try{
              const productData = res.data.map(product =>{
                  return {
                      id: product.id,
                      name: product.attributes.product_name,
                      catid: product.attributes.cat_id,
                      description: product.attributes.description,   
                      price: product.attributes.price,   
                      is_on_sale: product.attributes.is_on_sale,
                      sale_price: product.attributes.sale_price,
                      slug: product.attributes.slug,               
                      brand_id: product.attributes.brand_id,
                      image: product.attributes.image.data
                  }
              });
              setProducts(productData);
              // console.log("Product:",productData);
          }
          catch(err){
              console.log("Product Error:",err.message);
          }
      })
  }, [])

  const [newIcon, setNewIcon] = useState("");

  useEffect(() => {
      if (products.length > 0 && products[0].image !== null) {          
          const url = products[0].image[0].attributes.url;
          setNewIcon(url);
          // console.log("First Product:", products[0]);
      }
  }, [products]);
    

  return (
    <section className="padding-bottom">

  <header className="section-heading heading-line">
    <h4 className="title-section text-uppercase">New Items</h4>
  </header>

  <div className="card card-home-category">
    <div className="row no-gutters">
      
      <div className="col-md-3">
        <div className="home-category-banner bg-light-orange">
          <h5 className="title">New Items just arrived</h5>
          <p>Phải ghi 1 cái gì đó thật là cháy để người ta biết đây là sản phẩm mới. Còn ghi cái gì thì thật ra chưa biết</p>

          <Link to="/new-items" className="btn btn-outline-primary rounded-pill">Source now</Link>
          {
            products[0] && (
              <img alt="" src={imageUrl + newIcon} className="img-bg" />
            )
          }
          

        </div>
      </div> {/* col.// */}
      
      <div className="col-md-9">
        <ul className="row no-gutters bordered-cols">
          
          {
            products.map((product, index) => (
              <li key ={index} className="col-6 col-lg-3 col-md-4">
                <Link id={`${product.id}`} to={`/product-detail/${product.slug}`} className="item"                 
                > 
                  <div className="card-body">
                    <h6 className="title">{product.name}</h6>
                    {
                      product.image !== null && 
                        <img alt="" className="img-sm float-right" src={imageUrl + product.image[0].attributes.url} />
                      
                    }

                    
                    
                    {/*  console.log("image: ", product.image[0].attributes.url) */}



                    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> {product.description}</p>
                  </div>
                </Link>
              </li>
            ))
          }

        </ul>
      </div> {/* col.// */}
    </div> {/* row.// */}
  </div> {/* card.// */}
</section>

  )
}

export default New
