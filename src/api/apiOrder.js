import axiosInstance from "./axios";

const apiOrder = {
    getAll: () => {
        return axiosInstance.get("/orders").then((res) => res.data);
    },    

    getOrderById: (id) => {
      return axiosInstance.get(`/orders/${id}`).then((res) => res.data);
    },

    createOrder: (data) => {
      return axiosInstance.post(`/orders`, data).then((res) => res.data);
    }, 

    updateOrder: (id, data) => {
      return axiosInstance.put(`/orders/${id}`, data).then((res) => res.data);
    },

    getOrderAll: () => {
      return axiosInstance.get("/orders").then((res) => res.data);
    }

}

export default apiOrder;