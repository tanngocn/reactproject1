import React, {lazy} from 'react';

const Homepage = lazy (()=>import ('./../components/homePage.component/Homecontainer'));
const About = lazy (()=>import ('../components/about.component/Aboutcontainer'));
const Carts = lazy (()=>import ('./../components/cart.component/Cartcontainer'));
const Products= lazy (()=>import ('./../components/product.component/Productcontainer'));
const AdminContainer=  lazy (()=>import ('./../components/admin.component/Admincontainer'));
const Login= lazy (()=>import ('./../components/Login'));
const Register= lazy (()=>import ('../components/Register'));
const Notfound= lazy (()=>import ('./../components/Notfound'));
const HomeContainer =lazy(()=> import ('./../components/HomeContainer'));
const ProductDetail = lazy(()=> import ('./../components/homePage.component/viewDetailProduct/ProductDetail'))
//admin
// const CreateProduct=lazy(() => import('./../components/admin.component/content/CreateProduct'));
// const ListProduct= lazy(() => import ( './../components/admin.component/content/ListProduct'));
// const ListUser = lazy(()=> import ('./../components/admin.component/content/ListUser'));
// const OrderList = lazy(()=> import('./../components/admin.component/content/OrderList'));
// const  Chart = lazy(()=> import ('./../components/admin.component/content/Chart'));
// const CreateAdmin = lazy(()=> import ('./../components/admin.component/content/CreateAdmin'));


const routes=[
  
    {
        path:'/homeContainer/home',
        exact:false,
        main:({history})=><Homepage history={history} />
    },
    {
        path:'/',
        exact:true,
        main:({history})=><Login history={history}/>

    },
    {
        path:'/register',
        exact:false,
        main:({history})=> <Register history={history}/>
    },
    {
        path:'/homeContainer',
        exact:true,
        main:({history})=><HomeContainer history={history}/>

    },
    {
        path:'/homeContainer/about',
        exact:false,
        main:({history})=><About history={history}/>
    },
    {
        path:'/homeContainer/cart',
        exact:false,
        main:({history})=><Carts history={history}/>
    },
    {
        path:'/homeContainer/products',
        exact:false,
        main:({history})=><Products history={history}/>
    },
    {
        path:'/homeContainer/productDetail/:id',
        exact:false,
        main:({history, match})=><ProductDetail history={history} match={match}/>
    },
    {
        path:'/homeContainer/admin',
        exact:true,
        main:({history})=><AdminContainer history={history}/>
    },
    
    {
        path:'',
        exact:true,
        main:()=><Notfound/>
    }

    // {
    //     path:'/homeContainer/admin/addproduct',
    //     exact:false,
    //     main:({history})=><CreateProduct history={history}/>

    // },
    // {
    //     path:'/homeContainer/admin/listproducts',
    //     exact:false,
    //     main:()=><ListProduct/>
    // },
    // {
    //     path:'/homeContainer/admin/users',
    //     exact:false,
    //     main:()=><ListUser/>
    // },
    // {
    //     path:'/homeContainer/admin/adminCreate',
    //     exact:false,
    //     main:()=><CreateAdmin/>
    // },
    // {
    //     path:'/homeContainer/admin/orders',
    //     exact:false,
    //     main:()=><OrderList/>
    // },
    // {
    //     path:'/homeContainer/admin/chart',
    //     exact:false,
    //     main:()=><Chart/>
    // }
]
export default routes;