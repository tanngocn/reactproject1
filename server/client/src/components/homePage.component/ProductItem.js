import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/product';
import * as charts from './../../actions/chart';
import * as carts from './../../actions/cart';
import { connect } from 'react-redux';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      products:[]
    }
  }
  
  getProductDetail= async(id)=>{
    await this.props.getDetailProduct(id);
    await this.props.getProductList();
    await this.props.getKindRaiting();
    await this.props.getCountRaitingProduct();
    await this.props.getReviewList();
  }
  addToCart= async (product)=>{
     await this.props.addCart(product._id,1);
     alert('Add Success')
  }


    render() {
      const {product}=this.props
        return (
        <div className="product_item">
            <div className="infoproduct">
              <a href="#/" className="link_detail"><img src={`./../uploads/${product.imgProduct}`} alt="images" className="product_img_home" /></a>
              <span className={`status_home ${(product.qualityProduct)>0?"":"off"}`}> {(product.qualityProduct!==0)?"Còn hàng":"Hết hàng"  }</span> 
              <h3 className="name_product_home"> {product.nameProduct}</h3>
              <span className="price_product_home">{product.priceProduct} $</span>
            </div>
            <div className="homebtn">
              <a href="#/" className="btn_home_product btn-add" onClick={()=>this.addToCart(product)}><i className="fas fa-cart-plus" /> Thêm vào giỏ hàng</a>
              <Link to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)} className="btn_home_product btn-view"><i className="fas fa-eye" /> Xem chi tiết</Link>
            </div>
          </div>
        
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetailProduct: (id) => {
      dispatch(actions.viewDetailProduct(id))
    },
    getProductList:()=>{
      dispatch(actions.getProduct())
    },
    getKindRaiting:()=>{
      dispatch(actions.getKindRaiting())
    },
    getCountRaitingProduct:()=>{
      dispatch(charts.getCountRaiting())
    },
    getReviewList :()=>{
      dispatch(charts.getReviewList())
    },
    addCart:(id, qualitySell)=>{
      dispatch(carts.addToCart(id, qualitySell))
    }
  }
}
export default connect(null, mapDispatchToProps)(ProductItem)
