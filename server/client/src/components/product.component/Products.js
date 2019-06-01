import React, { Component, lazy} from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/product';
import _ from 'lodash';
import * as carts from './../../actions/cart';
const SortProduct = lazy(()=>import('./SortProduct')) ;
const  ProductItem = lazy(()=>import('./ProductItem')) ;
class Products extends Component {
  constructor(props) {
     super(props);
      this.state={
        sort:""
       
      }
    }
    componentWillReceiveProps(nextProps) {
      const {productList}=this.props;
      this.setState({
        list:productList
      });
    }

   async componentDidMount() {
     await this.props.getProduct();
    
  }
    getSort= async (sort)=>{
     this.setState({
       sort:sort
     
     })
  }
  addToCart= async (id)=>{
    await this.props.addCart(id,1);
   }
  showProduct=(products, sort)=>{
    let result;
    if(sort.kindProductId===null && sort.materialId===null && sort.priceProduct ===null){
      result= _.filter(products, function(product){
        return product
      })
      return <ProductItem  products={result} />   
    }

    // sort kindProductId 
    if(sort.kindProductId!==null && sort.materialId===null && sort.priceProduct ===null){
         result= _.filter(products, function(product){
                return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId);
              })
        return <ProductItem  products={result} />      
      }
      //  sort materailId
       if( sort.kindProductId===null && sort.materialId!==null && sort.priceProduct ===null){
         result= _.filter(products, function(product){

         return JSON.stringify(product.material._id)===JSON.stringify(sort.materialId);
       })
         return <ProductItem  products={result} />    
      }
      //  sort price
        if( sort.kindProductId===null && sort.materialId ===null && sort.priceProduct !==null){
          result= _.filter(products, function(product){
                switch(sort.priceProduct){
                  case "0":
                    console.log(typeof product.priceProduct)
                    return product.priceProduct <= 100;
                  case "1":
                    return     product.priceProduct >100 && product.priceProduct <= 500;
                  case "2":
                      return product.priceProduct >500;
                  default:
                    return  JSON.stringify(product.priceProduct);
                }
          })
            return <ProductItem  products={result} />    
        }
        // sort kindProductId && sort materailId
        if(sort.kindProductId!==null && sort.materialId!==null && sort.priceProduct ===null){
          result= _.filter(products, function(product){
                 return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId)
                  && JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) ;
               })
         return <ProductItem  products={result} />      
       }
       //sort KindProductId && sort priceProduct
       if(sort.kindProductId!==null && sort.materialId===null && sort.priceProduct !==null){
        result= _.filter(products, function(product){
                switch(sort.priceProduct){
                  case "0":
                    console.log(typeof product.priceProduct)
                    return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) &&product.priceProduct <= 100;
                  case "1":
                    return     JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) &&product.priceProduct >100 && product.priceProduct <= 500;
                  case "2":
                      return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) &&product.priceProduct >500;
                  default:
                    return  JSON.stringify(product.priceProduct);
                }
             })
       return <ProductItem  products={result} />      
     }
      //sort material && sort priceProduct
      if(sort.kindProductId ===null && sort.materialId!==null && sort.priceProduct !==null){
        result= _.filter(products, function(product){
                switch(sort.priceProduct){
                  case "0":
                    console.log(typeof product.priceProduct)
                    return JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct <= 100;
                  case "1":
                    return     JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct >100 && product.priceProduct <= 500;
                  case "2":
                      return JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct >500;
                  default:
                    return  JSON.stringify(product.priceProduct);
                }
             })
       return <ProductItem  products={result} />      
     }
        //sort material && sort priceProduct
        if(sort.kindProductId !==null && sort.materialId!==null && sort.priceProduct !==null){
          result= _.filter(products, function(product){
                  switch(sort.priceProduct){
                    case "0":
                      console.log(typeof product.priceProduct)
                      return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) &&  JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct <= 100;
                    case "1":
                      return  JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) &&   JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct >100 && product.priceProduct <= 500;
                    case "2":
                        return JSON.stringify(product.kindProduct._id)===JSON.stringify(sort.kindProductId) && JSON.stringify(product.material._id)===JSON.stringify(sort.materialId) &&product.priceProduct >500;
                    default:
                      return  JSON.stringify(product.priceProduct);
                  }
               })
         return <ProductItem  products={result} />      
       }
      return <ProductItem  products={this.state.list} />
  }

    render() {
        return (
            <section className="container">
            <section className="product_list_page">
            {/* aside sort */}
                <SortProduct getSort={(sort)=>this.getSort(sort)}/>
              {/* list product */}
              <section className="product_list_item">
                <div className="title_page">
                  <h1 className="title_product_detail">Danh sách sản phẩm:</h1>
                  <hr className="title_line review" />
                </div>
                <div className="form_group_style showProduct">
                  <select name="kindProduct" id="kindProduct" className="form-ctr">
                  <option value={0}>All</option>
                    <option value={1}>8 Sản phẩm</option>
                    <option value={2}>16 sản phẩm</option>
                    <option value={3}>Trên 16 sản phẩm</option>
                  </select>
                  <label htmlFor="kindProduct" className="label-form"> Hiển thị :</label>
                </div>
                {/* Product_list */}
                {this.showProduct(this.props.productList,this.state.sort)}
              </section>
            </section>
            {/* product_list_page */}
          </section>
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
    addCart:(id, qualitySell)=>{
      dispatch(carts.addToCart(id, qualitySell))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
