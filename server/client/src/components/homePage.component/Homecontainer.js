import React, { Component } from 'react';
import Homepage from './Homepage';
import Header from '../Header';
import Footer from '../Footer';

class Homecontainer extends Component {

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
                  <Homepage/>
                <Footer/>
            </div>
        );
    }
}

export default Homecontainer;