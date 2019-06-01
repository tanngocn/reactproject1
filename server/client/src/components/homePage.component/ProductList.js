import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import * as actions from './../../actions/product';

class ProductList extends Component {
    async componentDidMount() {
        await this.props.getListProduct();

    }
    showContent=(products)=>{
        let result=null;
        if(products.length>0){
            result=products.map((product,key)=>{
                return <ProductItem key={key} product={product}/>
            })
        }
        return result;
    }
    render() {
        return (
            <section className="productListHome">
                {this.showContent(this.props.products)}
            </section>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.productReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListProduct: () => {
            dispatch(actions.getProduct())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)