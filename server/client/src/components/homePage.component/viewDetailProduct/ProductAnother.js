import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from  'lodash';
import * as actions  from './../../../actions/product';
import * as charts from './../../../actions/chart';
import { connect } from 'react-redux';

class ProductAnother extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
    
    componentDidMount() {
        this.setState({
            list:this.props.listAnother
        })
    }
    
    getProductDetail= async (id)=>{
        await  this.props.getDetailProduct(id);
        await  this.props.getProductList();
        await  this.props.getReviewList();
      }

    showContent=(productAnother)=>{
        let  result=null; 
        let item=null
         if(productAnother.length>0){
            result=_.slice(productAnother,0,2) ;
            item= result.map((product, key)=>{
                return (
                    <aside   key={key} className="commercial">
                    <Link to={`/homeContainer/productDetail/${product._id}`} onClick={()=>this.getProductDetail(product._id)} className="product_slide">
                    <img src={`./../../uploads/${product.imgProduct}`} alt="product" className="sameimgProduct"/>
                    <hr className="title_line review"/>
                    <h3>{product.nameProduct}</h3>
                    <span>{product.priceProduct}$</span>
                    </Link>
                    </aside>
                )
            })
           
         }
            return item;
        }

    render() {
        return (
            <div>
            {this.showContent(this.props.listAnother)}
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
export default connect(null, mapDispatchToProps)(ProductAnother)
