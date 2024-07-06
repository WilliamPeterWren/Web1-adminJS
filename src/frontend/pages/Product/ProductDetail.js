import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { imageUrl } from "../../../api/config";
import apiProduct from "../../../api/apiProduct";
import { ADD } from '../../../redux/action/cartAction';

import capitalizeFirstLetter from "../Capitalieze/capitalize";

function ProductDetail() {

  const { slug } = useParams();  
  const [productDetail, setProductDetail] = useState([]);
  const dispatch = useDispatch();
  const [amountItem, setAmountItem] = useState(1);

  useEffect(() => {
      apiProduct.getDetailProductBySlug(slug).then(res => {
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
                      views: product.attributes.views,
                      image: product.attributes.image,
                      brand_name: product.attributes.brand.data.attributes.brand_name,
                      brand_slug: product.attributes.brand.data.attributes.slug,
                      category_name: product.attributes.category.data.attributes.category_name,
                      category_slug: product.attributes.category.data.attributes.slug

                  }
              });
              setProductDetail(productData);
              // console.log("Product data:",productData);               
          }
          catch(err){
              console.log("Product Error:",err.message);
              
          }
      })
  }, [slug])

  const handleIncrement = () => {
    setAmountItem(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setAmountItem(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleAddToCart = (amountItem) => {
    const product = {
      ...productDetail,
      amount: amountItem
    };

    dispatch(ADD(product));
  }

  return (
    <>
    <section className="section-content bg-white padding-y">
  <div className="container">
   
    {
      productDetail.length > 0 && productDetail.map((item, index) => (
        <div className="row" key={index}>
     
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap"> 
                
                <div className="img-big-wrap">
                  <div> 
                    <p className="text-center mx-auto">
                      <img loading="lazy" alt={item.name} src={imageUrl + item.image.data[0].attributes.url}/>
                    </p>
                  </div>
                </div> 
                
                <div className="thumbs-wrap">
                {
                  item.image.data.map((item, index) => (
                    <p className="item-thumb" key={index}>
                      <img alt="" src={imageUrl + item.attributes.url}  />
                    </p>
                    ))
                }
                </div> 
              </article> 
            </div> 
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3"> {capitalizeFirstLetter(item.name)} </h2>
              
              <div className="rating-wrap my-3">
                <ul className="rating-stars">
                  <li style={{width: '80%'}} className="stars-active"> 
                    <i className="fa fa-star" /> <i className="fa fa-star" /> 
                    <i className="fa fa-star" /> <i className="fa fa-star" /> 
                    <i className="fa fa-star" /> 
                  </li>
                  <li>
                    <i className="fa fa-star" /> <i className="fa fa-star" /> 
                    <i className="fa fa-star" /> <i className="fa fa-star" /> 
                    <i className="fa fa-star" /> 
                  </li>
                </ul>
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> 154 orders </small>
              </div> {/* rating-wrap.// */}
              
              {/* PRICE & SALE_PRICE  */}
              <div className="mb-3"> 
                {
                  item.is_on_sale ? 
                  (
                    <p>
                      <var className="price h4 text-danger" style={{ textDecorationLine: 'line-through' }}>${item.price}</var>
                      <var className="price h4 text-success"> ${item.sale_price}</var>
                    </p>
                  )
                  :
                  (
                    <var className="price h4 text-success">USD {item.price} </var>
                  )                  
                }
                 
              </div> 
              
              <p>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat </p>
              <dl className="row">
                <dt className="col-sm-3">Brand</dt>
                <dd className="col-sm-9">
                <Link to={`/search/products-by-brands/${item.brand_name.toLowerCase()}`}>
                {
                  capitalizeFirstLetter(item.brand_name)
                }
                </Link>
                </dd>
                <dt className="col-sm-3">Article number</dt>
                <dd className="col-sm-9">596 065</dd>
                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">2 year</dd>
                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">3-4 days</dd>
                <dt className="col-sm-3">Availabilty</dt>
                <dd className="col-sm-9">in Stock</dd>
              </dl>
              <div className="form-row mt-4">
                
                <div className="form-group flex-grow-0">
                  <div className="input-group mb-3 col-sm-12" style={{maxWidth: '13rem'}}>
                    
                    <div className="input-group-prepend col-4">
                      <button className="btn btn-light" type="button" onClick={handleDecrement}>−</button>
                    </div>

                    <input type="text" className="form-control col-4" value={amountItem} readOnly onChange={(e) => setAmountItem(e.target.value)}/>

                    <div className="input-group-append  col-4">
                      <button className="btn btn-light" type="button" onClick={handleIncrement}>+</button>
                    </div>

                  </div>
                </div> 

                <div className="form-group col-md">
                  <Link to="/cart" className="btn btn-primary mr-4" onClick={() => handleAddToCart(amountItem)}> 
                    <i className="fas fa-shopping-cart" /> <span className="text">Add to cart</span> 
                  </Link>
                  <Link to={`/supplier/${item.slug}`} className="btn btn-light">
                    <i className="fas fa-envelope" /> <span className="text">Contact supplier</span> 
                  </Link>
                </div> 
              </div> 
            </article> 
          </main> 
        </div> 
      ))
    }
    
    
  </div> {/* container .//  */}
</section>

<section className="section-name padding-y bg">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h5 className="title-description">Description</h5>
        <p>
          Lava stone grill, suitable for natural gas, with cast-iron cooking grid, piezo ignition, stainless steel burners, water tank, and thermocouple. Thermostatic adjustable per zone. Comes complete with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. 
        </p>
        <ul className="list-check">
          <li>Material: Stainless steel</li>
          <li>Weight: 82kg</li>
          <li>built-in drip tray</li>
          <li>Open base for pots and pans</li>
          <li>On request available in propane execution</li>
        </ul>
        <h5 className="title-description">Specifications</h5>
        
        <table className="table table-bordered">
          <tbody>
            <tr><th colSpan={2}>Basic specs</th></tr>
            <tr><td>Type of energy</td><td>Lava stone</td></tr>
            <tr><td>Number of zones</td><td>2</td></tr>
            <tr><td>Automatic connection</td><td> <i className="fa fa-check text-success" />Yes</td></tr>
            <tr><th colSpan={2}>Dimensions</th></tr>
            <tr><td>Width</td><td>500mm</td></tr>
            <tr><td>Depth</td><td>400mm</td></tr>
            <tr><td>Height	</td><td>700mm</td></tr>
            <tr><th colSpan={2}>Materials</th></tr>
            <tr><td>Exterior</td><td>Stainless steel</td></tr>
            <tr><td>Interior</td><td>Iron</td></tr>
            <tr><th colSpan={2}>Connections</th></tr>
            <tr><td>Heating Type</td><td>Gas</td></tr>
            <tr><td>Connected load gas</td><td>15 Kw</td></tr>
          </tbody>
        </table>

      </div> {/* col.// */}
      <aside className="col-md-4">
        <div className="box">
          <h5 className="title-description">Files</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h5 className="title-description">Videos</h5>
          <article className="media mb-3">
            <Link to="/"><img alt="" className="img-sm mr-3" src={require("../../assets/images/items/4.jpg")} /></Link>
            <div className="media-body">
              <h6 className="mt-0"><a href="/">How to use this item</a></h6>
              <p className="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
            </div>
          </article>
          <article className="media mb-3">
            <Link to="/"><img alt="" className="img-sm mr-3" src={require("../../assets/images/items/5.jpg")} /></Link>
            <div className="media-body">
              <h6 className="mt-0"><a href="/">New tips and tricks</a></h6>
              <p className="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
            </div>
          </article>
          <article className="media mb-3">
            <Link to="/"><img alt="" className="img-sm mr-3" src={require("../../assets/images/items/6.jpg")} /></Link>
            <div className="media-body">
              <h6 className="mt-0"><a href="/">New tips and tricks</a></h6>
              <p className="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
            </div>
          </article>
        </div> 
      </aside> 
    </div> 
  </div> 
</section>
</>
  )
}

export default ProductDetail