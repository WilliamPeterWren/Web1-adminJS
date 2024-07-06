import axiosInstance from "./axios";

const apiUser = {
    // create user
    createUser: (data) =>{
        return axiosInstance.post("/register", data);
    },

    loginUser: (data) =>{
        return axiosInstance.post("/login", data);
    },

    getOne: (id) => {
        return axiosInstance.get(`/users/${id}`);
    },

    getAll: () => {
        return axiosInstance.get("/users");
    },

    getAuth: (header) => {
        return axiosInstance.get("/auth", header);
    },
}

export default apiUser;