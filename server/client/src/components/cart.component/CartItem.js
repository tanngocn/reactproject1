import React, { Component } from 'react';

class Cart_Item extends Component {
    render() {
        return (
            <tr>
            <td>1</td>
            <td><img src="../images/5.png" alt="product_cart" /></td>
            <td className="name_product">Huewei P30 Lite</td>
            <td><input type="text" defaultValue={1} className="form-cart" />
              <span className="add">-</span>
              <span className=" add sub">+</span>
            </td>
            <td>1000$</td>
            <td>
              <a href="#/" className="removebtn" title="Xóa sản phẩm"><i className="fas fa-trash-alt" /></a>
            </td>
          </tr>
        );
    }
}

export default Cart_Item;