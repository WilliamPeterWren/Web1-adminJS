import axiosInstance from "./axios";

const apiCategory = {

  getAll: () => {
    return axiosInstance.get("/categories");
  },  

  getOne: (id) => {
    return axiosInstance.get(`/categories/${id}`);
  },

  getCategoryPagination: (page) => {
    return axiosInstance.get(`categories?page=${page}`);
  },

  createCategory: (data, header) => {
    return axiosInstance.post("/categories", data, header);
  },

  getCategoryById: (id) => {
    return axiosInstance.get(`/categories/${id}`);
  },

  editCategory: (id, category, header) => {
    return axiosInstance.put(`/categories/${id}`, category, header);
  },

  deleteCategoryById: (id, header) => {
    return axiosInstance.delete(`/categories/${id}`, header);
  },
}

export default apiCategory;