import React, {lazy} from 'react';
const CreateProduct=lazy(() => import('./../components/admin.component/content/CreateProduct'));
const ListProduct= lazy(() => import ( './../components/admin.component/content/ListProduct'));
const ListUser = lazy(()=> import ('../components/admin.component/content/userAction/ListUser'));
const OrderList = lazy(()=> import('./../components/admin.component/content/OrderList'));
const  Chart = lazy(()=> import ('./../components/admin.component/content/Chart'));
const CreateAdmin = lazy(()=> import ('./../components/admin.component/content/CreateAdmin'));
const ModelDeleteUser = lazy(()=> import('../components/admin.component/content/userAction/ModelDeleteUser'));
const ModelDelete =lazy(()=>import ('./../components/admin.component/content/ModelDelete'));
const UpdateProduct = lazy(()=> import( './../components/admin.component/content/UpdateProduct'));
const routes=[

    {
        path:'/homeContainer/admin/addproduct',
        exact:true,
        main:({history,match})=><CreateProduct history={history} match={match} />

    },
    {
        path:'/homeContainer/admin/updateProduct/:_id',
        exact:false,
        main:({history, match})=><UpdateProduct history={history} match={match}/>

    },
    {
        path:'/homeContainer/admin/listproducts',
        exact:true,
        main:({match, history})=><ListProduct match={match} history={history} />
    },
    {
        path:'/homeContainer/admin/listproducts/:_id',
        exact:false,
        main:({match, history})=><ModelDelete match={match} history={history}/>
    },
    // USER
    {
        path:'/homeContainer/admin/users',
        exact:true,
        main:({history})=><ListUser history={history}/>
    },
    {
        path:'/homeContainer/admin/users/:_id',
        exact:true,
        main:({history, match})=><ModelDeleteUser history={history} match={match}/>
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