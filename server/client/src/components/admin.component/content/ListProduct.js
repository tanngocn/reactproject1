import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/product'
import { Link } from 'react-router-dom';


class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state={
            file:null
        }
    }
    
      componentDidMount() {
        this.props.getListProduct();
    }

   
    sendEdit =(id)=>{
      // Truyền sản phẩm có id sang
        this.props.getProductById(id);
    }
    showProduct=(products)=>{
        let result=null;
   
        if(products.length>0){
            result= products.map((product,key)=>{
                return(
                    <div className="product_item" key={key}>
                    <div className="infoproduct">
                      <a href="#/" className="link_detail"><img src={`./../../uploads/${product.imgProduct}`} alt="images" className="product_img_home" /></a>
                      <span className={`status_home ${(product.qualityProduct)>0?"":"off"}`}> {(product.qualityProduct!==0)?"Còn hàng":"Hết hàng"  }</span> {/*Hết hàng */}
                      <h3 className="name_product_home"> {product.nameProduct} </h3>
                      <span className="price_product_home">{product.priceProduct} <i className="fas fa-dollar-sign"></i> </span>
                    </div>
                    <div className="homebtn">
                      <Link to={`/homeContainer/admin/updateProduct/${product._id}`} onClick={()=>this.sendEdit(product._id)} className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</Link>
                      <Link to={`/homeContainer/admin/listproducts/${product._id}`}  className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</Link> 
                    </div> 
                  
                  </div>
                )
            })
        }
        return result;
    }
    render() {
        return (
              <div>
                  <div className="title_page ">
                    <h1 className="title_product_detail home">Danh sách sản phẩm </h1>
                    <hr className="title_line review" />
                  </div>
                  <section className="productListHome">
                      {this.showProduct(this.props.products)}   
                  </section>
              </div>
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
        },
        getProductById:(id)=>{
          dispatch(actions.viewDetailProduct(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
