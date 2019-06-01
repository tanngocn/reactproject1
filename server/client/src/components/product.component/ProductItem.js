import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import * as actions from './../../actions/product';
import * as charts from './../../actions/chart';

import { Link } from 'react-router-dom';

class ProductItem extends Component {
  async componentDidMount() {
    await this.props.getProduct();

  }
  getProductDetail= async (id)=>{
    await this.props.getDetailProduct(id);
    await this.props.getKindRaiting();
    await this.props.getReviewList();
  }
  
  showContent=(products)=>{
    let result=null;
    result=  _.map(products, function(product, key){
     return(
    
         <div className="product_item" key={key}>
         <Link to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)}><img src={`../uploads/${product.imgProduct}`} alt="images" className="product_img" /></Link>
         <span className={`status productListComponent ${(product.qualityProduct)>0?"":"off"}  `}>
         {(product.qualityProduct!==0)?"Còn hàng":"Hết hàng"  }</span> {/*Hết hàng */}
         <h3 className="name_product productListComponent">{product.nameProduct}</h3>
         <span className="priceProduct productListComponent"> {product.priceProduct}$</span>
         {/* <div className="listbtn">
           <a href="#/"  className="btnn btn-add" onClick={(product)=>this.addToCart(product._id)}  ><i className="fas fa-cart-plus"></i>
           </a>
           <Link to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)} className="btnn btn-view"><i className="fas fa-eye" /></Link>
         </div> */}
       </div>
     )
   })
   return result;
      
  }
    render() {
        return (
          <Suspense fallback={
            <div className="loadingAnimation">
                                 <div className="blockanimation">
                                 </div>
                             </div>
          }>
              {this.showContent(this.props.products)}
          </Suspense>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    productList: state.productReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProduct: () => {
      dispatch(actions.getProduct())
    },
    getDetailProduct: (id) => {
      dispatch(actions.viewDetailProduct(id))
    },
    getReviewList :()=>{
      dispatch(charts.getReviewList())
    },
    getKindRaiting:()=>{
      dispatch(actions.getKindRaiting())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
