import Dashboard from "../backend/pages/Dashboard/Dashboard";

import CategoryAdmin from "../backend/pages/Category/CategoryAdmin";
import AddCategory from "../backend/pages/Category/AddCategory";
import EditCategory from "../backend/pages/Category/EditCategory";

import ProductAdmin from "../backend/pages/Product/ProductAdmin";
import AddProduct from "../backend/pages/Product/AddProduct";
import EditProductAdmin from "../backend/pages/Product/EditProductAdmin";
import DetailProductAdmin from "../backend/pages/Product/DetailProductAdmin";

import UserAdmin from "../backend/pages/User/UserAdmin";
import DetailUserAdmin from "../backend/pages/User/DetailUserAdmin";

import OrderAdmin from "../backend/pages/Order/OrderAdmin";
import DetailOrderAdmin from "../backend/pages/Order/DetailOrderAdmin";



import Login from "../backend/pages/Login/Login";
import LogoutAdmin from "../backend/pages/Login/LogoutAdmin";

const BackendRoute = [
    { path: '/', component: Dashboard},
    { path: '/admin', component: Dashboard},
    { path: '/admin/dashboard', component: Dashboard},

    { path: '/admin/login', component: Login},
    { path: '/admin/logout', component: LogoutAdmin},    
    
    { path: '/admin/dashboard/category-admin', component: CategoryAdmin},
    { path: '/admin/dashboard/category-admin/:page', component: CategoryAdmin},
    { path: '/admin/dashboard/category-admin/add-category', component: AddCategory},
    { path: '/admin/dashboard/category-admin/edit-category/:id', component: EditCategory},
    
    { path: '/admin/dashboard/product-admin/:page', component: ProductAdmin},
    { path: '/admin/dashboard/product-admin', component: ProductAdmin},
    { path: '/admin/dashboard/product-admin/add-product', component: AddProduct},
    { path: '/admin/dashboard/product-admin/edit-product/:id', component: EditProductAdmin},
    { path: '/admin/dashboard/product-admin/detail-product/:id', component: DetailProductAdmin},
  
    { path: '/admin/dashboard/user-admin', component: UserAdmin},
    { path: '/admin/dashboard/user-admin/detail-user/:id', component: DetailUserAdmin},

    { path: '/admin/dashboard/order-admin/:page', component: OrderAdmin},
    { path: '/admin/dashboard/order-admin', component: OrderAdmin},
    { path: '/admin/dashboard/order-admin/detail-order/:id', component: DetailOrderAdmin},

   
   
]

export default BackendRoute;