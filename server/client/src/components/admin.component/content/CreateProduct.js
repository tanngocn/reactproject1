import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/product';
import { Link } from 'react-router-dom';
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
      file:""
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
    }

    uploadFile= async()=>{
      const {file}=this.state
      const data= new FormData();
       data.append('file',file);
      await this.props.upload(data);
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
    sendData= async ()=>{
        let {nameProduct, priceProduct, qualityProduct, description, kindProductId, materialId, file } =this.state;
        let data=new FormData();
        data.append('nameProduct', nameProduct);
        data.append('priceProduct', priceProduct);
        data.append('qualityProduct', qualityProduct);
        data.append('description',description);
        data.append('kindProductId',kindProductId);
        data.append('materialId',materialId);
        data.append('file',file);
        data.append('imgProduct',file.name)
      await  this.props.newProduct(data);
    }
    goBack=()=>{
      this.props.history.push('/homeContainer/admin/listproducts');
    }
    // showContent=()=>{
    //   let id=this.props.match.params._id;
    //   // let img=this.props.imgFile.name;
    //   let {file } =this.state;
    //       if(!id){
    //         // Form create Product
    //         return (
    //           <section className="form form_createProduct">
    //           <div className="title_page">
    //             <h1 className="title_product_detail">Thêm sản phẩm </h1>
    //             <hr className="title_line review" />
    //           </div>
    //           <div className="info1">
    //             <input type="file" name="file" onChange={(event)=>this.onChangeHandle(event)} id="file" />
    //             <input type="text" name="imgProduct" className="form-file" defaultValue={file.name} onChange={(event)=>this.onChangeHandle(event)} id="imgProduct" />
    //             <label className="file" htmlFor="file" title="Thêm ảnh"><i className="fas fa-camera-retro" /></label>
    //             <img src={`./../../uploads/${file.name}`} alt="img_product" className="imgProduct" />
    //             <button className="btnUpload" onClick={()=>this.uploadFile()} ><i className="fas fa-upload" /> Upload</button>
    //           </div>
    //           <div className="info2">
    //             <div className="form_group_style">
    //               <input type="text" name="nameProduct" id="nameProduct" onChange={(event)=>this.onChangeHandle(event)} required className="form-ctr" />
    //               <label htmlFor="nameProduct" className="label-form">  Tên sản phẩm:</label>
    //             </div>		
    //             <div className="form_group_style">
    //               <input type="number" name="priceProduct" id="priceProduct" onChange={(event)=>this.onChangeHandle(event)} min={15}  required className="form-ctr" />
    //               <label htmlFor="priceProduct" className="label-form"> Giá :</label>
    //             </div>
    //             <div className="form_group_style">
    //               <input type="number" name="qualityProduct" id="qualityProduct" onChange={(event)=>this.onChangeHandle(event)}  min={1}  required className="form-ctr" />
    //               <label htmlFor="qualityProduct" className="label-form"> Số lượng:</label>
    //             </div>
    //             <div className="form_group_style">
    //               <select name="kindProductId" id="kindProductId" value={this.state.kindProductId} onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
    //                   <option>Loại sản phẩm</option>
    //                   {this.showKindProduct(this.props.kindProducts)}
    //               </select>
    //               <label htmlFor="kindProductId" className="label-form"> Loại sản phẩm:</label>
    //             </div>
    //             <div className="form_group_style">
    //               <select name="materialId" id="materialId" value={this.state.materialId} onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
    //                 <option>Chât liệu sản phẩm</option>
    //                 {this.showMaterial(this.props.materials)}
    //               </select>
    //               <label htmlFor="materialId" className="label-form"> Chất liệu:</label>
    //             </div>
    //             <div className="form_group_style">
    //               <textarea name="description" id="description" onChange={(event)=>this.onChangeHandle(event)}  className="form-ctr add" required  />
    //               <label htmlFor="description" className="label-form add">Mô tả:</label>
    //             </div>
    //             <a href="/homeContainer/admin/listproducts"  className="addProduct" title="Thêm sản phẩm" onClick={()=>this.sendData()}>Save</a>
    //             <Link to="/homeContainer/admin/listproducts" className="addProduct resetProduct" onClick={()=>this.goBack()}  title="Hủy thao tác">Back</Link>
    //           </div>
    //         </section>
    //         )
    //       }
          
    // }
    render() {
      //  const img=this.props.imgFile.name;
      // let id=this.props.match.params._id;
       let img=this.props.imgFile.name;
      let {file } =this.state;
        return (
            <div className="form_container">					
                {/* {this.showContent()} */}
                <section className="form form_createProduct">
              <div className="title_page">
                <h1 className="title_product_detail">Thêm sản phẩm </h1>
                <hr className="title_line review" />
              </div>
              <div className="info1">
                <input type="file" name="file" onChange={(event)=>this.onChangeHandle(event)} id="file" />
                <input type="text" name="imgProduct" className="form-file" defaultValue={file.name} onChange={(event)=>this.onChangeHandle(event)} id="imgProduct" />
                <label className="file" htmlFor="file" title="Thêm ảnh"><i className="fas fa-camera-retro" /></label>
                <img src={`./../../uploads/${img}`} alt="img_product" className="imgProduct" />
                <button className="btnUpload" onClick={()=>this.uploadFile()} ><i className="fas fa-upload" /> Upload</button>
              </div>
              <div className="info2">
                <div className="form_group_style">
                  <input type="text" name="nameProduct" id="nameProduct" onChange={(event)=>this.onChangeHandle(event)} required className="form-ctr" />
                  <label htmlFor="nameProduct" className="label-form">  Tên sản phẩm:</label>
                </div>		
                <div className="form_group_style">
                  <input type="number" name="priceProduct" id="priceProduct" onChange={(event)=>this.onChangeHandle(event)} min={15}  required className="form-ctr" />
                  <label htmlFor="priceProduct" className="label-form"> Giá :</label>
                </div>
                <div className="form_group_style">
                  <input type="number" name="qualityProduct" id="qualityProduct" onChange={(event)=>this.onChangeHandle(event)}  min={1}  required className="form-ctr" />
                  <label htmlFor="qualityProduct" className="label-form"> Số lượng:</label>
                </div>
                <div className="form_group_style">
                  <select name="kindProductId" id="kindProductId" value={this.state.kindProductId} onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                      <option>Loại sản phẩm</option>
                      {this.showKindProduct(this.props.kindProducts)}
                  </select>
                  <label htmlFor="kindProductId" className="label-form"> Loại sản phẩm:</label>
                </div>
                <div className="form_group_style">
                  <select name="materialId" id="materialId" value={this.state.materialId} onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                    <option>Chât liệu sản phẩm</option>
                    {this.showMaterial(this.props.materials)}
                  </select>
                  <label htmlFor="materialId" className="label-form"> Chất liệu:</label>
                </div>
                <div className="form_group_style">
                  <textarea name="description" id="description" onChange={(event)=>this.onChangeHandle(event)}  className="form-ctr add" required  />
                  <label htmlFor="description" className="label-form add">Mô tả:</label>
                </div>
                <Link to={"/homeContainer/admin/listproducts"}  className="addProduct" title="Thêm sản phẩm" onClick={()=>this.sendData()}>Save</Link>
                <Link to="/homeContainer/admin/listproducts" className="addProduct resetProduct" onClick={()=>this.goBack()}  title="Hủy thao tác">Back</Link>
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
    materials:state.materialReducer,

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
    },
    getListProduct: () => {
      dispatch(actions.getProduct())
  },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
