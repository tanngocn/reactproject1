import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../actions/product';


class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
          nameProduct:"",
          priceProduct:"",
          qualityProduct:"",
          description:"",
          kindProductId:"",
          materialId:"",
          imgProduct:"",
          file:""
        }
      }
   async componentDidMount() {
         await this.props.getKind();
         await this.props.getMater();
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
  goBack=()=>{
    this.props.history.push('/homeContainer/admin/listproducts')
  }
   async componentWillReceiveProps(nextProps) {
      if(nextProps && nextProps.productDetail){
          const {productDetail}=this.props;
        await this.setState({
            _id:productDetail._id,
            nameProduct:productDetail.nameProduct,
            priceProduct:productDetail.priceProduct,
            qualityProduct:productDetail.qualityProduct,
            description:productDetail.description,
            kindProductId:productDetail.kindProduct._id,
            materialId:productDetail.material._id,
            imgProduct:productDetail.imgProduct
         })
      }
     
  }
  showContent=()=>{
    // let img=(this.props.match.params._id)?this.state.imgProduct:this.props.imgFile.name;
      return(
        <div className="form_container">	   
        <section className="form form_createProduct">
              <div className="title_page">
                <h1 className="title_product_detail">Cập nhật sản phẩm </h1>
                <hr className="title_line review" />
              </div>
                  <div className="info1">
                    <input type="file" name="file" onChange={(event)=>this.onChangeHandle(event)} id="file" />
                    <input type="text" name="file" className="form-file" defaultValue={this.state.imgProduct} onChange={(event)=>this.onChangeHandle(event)} id="imgProduct" />
                    <label className="file" htmlFor="file" title="Thêm ảnh"><i className="fas fa-camera-retro" /></label>
                    <img src={`./../../../uploads/${(this.state.imgProduct)?this.state.imgProduct:this.props.imgFile.name}`} alt="img_product" className="imgProduct" />
                    <button className="btnUpload" onClick={()=>this.uploadFile()} ><i className="fas fa-upload" /> Upload</button>
                  </div>
                  <div className="info2">
                    <div className="form_group_style">
                      <input type="text" name="nameProduct" value={this.state.nameProduct} id="nameProduct" onChange={(event)=>this.onChangeHandle(event)} required className="form-ctr" />
                      <label htmlFor="nameProduct" className="label-form">  Tên sản phẩm:</label>
                    </div>		
                    <div className="form_group_style">
                      <input type="number" name="priceProduct" value={this.state.priceProduct}  id="priceProduct" onChange={(event)=>this.onChangeHandle(event)} min={15}  required className="form-ctr" />
                      <label htmlFor="priceProduct" className="label-form"> Giá :</label>
                    </div>
                    <div className="form_group_style">
                      <input type="number" name="qualityProduct" value={this.state.qualityProduct} id="qualityProduct" onChange={(event)=>this.onChangeHandle(event)}  min={0}  required className="form-ctr" />
                      <label htmlFor="qualityProduct" className="label-form"> Số lượng:</label>
                    </div>
                    <div className="form_group_style">
                      <select name="kindProductId"  value={this.state.kindProductId} id="kindProductId" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                          {this.showKindProduct(this.props.kindProducts)}
                      </select>
                      <label htmlFor="kindProductId" className="label-form"> Loại sản phẩm:</label>
                    </div>
                    <div className="form_group_style">
                      <select name="materialId" value={this.state.materialId}  id="materialId" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr add">
                        {this.showMaterial(this.props.materials)}
                      </select>
                      <label htmlFor="materialId" className="label-form"> Chất liệu:</label>
                    </div>
                    <div className="form_group_style">
                      <textarea name="description" value={this.state.description}  id="description" onChange={(event)=>this.onChangeHandle(event)}  className="form-ctr add" required  />
                      <label htmlFor="description" className="label-form add">Mô tả:</label>
                    </div>
                    <a href="#/" className="addProduct" title="Lưu cập nhật" onClick={()=>this.saveData(this.props.match.params._id)}>Save</a>
                    <a href="#/" className="addProduct resetProduct" onClick={()=>this.goBack()}  title="Hủy thao tác">Back</a>
                  </div>
      </section>
      </div>

      )
  }
    saveData= async(id)=>{
    
          let {nameProduct, priceProduct, qualityProduct, description, kindProductId, materialId, file, imgProduct} =this.state;
          let data=new FormData();
          data.append('nameProduct', nameProduct);
          data.append('priceProduct', priceProduct);
          data.append('qualityProduct', qualityProduct);
          data.append('description',description);
          data.append('kindProductId',kindProductId);
          data.append('materialId',materialId);
          if(!file){
            data.append('imgProduct',imgProduct);
          }else{
            data.append('file',file);
            data.append('imgProduct',imgProduct);
          }
           await this.props.updateProduct(id, data);
           this.props.history.goBack();
        }
    render() { 
    
        return (
               <Suspense fallback={<div>Loading..</div>}>
                    {this.showContent()}
              </Suspense>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      imgFile: state.uploadReducer,
      kindProducts:state.kindProductReducer,
      materials:state.materialReducer,
      productDetail:state.viewDetailProductReducer
    }
  }

const mapDispatchToProps = (dispatch, props) => {
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
      getProductById:(id)=>{
        dispatch(actions.viewDetailProduct(id))
      },
      updateProduct:(id, product)=>{
        dispatch(actions.updateData(id, product))
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)
  