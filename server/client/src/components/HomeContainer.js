import React, { Component, lazy } from 'react';

const Header=lazy(()=>import('./Header')) ;
const Footer=lazy(()=>import('./Footer'));
const Homepage= lazy(()=>import( './homePage.component/Homepage'));



class HomeContainer extends Component {
// Life cycle
componentDidMount() {
    const token=JSON.parse(sessionStorage.getItem('token'));

    if(token!== null){
        alert(`Xin chào ${token.username}`);
        return;
    }else{
        this.props.history.push('/');
    }
}

    render() {
        
        return (
           <div>
               <Header/>
                <Homepage/>
                <Footer/>
            </div>
       
        );
    }
}

export default HomeContainer;