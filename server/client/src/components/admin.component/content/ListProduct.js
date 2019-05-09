import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/index'

class ListProduct extends Component {
    componentDidMount() {
        this.props.getListProduct();
    }
    showProduct=(products)=>{
        let result=null;
        if(products.length>0){
            result= products.map((product,key)=>{
                return(
                    <div className="product_item" key={key}>
                    <div className="infoproduct">
                      <a href="#/" className="link_detail"><img src={`./../../images/${product.imgProduct}`} alt="images" className="product_img_home" /></a>
                      <span className={`status_home ${(product.qualityProduct)>0?"":"off"}`}> {(product.qualityProduct!==0)?"Còn hàng":"Hết hàng"  }</span> {/*Hết hàng */}
                      <h3 className="name_product_home"> {product.nameProduct} </h3>
                      <span className="price_product_home">{product.priceProduct} <i className="fas fa-dollar-sign"></i> </span>
                    </div>
                    <div className="homebtn">
                      <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                      <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                    </div>
                  </div>
                )
            })
        }
        return result;
    }
    render() {
        console.log(this.props.products)
        
        return (
            
            <div>
           
            <div className="title_page ">
              <h1 className="title_product_detail home">List Product </h1>
              <hr className="title_line review" />
            </div>
            <section className="productListHome">
            {this.showProduct(this.props.products)}
              <div className="product_item">
                
                <div className="infoproduct">
                  <a href="#/" className="link_detail"><img src="./../../images/7.png" alt="images" className="product_img_home" /></a>
                  <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
                  <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
                  <span className="price_product_home">6219000 đ</span>
                </div>
                <div className="homebtn">
                  <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                  <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                </div>
              </div>
              {/* product-item */}
              <div className="product_item">
                <div className="infoproduct">
                  <a href="#/" className="link_detail"><img src="./../../images/7.png" alt="images" className="product_img_home" /></a>
                  <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
                  <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
                  <span className="price_product_home">6219000 đ</span>
                </div>
                <div className="homebtn">
                  <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                  <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                </div>
              </div>
              {/* product-item */}
              <div className="product_item">
                <div className="infoproduct">
                  <a href="#/" className="link_detail"><img src="./../../images/7.png" alt="images" className="product_img_home" /></a>
                  <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
                  <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
                  <span className="price_product_home">6219000 đ</span>
                </div>
                <div className="homebtn">
                  <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                  <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                </div>
              </div>
              {/* product-item */}
              <div className="product_item">
                <div className="infoproduct">
                  <a href="#/" className="link_detail"><img src="./../../images/7.png" alt="images" className="product_img_home" /></a>
                  <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
                  <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
                  <span className="price_product_home">6219000 đ</span>
                </div>
                <div className="homebtn">
                  <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                  <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                </div>
              </div>
              {/* product-item */}
              <div className="product_item">
                <div className="infoproduct">
                  <a href="#/" className="link_detail"><img src="./../../images/7.png" alt="images" className="product_img_home" /></a>
                  <span className="status_home ">Còn hàng</span> {/*Hết hàng */}
                  <h3 className="name_product_home"> Vòng tay Charm me vàng 14K Đính đá màu PNJ </h3>
                  <span className="price_product_home">6219000 đ</span>
                </div>
                <div className="homebtn">
                  <a href="#/" className="btn_home_product btn-edit"><i className="fas fa-edit" /> Edit</a>
                  <a href="#/" className="btn_home_product btn-delete"><i className="fas fa-trash-alt" /> Delete</a>
                </div>
              </div>
              {/* product-item */}
             
            </section>
            <div className="modaldelete">
              <h1 className="title_modal">Bạn chắc chắn muốn xóa sản phẩm</h1>
              <a href="#/" className="btn_yesno yes">yes</a>
              <a href="#/" className="btn_yesno no">no</a>
            </div>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
