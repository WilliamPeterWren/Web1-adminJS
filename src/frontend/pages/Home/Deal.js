import React,{useState, useEffect} from 'react'
import { indigo } from '@mui/material/colors';

import apiProduct from '../../../api/apiProduct'
import ProductItemDeal from '../Product/ProductItemDeal';

function Deal() {

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set the target end date and time
  const endDate = new Date('2024-04-24T00:00:00');

  // Calculate and update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  // get promotion
  const [products, setProducts] = useState([]);

    useEffect(() => {
        apiProduct.getProdmotion().then(res => {
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
                        image: product.attributes.image
                    }
                });
                setProducts(productData);
                console.log("Product:",productData);
            }
            catch(err){
                console.log("Product Error:",err.message);
            }
        })
    }, [])

  return (
    <section className="padding-bottom">
      <div className="card card-deal">
        <div className="row no-gutters">
        
          <div className="col-md-4 col-6" style={{backgroundColor: indigo[100]}}>
            <div className="col-heading content-body">
              <header className="section-heading">
                <h3 className="section-title">Deals and offers</h3>
                <p>Hygiene equipments</p>
              </header>
              <div className="timer">
                <div><span className="num">{countdown.days}</span><small>Days</small></div>
                <div><span className="num">{countdown.hours}</span><small>Hours</small></div>
                <div><span className="num">{countdown.minutes}</span><small>Min</small></div>
                <div><span className="num">{countdown.seconds}</span><small>Sec</small></div>
              </div>
            </div>
          </div>
        
        <div className="col-md-8 col-6">
          <div className="row no-gutters items-wrap">
            {
              products.map((product, index) => (
                <ProductItemDeal key={index} product={product} />
              ))
            }
            
  
           
  
            
          </div> {/* row no-gutters items-wrap */}
        </div> {/* col-md col-6 */}
      </div> {/* row no-gutters */}
    </div> {/* card card-deal */}
  </section>
  )
}

export default Deal
