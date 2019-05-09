import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/index';
class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      nameProduct:"",
      priceProduct:"",
      qualityProduct:"",
      description:"",
      kindProductId:"",
      materialId:"",
      imgProduct:""
    }
  }
  componentDidMount() {
    this.props.getKind();
    this.props.getMater();
  }
  
  onChangeHandle=(event)=>{
      const target= event.target;
      const name=target.name;
      const value=target.type==='file'?target.files[0]:target.value;
      this.setState({
        [name]:value
      });
      console.log(this.state);
    }

    uploadFile=()=>{
      const {imgProduct}=this.state
      const data= new FormData();
      data.append('imgProduct',imgProduct);
      this.props.upload(data);
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
    sendData=()=>{
        let {nameProduct, priceProduct, qualityProduct, description, kindProductId, materialId, imgProduct } =this.state;
        let data=new FormData();
        data.append('nameProduct', nameProduct);
        data.append('priceProduct', priceProduct);
        data.append('qualityProduct', qualityProduct);
        data.append('description',description);
        data.append('kindProductId',kindProductId);
        data.append('materialId',materialId);
        data.append('imgProduct',imgProduct);
        this.props.newProduct(data);
        this.setState({
          nameProduct:"",
          priceProduct:"",
          qualityProduct:"",
          description:"",
          kindProductId:"",
          materialId:"",
          imgProduct:""
        })
       
    }
    goBack=()=>{
      this.props.history.push('/homeContainer/admin')
    }
    render() {
       const img=this.props.imgFile.name;
        return (
            <div className="form_container">					
            <section className="form form_createProduct">
              <div className="title_page">
                <h1 className="title_product_detail">Thêm sản phẩm </h1>
                <hr className="title_line review" />
              </div>
              <div className="info1">
                <input type="file" name="imgProduct" defaultValue={this.state.imgProduct} onChange={(event)=>this.onChangeHandle(event)} id="imgProduct" />
                <label className="file" htmlFor="imgProduct" title="Thêm ảnh"><i className="fas fa-camera-retro" /></label>
                <img src={`./../../uploads/${img}`} alt="img_product" className="imgProduct" />
                <button className="btnUpload" onClick={()=>this.uploadFile()} ><i className="fas fa-upload" /> Upload</button>
              </div>
              <div className="info2">
                <div className="form_group_style">
                  <input type="text" name="nameProduct" id="nameProduct" onChange={(event)=>this.onChangeHandle(event)} required className="form-ctr" />
                  <label htmlFor="nameProduct" className="label-form">  Tên sản phẩm:</label>
                </div>		
                <div className="form_group_style">
                  <input type="number" name="priceProduct" id="priceProduct" onChange={(event)=>this.onChangeHandle(event)} min={15} defaultValue required className="form-ctr" />
                  <label htmlFor="priceProduct" className="label-form"> Giá :</label>
                </div>
                <div className="form_group_style">
                  <input type="number" name="qualityProduct" id="qualityProduct" onChange={(event)=>this.onChangeHandle(event)}  min={1} defaultValue required className="form-ctr" />
                  <label htmlFor="qualityProduct" className="label-form"> Số lượng:</label>
                </div>
                <div className="form_group_style">
                  <select name="kindProductId" id="kindProductId" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                      {this.showKindProduct(this.props.kindProducts)}
                  </select>
                  <label htmlFor="kindProductId" className="label-form"> Loại sản phẩm:</label>
                </div>
                <div className="form_group_style">
                  <select name="materialId" id="materialId" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                    {this.showMaterial(this.props.materials)}
                  </select>
                  <label htmlFor="materialId" className="label-form"> Chất liệu:</label>
                </div>
                <div className="form_group_style">
                  <textarea name="description" id="description" onChange={(event)=>this.onChangeHandle(event)}  className="form-ctr add" required defaultValue={""} />
                  <label htmlFor="description" className="label-form add">Mô tả:</label>
                </div>
                <button type="reset" className="addProduct" title="Thêm sản phẩm" onClick={()=>this.sendData()}>Save</button>
                <button className="addProduct resetProduct" onClick={()=>this.goBack()}  title="Hủy thao tác">Back</button>
              </div>
            </section>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    imgFile: state.uploadReducer,
    kindProducts:state.kindProductReducer,
    materials:state.materialReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    upload: (file) => {
      dispatch(actions.uploadFile(file))
    },
    getKind: () => {
      dispatch(actions.getKindProduct());
    },
    getMater: () => {
      dispatch(actions.getMaterail());
    },
    newProduct:(product)=>{
      dispatch(actions.createProduct(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
