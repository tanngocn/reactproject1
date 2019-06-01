import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/product';

class SortProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      kindProductId:null,
      materialId:null,
      priceProduct:null
    }
  }
  
    async componentDidMount() {
      await this.props.getKindProduct();
      await this.props.getMaterialProduct();

    }
    showKindProduct=(kindProducts)=>{
      let result=null;
      if(kindProducts.length>0){
        result=kindProducts.map((value,key)=>{
          return(
          <option  key={key} value={value._id}  >
            {value.name}
          </option>)
        })
      }
      return result;
    }
    showMaterial=(materials)=>{
      let result=null;
      if(materials.length>0){
        result=materials.map((value,key)=>{
          return(
          <option  key={key} value={value._id}  >
            {value.name}
          </option>)
        })
      }
      return result;
    }
    onChangeHandle= async(event)=>{
        let target= event.target;
        let name = target.name;
        let value= (target.value==="null")?null:target.value;
        await this.setState({
          [name]:value
        });
         this.props.getSort(this.state)
    }
    render() {
        return (
            <aside className="sort_product">
                <div className="title_page">
                  <h1 className="title_product_detail">Tìm kiếm theo:</h1>
                  <hr className="title_line review" />
                </div>
                <div className="sort">
                  <div className="form_group_style sortBy">
                    <select name="kindProductId" id="kindProductId" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr">
                    <option value={null} >--Loại sản phẩm--</option>
                      {this.showKindProduct(this.props.kindProducts)}
                    </select>
                    <label htmlFor="kindProductId" className="label-form"> Loại sản phẩm:</label>
                  </div>
                  <div className="form_group_style sortBy">
                    <select name="materialId" id="materialId"   onChange={(event)=>this.onChangeHandle(event)} className="form-ctr">
                      <option  value="null">--Chất liệu--</option>
                    {this.showMaterial(this.props.materials)}
                    </select>
                    <label htmlFor="materialId" className="label-form"> Chất liệu:</label>
                  </div>
                  <div className="form_group_style sortBy">
                    <select name="priceProduct" id="priceProduct"    onChange={(event)=>this.onChangeHandle(event)} className="form-ctr">
                     <option   value={null}  >--Giá--</option>
                      <option value={0}>Dưới 100 $</option>
                      <option value={1}>Từ 100$ - 500 $</option>
                      <option value={2}>Trên 500$ </option>
                    </select>
                    <label htmlFor="priceProduct" className="label-form"> Giá thành:</label>
                  </div>
                </div>	
                <div className="title_page">
                  <h1 className="title_product_detail">Update Late</h1>
                  <hr className="title_line review" />
                </div>
                {/* <ul className="list_kind">
                  <li><a href="#/">Nhẫn ()</a></li>
                  <li><a href="#/">Dây Chuyền ()</a></li>
                  <li><a href="#/">Bông tai ()</a></li>
                  <li><a href="#/">Vòng ()</a></li>
                 
                </ul>
                <div className="title_page">
                  <h1 className="title_product_detail">Chất liệu:</h1>
                  <hr className="title_line review" />
                </div>
                <ul className="list_kind">
                  <li><a href="#/">Vàng ()</a></li>
                  <li><a href="#/">Bạch Kim ()</a></li>
                  <li><a href="#/">Bạc ()</a></li>
                  <li><a href="#/">Gỗ ()</a></li>
                </ul> */}
              </aside>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    kindProducts:state.kindProductReducer,
    materials:state.materialReducer,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getKindProduct: () => {
      dispatch(actions.getKindProduct());
    },
    getMaterialProduct: () => {
      dispatch(actions.getMaterail());
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortProduct)
