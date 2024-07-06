import React, {useState, useEffect} from 'react';
import {Link, useParams } from 'react-router-dom';

import apiProduct from '../../../api/apiProduct';

import ItemFound from './ItemFound';
import FilterTop from './FilterTop';
import ProductItem from './ProductItem';

function ProductList() {
  
  const [products, setProducts] = useState([]);

  const [pages, setPages] = useState(1);

    var page = parseInt(useParams().page) 



    if(isNaN(page)){
      page = 1;
    }

    const limit = 8;

  useEffect(() => {
      apiProduct.getProductPagination(page, limit).then(res => {
        try {
          const numberOfPages = Math.ceil(res.meta.pagination.total/res.meta.pagination.pageSize);
          setPages(numberOfPages);

          // console.log(res.data);

          const productData = res.data.map(product => {
            return {
              id: product.id,
              name: product.attributes.product_name,
              cat_id: product.attributes.category.data.id,
              description: product.attributes.description,   
              price: product.attributes.price,   
              is_on_sale: product.attributes.is_on_sale === true ? "1" : "0",
              sale_price: product.attributes.sale_price,
              slug: product.attributes.slug,               
              brand_id: product.attributes.brand.data.id,
              image: product.attributes.image,
              category_name: product.attributes.category.data.attributes.category_name,
              category_slug: product.attributes.category.data.attributes.slug,
              brand_name: product.attributes.brand.data.attributes.brand_name,
              publishedAt: product.attributes.publishedAt,
              views: product.attributes.views
            }
          });
          setProducts(productData);        
          console.log("Product:",productData);
        }
        catch(err){
            console.log("Product Error:",err.message);
        }

      })   
  }, [page])

  return (
    <section className="section-content padding-y">
      <div className="container">
        
        <FilterTop />      
        <ItemFound />

        <div className="row">      
        {
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))
        }
        </div>

      
        <nav className="mb-4" aria-label="Page navigation sample">
        {
          pages > 1 &&
          <ul className="pagination">

            <li className={`page-item ${page === 1 ? 'disabled': ''}`}>
              <Link className="page-link" to={`/products/${page-1}`}>
                Previous
              </Link>
            </li>

              {
                Array.from({length: pages}, (v, k) => k + 1).map((item,index) => (                     

                  <li key={index} className={`page-item ${item === page ? 'active' : ''}`}>
                    <Link className="page-link" to={`/products/${item}`}>
                      {item}
                    </Link>
                  </li>
                ))
              }

              <li className={`page-item ${page === pages ? 'disabled': ''}`}>
                <Link className="page-link" to={`/products/${page+1}`}>
                  Next
                </Link>
              </li>

          </ul>
        } 
        </nav>

        <div className="box text-center">
          <p>Did you find what you were looking for？</p>
          <p className="btn btn-light">Yes</p>
          <p className="btn btn-light">No</p>
        </div>

      </div>
    </section>

  )
}

export default ProductList