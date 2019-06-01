import React, { Component, lazy, Suspense } from 'react';
import * as actions from './../../../actions/product';
import * as charts from './../../../actions/chart';
import * as carts from './../../../actions/cart';
import { connect } from 'react-redux';
import _ from  'lodash';
import ProductSameKind from './ProductSameKind';
const Header = lazy(()=> import('../../Header'));
const Footer = lazy(()=> import('../../Footer'));
const ListReview = lazy(()=>import('./ListReview'));
const ProductAnother= lazy(()=> import('./ProductAnother'));




class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            showYourReview:false,
            itemList: document.getElementsByClassName('item'),
            width:0,
            content:"",
            kindRaitingId:""
        
        }
    }
    
    async componentDidMount() {
        const token=JSON.parse(sessionStorage.getItem('token'));
        if(token!== null){
            let id= this.props.match.params.id;
            await this.props.getDetailProduct(id);
            await this.props.getProductList();
            await this.props.getKindRaiting();
            // await this.props.getCountRaitingProduct();
            await this.props.getReviewList(id);
            return;
        }else{
            this.props.history.push('/');
        }
    }
    async componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.productDetail){
            const {productDetail, productList, countRating, listReview}=this.props;
          await this.setState({
              _id:productDetail._id,
              nameProduct:productDetail.nameProduct,
              priceProduct:productDetail.priceProduct,
              qualityProduct:productDetail.qualityProduct,
              description:productDetail.description,
              kindProductId:productDetail.kindProduct._id,
              materialId:productDetail.material._id,
              imgProduct:productDetail.imgProduct,
              list:productList,
              count:countRating,
              reviewList:listReview,
              numberReview:0
           })
        }
       
    }
    // animation list
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
    // end animation list

    showYourReview=()=>{
        
        this.setState({
            showYourReview:!this.state.showYourReview
        });
    }
    addToCart= async (id)=>{
        await this.props.addCart(id,1);
        alert("Add success");
     } 

    showContentReview=()=>{
        const show=(this.state.showYourReview)?"show":"";
        const token=JSON.parse(sessionStorage.getItem('token'));
        const {kindRaiting}=this.props;
        let userId=token._id;
        const{_id, reviewList}=this.state
       let  result=_.find(reviewList, function(review){
           return JSON.stringify(review.user._id)===JSON.stringify(userId) &&JSON.stringify(review.product._id) === JSON.stringify(_id) 
        })
        //Lôi ở điều kiện return
        if(!result){
            return(
            <section className={`yourRaiting ${show}`}>
            <div className="title_page">
                <h1 className="title_product_detail">Đánh giá của bạn</h1>
                <hr className="title_line review" />
            </div>	
            <div className="form_group_style reviewProduct">
                    <select className="form-ctr review " name="kindRaitingId" onChange={(event)=>this.onChangeHandle(event)}>
                          {this.showKindRaiting(kindRaiting)}
                    </select>
            </div>
             <div className="form_group_style">
              <textarea id="content" name="content" onChange={(event)=>this.onChangeHandle(event)} className="form-ctr review" placeholder=" Nhập nội dụng đánh giá ở đây" defaultValue={""} />
            </div>
            <div className="float_right">
            <a href={`/homeContainer/productDetail/${_id}`} className="sendReview" onClick={()=>this.sendContentReview()}>Gửi</a>								
            </div>		
        </section>
            )
        }else if(result !==0){
           return(
               
            <section className={`yourRaiting ${show}`}>   
                <div className="reviewSuccess">
                Bạn đã đánh giá sản phẩm này
                </div>
            </section>
           )
           }

    }
 
    // bat su kien onchange
    onChangeHandle=(event)=>{
        let target=event.target;
        let name=target.name;
        let value= target.value;
        this.setState({
            [name]:value
        });
    }
    // Show content Review
    sendContentReview=()=>{
        const token=JSON.parse(sessionStorage.getItem('token'));
        let userId=token._id;
        console.log(typeof token)
        const {content, kindRaitingId, _id}=this.state;
        let review={};
        review.userId=userId;
        review.productId=_id;
        review.kindRaitingId=kindRaitingId;
        review.content=content;
        this.props.sendReviewUser(review);

    }
    // show
    showSameProduct= ()=>{
        const {kindProductId, _id} =this.state;
          let  result= _.filter(this.props.productList, function(product){
                return product.kindProduct._id===kindProductId && product._id !== _id// điều kiện lọc
            })
        return  <ProductSameKind listSame={result} />
     
    }
    //show count Rainting this product
    // showCountRaiting=()=>{
    //     let result=null;
    //     const {_id,count}=this.state;
    //         result=_.filter(count, function(v){
    //             return JSON.stringify(v._id.product._id)===JSON.stringify(_id)
    //         })
           
    //     return result;
    // }
    // Show commnet review user
    showReviewList=()=>{
        let id= this.props.match.params.id;
        const{ reviewList}=this.state
        if(reviewList !==null){
        let result=_.filter(reviewList, function(v){

                return JSON.stringify(v.product._id)===JSON.stringify(id);
        })
        return <ListReview  listReview={result} match={this.props.match}  />
    }
    }
    // Show sản phẩm khác
    showAnotherProduct= ()=>{
        const {kindProductId, _id} =this.state;
          let  result= _.filter(this.props.productList, function(product){
                return product.kindProduct._id!==kindProductId && product._id !== _id// điều kiện lọc
            })
        return  <ProductAnother listAnother={result}/>
     
    }
    // show raiting
    showKindRaiting=(kindRaitings)=>{
        let result= null;
        if(kindRaitings.length>0){
            result=kindRaitings.map((kindRaiting, key)=>{
                return (<option key={key} value={kindRaiting._id}>{kindRaiting.name}</option>)
            })
        }
        return result;
    }
    // 


    render() {
        const {listReview}=this.props;

        let {_id, nameProduct, priceProduct, qualityProduct, description, imgProduct, oneStar, twoStar, threeStar, fourStar, fiveStar} =this.state;
      
                  let  result=_.filter(listReview, function(v){
                    return JSON.stringify(v.product._id)===JSON.stringify(_id)
                })
            let numberReview=(result===null)?0:result.length;

        return (
            <div>
                <Header/>
                <section className="container">	
                <div className="main_product_detail">
                <div className="title_page">
                    <h1 className="title_product_detail">{nameProduct}</h1>
                    <ul className="raiting">
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    <li><i className="fas fa-star" /></li>
                    </ul>
                    <span> {numberReview} people reviews</span>
                    <hr className="title_line" />
                </div>	
                <section className="info_left">
                    <img src={`./../../uploads/${imgProduct}`} alt="img_product" className="img_product_detail" />
                </section>
                <section className="info_right">
                    <div className="price">
                        <div className="title_page">
                            <h1 className="title_product_detail center">Thông tin sản phẩm</h1>
                            <hr className="title_line review" />
                        </div>
                        <span className="product_price">Giá: {priceProduct}$</span>
                        <div className="product_description">
                                <h1>Mô tả:</h1>
                                <p>{description}</p>
                         </div>
                            <div className={`statusProduct ${qualityProduct>0?"":"off"} `}>
                            {(qualityProduct!==0)?"Còn hàng":"Hết hàng"  }</div>
                          <div className="statusProduct info">Trả góp 0 %</div>
                         <button className="btn_buyNow" onClick={()=>this.addToCart(_id)}>Mua ngay</button>
                    </div>
                    {/* 	<button class="btn_buyNow">Buy Combo</button> */}
                </section>
                {/* product same type */}
                <section className="product_same_type_list">
                     <div className="title_page">
                        <h1 className="title_product_detail ml-2">Sản phẩm cùng loại</h1>
                        <hr className="title_line review" />
                    </div>
                    <div className="list_product_same">	
                    <button onClick={()=>this.prevList()} className="btn_slide previous">&lt;</button>
                    <button onClick={()=>this.nextList()} className="btn_slide next">&gt;</button>
                     <div className={`list_product`} style = {{ transform: `translate(${this.state.width}px, 0px)`}} >
                    {this.showSameProduct()}
                    </div>
                    </div>
                </section>
                {/* end product same type */}
                {/* product review */}
                <div className="product_block_review">
                    <section className="product_review">	
                    <div className="title_page">
                        <h1 className="title_product_detail">Đánh giá và nhận xét của khách hàng</h1>
                        <hr className="title_line review" />
                    </div>	
                    <section className="customer_review">
                        <section className="total_raiting">
                        <h1>1/5 <i className="fas fa-star" style={{color: 'orange'}} /></h1>
                        <span>{numberReview} Người đã đánh giá </span>
                        </section>
                        <section className="chart_raiting">
                        <ul>
                            <li>
                            <span>5 sao ({oneStar})</span>
                            <span className="chart_percent">
                                <span style={{width: `${oneStar}%`}} />
                            </span>
                            </li>
                            <li>
                            <span>4 sao ({twoStar})</span>
                            <span className="chart_percent">
                                <span style={{width: `${twoStar}%`}} />
                            </span>
                            </li>
                            <li>
                            <span>3 sao ({threeStar})</span>
                            <span className="chart_percent">
                                <span style={{width: `${threeStar}%`}} />
                            </span>
                            </li>
                            <li>
                            <span>2 sao ({fourStar})</span>
                            <span className="chart_percent yellow">
                                <span style={{width: `${fourStar}%`}} />
                            </span>
                            </li>
                            <li>
                            <span>1 sao ({fiveStar})</span>
                            <span className="chart_percent red">
                                <span style={{width: `${fiveStar}%`}} />
                            </span>
                            </li>
                        </ul>
                        </section>
                        <section className="your_raiting">
                        <h1>Bạn đã mua sản phẩm này?</h1>
                        <button onClick={()=>this.showYourReview()}  className="btn_review">Gửi đánh giá của bạn</button>
                        </section>
                    </section>
                    {/* raiting */}
                    {/* Post Review */}
                        {this.showContentReview()}
                    {/* end product review */}
                    {/* custommer comment */}
                    <section className="customer_comment">
                        <div className="title_page">
                        <h1 className="title_product_detail">Khách hàng nhận xét ({numberReview})</h1>
                        <hr className="title_line review" />
                        </div>	
                        <Suspense  fallback={    <div className="loadingAnimation">
                                 <div className="blockanimation">
                                 </div>
                             </div>}>
                        {this.showReviewList()}
                        </Suspense>
                    </section>
                    </section>
                    {/* comercial */}
                   {this.showAnotherProduct()}
                </div>
                </div>
            </section>
            <Footer/>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        productDetail: state.viewDetailProductReducer,
        productList: state.productReducer,
        kindRaiting: state.kindRaitingReducer,
        // countRating: state.chartReducer,
        listReview: state.reviewListReducer
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
        getKindRaiting:()=>{
            dispatch(actions.getKindRaiting())
          },
        // getCountRaitingProduct:()=>{
        //     dispatch(charts.getCountRaiting())
        // },
        getReviewList :()=>{
            dispatch(charts.getReviewList())
          },
          sendReviewUser:(review)=>{
              dispatch(charts.sendReivewUser(review))
          },
          addCart:(id, qualitySell)=>{
            dispatch(carts.addToCart(id, qualitySell))
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps, null)(ProductDetail)
