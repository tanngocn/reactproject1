import React, { Component } from 'react';

class OrderList extends Component {
    render() {
        return (
           
            <div className="checkout">
              <div className="title_page">
                <h1 className="title_product_detail">Đơn hàng (số đơn hàng chưa check) </h1>
                <hr className="title_line review" />
              </div>
              <table className="table_style ">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Sản phẩm</th>
                    <th>Trang thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nguyen van a </td>
                    <td>09876534</td>
                    <td style={{maxWidth: '150px', textAlign: 'left'}}> Khối xuân khoa, Thị trấn Nam đàn, Nam đàn, Nghệ an</td>
                    <td>San pham</td>
                    <td><span className="status_check ">Đã xác nhận đơn hàng </span></td>
                    <td>
                      <a href="#/" className="removebtn" title="Xóa sản phẩm"><i className="fas fa-trash-alt" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nguyen van a </td>
                    <td>09876534</td>
                    <td style={{maxWidth: '150px', textAlign: 'left'}}> Khối xuân khoa, Thị trấn Nam đàn, Nam đàn, Nghệ an</td>
                    <td>San pham</td>
                    <td><span className="status_check no ">Chưa xác nhận </span></td>
                    <td>
                      <a href="#/" className="removebtn" title="Hủy đơn hàng"><i className="fas fa-trash-alt" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nguyen van a </td>
                    <td>09876534</td>
                    <td style={{maxWidth: '150px', textAlign: 'left'}}> Khối xuân khoa, Thị trấn Nam đàn, Nam đàn, Nghệ an</td>
                    <td>San pham</td>
                    <td><span className="status_check no ">Chưa xác nhận </span></td>
                    <td>
                      <a href="#/" className="removebtn" title="Hủy đơn hàng"><i className="fas fa-trash-alt" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nguyen van a </td>
                    <td>09876534</td>
                    <td style={{maxWidth: '150px', textAlign: 'left'}}> Khối xuân khoa, Thị trấn Nam đàn, Nam đàn, Nghệ an</td>
                    <td>San pham</td>
                    <td><span className="status_check no ">Chưa xác nhận </span></td>
                    <td>
                      <a href="#/" className="removebtn" title="Hủy đơn hàng"><i className="fas fa-trash-alt" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
         
        );
    }
}

export default OrderList;