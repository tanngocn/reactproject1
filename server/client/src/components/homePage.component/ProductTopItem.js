import React, { Component } from 'react';

class ProductTopItem extends Component {
    render() {
        return (
            <div className="item">
            <a href="#/" className="product_slide">
              <img src="./../images/5.png" alt="product" />
              <h3>product_name</h3>
              <span>product_price</span>
            </a>
          </div>
        );
    }
}

export default ProductTopItem;