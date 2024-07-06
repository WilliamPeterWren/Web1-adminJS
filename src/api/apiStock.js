import axiosInstance from "./axios";

const apiStock = {
    getOne: (id) => {
        return axiosInstance.get(`/stocks/${id}`);
    },

    update: (id, data) => {
        return axiosInstance.put(`/stocks/${id}`, data);
    },
}

export default apiStock;