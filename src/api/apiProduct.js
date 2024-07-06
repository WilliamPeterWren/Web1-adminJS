import axiosInstance from "./axios";

const apiProduct = {

  createProduct: (data, header) => {
    return axiosInstance.post(`/products`, data, header)
  },

  deleteProductById: (id, header) => {
    return axiosInstance.delete(`/products/${id}`, header);
  },

  getAll: () => {
    return axiosInstance.get("/products?populate=*");
  },

  getProductPagination: (page, perPage) => {
    return axiosInstance.get(`products?page=${page}&perPage=${perPage}`);
  },

  getOne: (id) => {
    return axiosInstance.get(`/products/${id}`)
  }, 

  getProductById: (id) => {
    return axiosInstance.get(`/products/${id}`);
  },

  getProductByCatId: (catid, page) => {
    return axiosInstance.get(`products/categories/${catid}?page=${page}`);
  },

  getNewestTopSelling: (query) => {
    return axiosInstance.get(`/products/${query}`);
  },

  getMostView: () => {
    return axiosInstance.get("/products");
  },

  getProductBySearch: (name) => {
    return axiosInstance.get(`/products/search/${name}`);
  },
  
  editProduct: (id, product, header) => {
    return axiosInstance.put(`/products/${id}`, product, header);
  },

  
}

export default apiProduct;