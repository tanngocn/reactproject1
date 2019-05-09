import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Notfound extends Component {
    render() {
        return (
            <section className="container">
            <Header/>
            <div className="content">
                    <h1><i className="fas fa-sad-cry"></i> 404! Không tìm thấy <br/>
                    trang web này</h1>
            </div>
            <Footer/>
    </section>
        );
    }
}

export default Notfound;