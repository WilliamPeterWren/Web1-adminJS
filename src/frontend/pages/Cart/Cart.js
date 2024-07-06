import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';



import { TOTAL, CLEAR } from '../../../redux/action/cartAction';
import CartItem from './CartItem';

function Cart() {

  const id = Cookies.get('authId');
  console.log(id);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!id){
      navigate('/login');
    }
  },[])

  var totalSalePrice = 0;
  const getDataCart = useSelector((state) => state.cart.carts);

  const dispatch = useDispatch();  
  dispatch(TOTAL());
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const clearCart = () => {
    dispatch(CLEAR());
  }

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width={120}>Quantity</th>
                    <th scope="col" width={120}>Price</th>
                    <th scope="col" className="text-right" width={200}> </th>
                  </tr>
                </thead>
                <tbody>
                  {/* FIRST ITEM  */}
                  {
                    getDataCart.length > 0 && getDataCart.map((item, index) => {
                      
                      if(item){
                        totalSalePrice += item[0].is_on_sale ? item[0].sale_price*item.quantity : item[0].price*item.quantity;                  
                      }
                   
                      return (
                        <CartItem item={item} key={index} />
                      );
                    })
                  }
                </tbody>
              </table>

              <div className="card-body border-top">
                  {
                    getDataCart.length > 0 && (
                      <Link to="/make-purchase" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right" /> </Link>
                    )
                  }
                
              </div>

              <div >
              <Link to="/products" className="btn btn-light"> <i className="fa fa-chevron-left" /> Continue shopping </Link>
              
              {
                getDataCart.length > 0 && (
                  <button className="clear-all-cart btn btn-dark float-md-right mr-4" onClick={() => clearCart()}> Clear All Cart <i className="fa fa-chevron-right" /> </button>
               
                )
              }

              </div>
              
            </div> 

            <div className="alert alert-success mt-3">
              <p className="icontext"><i className="icon text-success fa fa-truck" /> Free Delivery within 1-2 weeks</p>
            </div>

          </main> 

          <aside className="col-md-3">
            
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="apply" placeholder="Coupon code" />
                      <span className="input-group-append"> 
                        <button className="btn btn-primary">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div> 
            </div>  

            {/* TOTAL PRICE */}
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">${totalAmount}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right">${totalAmount - totalSalePrice}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right h5"><strong>${totalSalePrice}</strong></dd>
                </dl>
                <hr />
                <p className="text-center mb-3">
                  <img src={require("../../assets/images/misc/payments.png")} height={26} alt="" />
                </p>
              </div> 
            </div> 
          </aside> 

        </div>
      </div> 
    </section>

  )
}

export default Cart