import React, { Component, Suspense } from 'react';
import * as actions from  './../../actions/product';
import * as charts from './../../actions/chart';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductTopItem extends Component {
  async componentDidMount() {
      await this.props.getProduct();
  }
  getProductDetail= async(id)=>{
    await this.props.getDetailProduct(id);
    await this.props.getKindRaiting();
    await this.props.getReviewList();
  }
  showContent=(products)=>{
    let result=null;
     result=  _.map(products, function(product, key){
      return(
        <div className="item_home" key={key}>
       <Link to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)} className="product_slide">
            <img src={`./../uploads/${product.imgProduct}`} alt="product" />
             <h3>{product.nameProduct}</h3>
             <span>{product.priceProduct}$</span>
        </Link>
        </div>
      )
    })
    return result;
  }
    render() {
        return (
            <Suspense>
            {this.showContent(this.props.productNew)}
            </Suspense>
        
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProduct: () => {
      dispatch(actions.getProductNew())
    },
    getDetailProduct: (id) => {
      dispatch(actions.viewDetailProduct(id))
    },
    getReviewList :()=>{
      dispatch(charts.getReviewList())
    },
    getKindRaiting:()=>{
      dispatch(actions.getKindRaiting())
    },
  }
}
export default connect(null, mapDispatchToProps)(ProductTopItem)
