import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

class Carts extends Component {
    render() {
        return (
            <div>

            <section className="container mt-2">
            <a href="#/" className="buymore"><i className="fas fa-cart-plus"> Mua thêm</i></a>
            <div className="title_page">
              <h1 className="title_product_detail">Giỏ hàng () </h1>
              <hr className="title_line review" />
            </div>
            <table className="table_style ">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                    <CartItem/>
                    <CartItem/>
              </tbody>
            </table>
          </section>
            <CartTotal />  
          </div>
        );
    }
}

export default Carts;           