import React, { Component } from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import HomeproductTop from './HomeproductTop';




	//  let thoigian=setInterval(()=>{
	// 	btnClickSlide('next');},10000);

		
  let statuSlide="stay";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state={
      loaded:false,
      current:0,
      slide:document.getElementsByClassName('listStyleItem')

    }
   
  }
  componentDidMount() {
   
  }
   nextSlide=()=>{
     let {current, slide}=this.state;
     const numberSlide=slide.length;
		if(statuSlide==="trans"){
			return false;
		}
		statuSlide="trans";
		let statustwoSlide=0;
		let slideCurrent=slide[current];
		current=(current<numberSlide-1?current+1:0);
		this.setState({
      current:current
    })
		let slideNext= slide[current];
		slideCurrent.classList.add("outNext");
		slideNext.classList.add("goIn");
		let xlslidecurrent=function(){
				slideCurrent.classList.remove('active');
				slideCurrent.classList.remove('outNext');
				statustwoSlide++;
				statuSlide=(statustwoSlide===2)?('stay'):statuSlide;
			}
		let xlslidenext=function(){
				// sử dụng toán tử 3 ngôi
				this.classList.remove('goIn');
				this.classList.add('active');
				statustwoSlide++;
				statuSlide=(statustwoSlide===2)?('stay'):statuSlide;
				}
		slideCurrent.addEventListener('webkitAnimationEnd',xlslidecurrent,true);
		slideNext.addEventListener('webkitAnimationEnd',xlslidenext,true);
	}
    prevSlide=(event)=>{
      let {current, slide}=this.state;
      const numberSlide=slide.length;
      if(statuSlide==="trans"){
        return false;
      }
      statuSlide="trans";
      let statustwoSlide=0;
      let slideCurrent=slide[current];
      current=(current>0)?(current-1):(numberSlide-1);
      this.setState({
        current:current
      })
      let slideNext= slide[current];
      slideCurrent.classList.add("outPrev");
      slideNext.classList.add("goInPrev");
  
      let xlslidecurrent=function(){
          // Khi hiệu ứng của bất kì nút trái hay phải chạy xong thì đều xóa class active
          slideCurrent.classList.remove('active');
          // Nếu là nút phải thì xóa class dira
          slideCurrent.classList.remove('outPrev');
          statustwoSlide++;
          statuSlide=(statustwoSlide===2)?('stay'):statuSlide;
        }
      let xlslidenext=function(){
          // sử dụng toán tử 3 ngôi
          slideNext.classList.remove('goInPrev');
          slideNext.classList.add('active');
          statustwoSlide++;
          statuSlide=(statustwoSlide===2)?('stay'):statuSlide;
          }
      slideCurrent.addEventListener('webkitAnimationEnd',xlslidecurrent,true);
      slideNext.addEventListener('webkitAnimationEnd',xlslidenext,true);
    }
    render() {
      setInterval(()=>this.nextSlide()
           
      ,10000);
        return (
            <section className="container">
           
            {/* slide */}
            <div className="container main">
              <div className="info_left">
                <ul className="listSlide">
                  <li className="listStyleItem active">
                    <div className="itemBanner">
                      <img src="../images/bn4.jpg" alt="bannerProduct" className="layer1" />
                    </div>
                  </li>
                  <li className="listStyleItem">
                    <div className="itemBanner">
                      <img src="../images/bn3.jpg" alt="bannerProduct" className="layer1" />
                    </div>
                  </li>
                  <li className="listStyleItem">
                    <div className="itemBanner">
                      <img src="../images/bn2.jpg" alt="bannerProduct" className="layer1" />
                    </div>
                  </li>
                  <li className="listStyleItem">
                    <div className="itemBanner">
                      <img src="../images/bn1.jpg" alt="bannerProduct" className="layer1" />
                    </div>
                  </li>
                  <button onClick={()=>this.nextSlide()} className="btn_slide_img nextSlide">&gt;</button>
                  <button onClick={()=>this.prevSlide()} className="btn_slide_img prevSlide">&lt;</button>
                </ul>
              </div>
              <div className="info_right">
                <a href="#/" className="info"><img src="../images/bn6.jpg" alt="newProduct" className="product_banner" /></a>
                <a href="#/" className="info"><img src="../images/bn5.jpg" alt="newProduct" className="product_banner" /></a>
              </div>
            </div>
            {/* banner */}
            <a  href="#/" className="banner_bands"><img src="../images/bn7.jpg" alt="banner" className="banner" /></a>
            {/* productList */}
            <section className="product_same_type_list ">
              <div className="title_page ">
                <h1 className="title_product_detail home">Title Here </h1>
                <hr className="title_line review" />
              </div>
                <HomeproductTop/>
            </section>
            <div className="title_page ">
              <h1 className="title_product_detail home">ProductList </h1>
              <hr className="title_line review" />
            </div>
           <ProductList/>
          </section>

        );
    }
  
}
const mapStateToProps = (state, ownProps) => {
  return {
    userInfor: state.loginReducer
  }
}
export default connect(mapStateToProps, null)(Homepage)

