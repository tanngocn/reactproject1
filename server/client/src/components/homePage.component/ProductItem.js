import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
        <div className="product_item">
            <div className="infoproduct">
              <a href="#/" className="link_detail"><img src="./../images/7.png" alt="images" className="product_img_home" /></a>
              <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
              <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
              <span className="price_product_home">6219000 đ</span>
            </div>
            <div className="homebtn">
              <a href="#/" className="btn_home_product btn-add"><i className="fas fa-cart-plus" /> Thêm vào giỏ hàng</a>
              <a href="#/" className="btn_home_product btn-view"><i className="fas fa-eye" /> Xem chi tiết</a>
            </div>
          </div>
        );
    }
}

export default ProductItem;