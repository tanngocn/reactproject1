import React, {lazy} from 'react';
const CreateProduct=lazy(() => import('./../components/admin.component/content/CreateProduct'));
const ListProduct= lazy(() => import ( './../components/admin.component/content/ListProduct'));
const ListUser = lazy(()=> import ('./../components/admin.component/content/ListUser'));
const OrderList = lazy(()=> import('./../components/admin.component/content/OrderList'));
const  Chart = lazy(()=> import ('./../components/admin.component/content/Chart'));
const CreateAdmin = lazy(()=> import ('./../components/admin.component/content/CreateAdmin'));
const routes=[

    {
        path:'/homeContainer/admin/addproduct',
        exact:false,
        main:({history})=><CreateProduct history={history}/>

    },
    {
        path:'/homeContainer/admin/listproducts',
        exact:false,
        main:()=><ListProduct/>
    },
    {
        path:'/homeContainer/admin/users',
        exact:false,
        main:()=><ListUser/>
    },
    {
        path:'/homeContainer/admin/adminCreate',
        exact:false,
        main:()=><CreateAdmin/>
    },
    {
        path:'/homeContainer/admin/orders',
        exact:false,
        main:()=><OrderList/>
    },
    {
        path:'/homeContainer/admin/chart',
        exact:false,
        main:()=><Chart/>
    }
]
export default routes;