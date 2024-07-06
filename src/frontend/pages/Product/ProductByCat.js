import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


import apiProduct from '../../../api/apiProduct';
import ItemFound from './ItemFound';
import FilterTop from './FilterTop';
import ProductItem from './ProductItem';

function ProductByCat() {

  const {slug} = useParams();
  const [productByCat, setProductByCat] = useState([]);

  useEffect(() => {
    apiProduct.getProductByCatSlug(slug).then(res => {
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
            image: product.attributes.image,
            category_name: product.attributes.category.data.attributes.category_name,
            category_slug: product.attributes.category.data.attributes.slug,

          }
        });
        setProductByCat(productData);
        console.log("Product by cat:",productData);
      }
      catch(err){
          console.log("Product Error:",err.message);
      }

    })}, [slug])

  return (
   <section className="section-content padding-y">
  <div className="container">
    
    <FilterTop />
   
    <ItemFound quantity={productByCat.length}/>

    <div className="row">      
    {
        productByCat.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))
    }
    </div> {/* row end.// */}

    {/* PAGINATION  */}
    <nav className="mb-4" aria-label="Page navigation sample">
      <ul className="pagination">
        <li className="page-item disabled"><a className="page-link" href="/">Previous</a></li>
        <li className="page-item active"><a className="page-link" href="/">1</a></li>
        <li className="page-item"><a className="page-link" href="/">2</a></li>
        <li className="page-item"><a className="page-link" href="/">3</a></li>
        <li className="page-item"><a className="page-link" href="/">4</a></li>
        <li className="page-item"><a className="page-link" href="/">5</a></li>
        <li className="page-item"><a className="page-link" href="/">Next</a></li>
      </ul>
    </nav>

    <div className="box text-center">
      <p>Did you find what you were looking for？</p>
      <a href="/" className="btn btn-light">Yes</a>
      <a href="/" className="btn btn-light">No</a>
    </div>

  </div> {/* container .//  */}
</section>

  )
}

export default ProductByCat