import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { imageUrl } from '../../../api/config';


import apiOrderDetail from '../../../api/apiOrderDetail';
import apiProduct from '../../../api/apiProduct'
import apiOrder from '../../../api/apiOrder';
import apiUser from '../../../api/apiUser';



function DetailOrderAdmin() {

  const {id} = useParams();

  const [orderDetail,setOrderDetail] = useState([]);
  const [order,setOrder] = useState();
  const [users,setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const [status, setStatus] = useState();

  var totalPrice = 0;

  useEffect(() => {

    apiOrderDetail.getOrderDetailByOrderId(id)
      .then(res => { 
        console.log(res.data);
        setOrderDetail(res.data)

        const promises = res.data.map(item => 
          apiProduct.getOne(item.stock_id)
            .then(resp => resp.data)
        );

        Promise.all(promises)
          .then(productDetails => {
            console.log(productDetails);
            setProducts([...orderDetail, ...productDetails]);
          });
      });

    
    apiOrder.getOrderById(id)
    .then(res => {
      // console.log(res)
      setOrder(res)
    })

  },[id])

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const form = {
        user_id: parseInt(order.user_id),
        status: status
      }

      await apiOrder.updateOrder(id, form)
      .then(res => {
        console.log(res)

      })

      
      toast.success(`Update status successfully!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
            top: "-50%",
            transform: "translateY(50%)",
            marginRight: "2%",
            width: "fit-content",
        },
    });
    } catch (error) {
      toast.warning(`Update status failed!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
            top: "-50%",
            transform: "translateY(50%)",
            marginRight: "2%",
            width: "fit-content",
        },
    });
      console.error('Error saving data:', error);
    }
  }

  return (
    <div>
      <br/>
      <h1 className='ml-4'>Detail Order Admin</h1>
      
      <div>

        
        <div className='ml-4' style={{float: 'left', marginRight: '10rem'}}>
          <form onSubmit={handleSubmit}>
            <h5>Order ID: {id}</h5>
            <h5>Customer Name: 
            {
              users.map(user => {
                if(user.id === parseInt(order.user_id)){
                  return `${user.first_name} ${user.last_name}`
                }
              })
            }
            </h5>
            
            <div>
            {
                order &&
                (
                  <select 
                  name="status" 
                  onChange={e => setStatus(e.target.value)}
                  defaultValue={order.status}
                  
                  >
                    <option value="pending" >Pending</option>
                    <option value="delivering">Delivering</option>
                    <option value="completed">Completed</option>
                  </select>
                ) 
                  
            }
            </div>
            
            

            <br/>
            <br/>
            <button className={`btn ${status === undefined ? '' : 'btn-info'} `} type="submit" disabled={status === undefined}>Update Order</button>
          </form>       

        </div>

        <div style={{float: 'left'}}>
          <table>
            <thead>
              <tr>                
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>              
              </tr>
            </thead>
            <tbody>
                {
                  products && products.map((i, key) => {

                    let total = 0;
                    return <tr key={key}>
                      <td> 
                      {
                        <img 
                        style={{ maxWidth: '150px'}}
                        src={require(`../../assets/images/${JSON.parse(i.photo)[0]}`)} 
                        alt={i.name} 
                        />
                      } 
                      </td>
                      <td> 
                      {
                        i.name
                      } 
                      </td>
                      <td> 
                      {
                        orderDetail.map(item => {
                          if (item.stock_id === i.id){
                            total = item.quantity * i.price
                            totalPrice += total
                            return item.quantity
                          }
                        })
                      } 
                      </td>
                      <td> {i.price} </td>
                      <td> {total} </td>
                    </tr>
                  })
                }
                
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} style={{fontWeight: 'bold'}} >Total</td>
                <td style={{fontWeight: 'bold'}}>{totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default DetailOrderAdmin
