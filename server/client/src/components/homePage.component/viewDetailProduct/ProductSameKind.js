import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../../actions/product';
import * as charts from './../../../actions/chart';
class ProductSameKind extends Component {
    getProductDetail= async (id)=>{
      await  this.props.getDetailProduct(id);
      await  this.props.getProductList();
      await  this.props.getReviewList();
      }

    showContent=(productSame)=>{
        let  result=null; 
            result= productSame.map((product,key)=>{
                return (
                    <Link  key={key} to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)} className="product_slide">
                    <img src={`./../../uploads/${product.imgProduct}`} alt="product" className="sameimgProduct"/>
                    <h3>{product.nameProduct}</h3>
                    <span>{product.priceProduct}$</span>
                    </Link>
                )
            })
        return result;
    }
    render() {
        return (
            <div className="item">
                   {this.showContent(this.props.listSame)}
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
    getReviewList :()=>{
        dispatch(charts.getReviewList())
      },
    }
  }
  export default connect(null, mapDispatchToProps)(ProductSameKind)
  