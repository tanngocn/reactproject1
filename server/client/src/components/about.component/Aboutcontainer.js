import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from './About';

class Aboutcontainer extends Component {
    componentDidMount() {
        const token=JSON.parse(sessionStorage.getItem('token'));
        console.log(this.props.history);
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
                <About/>
                <Footer/>
            </div>
        );
    }
}

export default Aboutcontainer;