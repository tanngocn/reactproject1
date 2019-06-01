import React, { Component, lazy } from 'react';
import * as actions from './../../actions/product'
import { connect } from 'react-redux';
const ProductTopItem = lazy(()=>import('./ProductTopItem'));

class HomeproductTop extends Component {
    async componentDidMount() {
         await this.props.getProduct();
    }
    
    constructor(props) {
        super(props);
        this.state={
            itemList: document.getElementsByClassName('item'),
            width:0     
        }
    }
    showProductNew=(products)=>{
        return <ProductTopItem  productNew={products}/>;
    }
    nextList=()=>{
        let { itemList, width}=this.state;
        let widthPage=1170;
        let numItem=itemList.length;
        let numList= Math.round(numItem/5);
       
        if(width<numList*(-widthPage))
        {
           this.setState({
            width:-(numList-1)*widthPage
           }); 
        }else{
            this.setState({
                width:-widthPage
            })
        }
    }
    prevList=()=>{
        let {  width}=this.state;
        let widthPage=1170;
        if(width<0)
        {
            this.setState({
                width:width+widthPage
            })
        } 
            this.setState({
                width:0
            })
    }
    render() {
        return (
            <div className="list_product_same home">	
            <button onClick={()=>this.prevList()} className="btn_slide previous">&lt;</button>
            <button onClick={()=>this.nextList()} className="btn_slide next">&gt;</button>
            <div className={`list_product`} style = {{ transform: `translate(${this.state.width}px, 0px)`}} >
             {this.showProductNew(this.props.productListNew)}
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      productListNew: state.newProductReducer
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getProduct: () => {
        dispatch(actions.getProductNew())
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(HomeproductTop)
  
