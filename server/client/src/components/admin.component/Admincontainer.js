import React, { Component , lazy, Suspense } from 'react';
//

const Admin =lazy(()=>import('./Admin'));
const  Header= lazy(()=>import('../Header')); 
const Footer= lazy(()=>import('../Footer')) ;




class Admincontainer extends Component {

    render() {
        return (
           
                <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                
                           <Admin/>
                    <Footer/>
                </Suspense>
                
        );
    }
}

export default Admincontainer;