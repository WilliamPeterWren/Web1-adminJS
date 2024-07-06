import Home from '../frontend/pages/Home/Home';
import About from '../frontend/pages/About/About';
import Contact from '../frontend/pages/Contact/Contact';
import NotFound from '../frontend/pages/NotFound';
import Product from '../frontend/pages/Product/ProductList';
import ProductDetail from '../frontend/pages/Product/ProductDetail';
import Register from '../frontend/pages/User/Register';
import Login from '../frontend/pages/User/Login';
import Help from '../frontend/pages/Help/Help';
import Logout from '../frontend/pages/User/Logout';
import Category from '../frontend/pages/Category/Category';
import NewItems from '../frontend/pages/Product/NewItems';
import Supplier from '../frontend/pages/Supplier/Supplier';
import ForgotPassword from '../frontend/pages/User/ForgotPassword';
import ProductByCat from '../frontend/pages/Product/ProductByCat';
import Cart from '../frontend/pages/Cart/Cart';
import ProductByBrand from '../frontend/pages/Product/ProductByBrand';
import Menufactor from '../frontend/pages/Menufacturer/Menufacturer';
import Purchase from '../frontend/pages/Purchase/Purchase';


import SearchProducts from '../frontend/pages/Search/SearchProducts';
import SearchBrands from '../frontend/pages/Search/SearchBrands';




const FrontendRoute = [
    { path: "/", component: Home },
    { path: "/home", component: Home },

    { path: "/about", component: About },
    { path: "*", component: NotFound },
    { path: "/contact", component: Contact },
    { path: "/help", component: Help},
    { path: '/menufacturer/:slug', component: Menufactor},
    { path: '/supplier/:slug', component: Supplier},
    
    { path: "/products", component: Product},   
    { path: "/products/:page", component: Product},
    { path: "/product-detail/:slug",component: ProductDetail},

    { path: "/category/:slug", component: Category},  
    { path: "/category", component: Category},  

    { path: "/register", component: Register},
    { path: "/login",component: Login},
    { path: "/logout", component: Logout},
    
    { path: "/new-items", component: NewItems},
    
    { path: '/forgot-password', component: ForgotPassword},
    { path: 'products-by-cat/:slug', component: ProductByCat},
    { path:'/cart', component: Cart},
    { path: '/products-by-brand/:slug', component: ProductByBrand},
    
    { path: '/make-purchase', component: Purchase},


    { path: '/search/products/:query', component: SearchProducts},
    { path: '/search/products-by-brands/:query', component: SearchBrands},
    
 
    
    
]

export default FrontendRoute;