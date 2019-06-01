import React, { Component } from 'react';
import Header from '../Header';
import Footer from './../Footer';
import Products from './Products';

class Productcontainer extends Component {
async componentDidMount() {
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
                    <Products/>
                <Footer/>
            </div>
        );
    }
}

export default Productcontainer;