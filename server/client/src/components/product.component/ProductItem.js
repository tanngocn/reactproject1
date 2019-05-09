import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
        <div className="product_item">
            <a href="#/"><img src="../images/5.png" alt="images" className="product_img" /></a>
            <span className="status">Còn hàng</span> {/*Hết hàng */}
            <h3 className="name_product">Iphone xs 256gb</h3>
            <span className="price">Price_product</span>
            <div className="listbtn">
              <a href="#/" className="btnn btn-add"><i className="fas fa-cart-plus" /></a>
              <a href="#/" className="btnn btn-view"><i className="fas fa-eye" /></a>
            </div>
          </div>
        );
    }
}

export default ProductItem;