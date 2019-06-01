import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import * as carts from './../../actions/cart'


class Cart_Item extends Component {
  constructor(props) {
    super(props);
    this.state={
      cart:[]
    }

  }
  async  componentDidMount() {
    let cart= JSON.parse(localStorage.getItem('CART'));
    this.setState({
      cart:cart
    });
  }
  
  
    showContent=()=>{
      let result=null 
      let {cartList}=this.props
      if(cartList.length>0){
        result= cartList.map((cart, key)=>{
          return (
            <tr key={key}>
            <td>{key+1}</td>
            <td><img src={`../uploads/${cart.payload.imgProduct}`} alt="product_cart" /></td>
            <td className="name_product">{cart.payload.nameProduct}</td>
            <td><input type="text" value={cart.qualitySell} disabled className="form-cart" />
            <a href="#/ " className="white"> <span className="add" onClick={()=>this.onUpdateQuality(cart.payload._id, cart.qualitySell-1)}>-</span> </a>
             <a href="#/" className="white"> <span className=" add sub" onClick={()=>this.onUpdateQuality(cart.payload._id, cart.qualitySell+1)}>+</span> </a>
            </td>
            <td>{cart.qualitySell*cart.payload.priceProduct}$</td>
            <td>
              <a href="#/" className="removebtn" onClick={()=>this.onDelete(cart.payload._id)} title="Xóa sản phẩm"><i className="fas fa-trash-alt" /></a>
            </td>
          </tr>
          )
        })
      }
      return result;
      
    }
    onDelete = (id) => {
      this.props.onDeleteCart(id);
  }
    onUpdateQuality = (id, quantity) => {
      if (quantity > 0) {
          this.props.onUpdateToCart(id, quantity);
      }
  }
    render() {
        return (
           <Suspense
           fallback={    
           <div className="loadingAnimation">
                             <div className="blockanimation">
                             </div>
           </div>}> 
             { this.showContent()}
           </Suspense>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateToCart: (_id,qualitySell) => {
      dispatch(carts.onUpdateToCart(_id,qualitySell))
    },
    onDeleteCart: (_id)=>{
      dispatch(carts.onDeleteToCart(_id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Cart_Item)
