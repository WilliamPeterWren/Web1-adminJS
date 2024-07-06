import axiosInstance from "./axios";

const apiOrderDetail = {

    getOrderDetailByOrderId: (id) => {
      return axiosInstance.get(`/orderdetail/${id}`);
    },

    createOrderDetail: (data) => {
      return axiosInstance.post(`/order-details`, data).then((res) => res.data);
    },

    
}

export default apiOrderDetail;