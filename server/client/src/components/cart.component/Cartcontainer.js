import React, { Component } from 'react';
import Header from './../Header';
import Footer from '../Footer';
import Carts from './Carts';

class Cartcontainer extends Component {
    componentDidMount() {
        const token=JSON.parse(sessionStorage.getItem('token'));
        if(token!== null){
            return;
        }else{
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Carts/>
                <Footer/>
            </div>
        );
    }
}

export default Cartcontainer;