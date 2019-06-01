import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import * as carts from './../../actions/cart'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Carts extends Component {
  constructor(props) {
    super(props);
   this.state={
     cartList:[]
   }
  }
  
  async componentDidMount() {
    let cart= JSON.parse(localStorage.getItem('CART'));
    this.setState({
      cartList:cart
    })
    
  }
    showContent=()=>{
      let cart= JSON.parse(localStorage.getItem('CART'));
      if(cart.length===0){
        return (<tr>
          <td colSpan="6">Chưa có sản phẩm nào trong giỏ hàng
          </td>
        </tr>)
      }else{
        return <CartItem cartList={cart} />
      }
    }
    render() {
      let numInCart= (this.state.cartList===null)?0:this.state.cartList.length
      let cart= JSON.parse(localStorage.getItem('CART'));
        return (
            <div>

            <section className="container mt-2">
            <Link to={'/homeContainer/products'}  className="buymore"><i className="fas fa-cart-plus"> Mua thêm</i></Link>
            <div className="title_page">
              <h1 className="title_product_detail">Giỏ hàng ({numInCart}) </h1>
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
                  {this.showContent()}
              </tbody>
            </table>
          </section>
            <CartTotal  cart={cart}/>  
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cartList: state.cartReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateToCart: (_id,qualitySell) => {
      dispatch(carts.onUpdateToCart(_id,qualitySell))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carts)

