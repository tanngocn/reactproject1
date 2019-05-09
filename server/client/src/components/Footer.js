import React, { Component } from 'react';
import logo from './../logo.svg';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            show:false
        }
        
    }
    // componentDidMount() {
    //     const token=JSON.parse(sessionStorage.getItem('token'));
    //     if(token!== null){
    //         MainService.load(v=>this.setState({ loaded:true,show:this.props.show}))
    //     }else{
    //         this.setState({
    //             loaded:false,
    //             show:false
    //         })
    //     }
       
    // }
    

    render() {
        return (
         <section className={`container }`}>		
            <footer className="footer_admin show">          
                <section id="contact">        
                <img src={logo} alt="logo_footer" id="logo_footer" />
                <span className="info_contact"> <i className="fas fa-envelope" /> tanngocn@gmail.com </span>
                <span className="info_contact"> <i className="fas fa-phone" /> (+84) 969948583 </span>
                <span className="info_contact"> <i className="fas fa-map-marked-alt" />  Khối xuân khoa, Thị trấn Nam đàn, Nam đàn, Nghệ an</span>
                <span className="info_contact copyright">  Copyright © 2019 developer NgocNT</span>
                </section>
                <section id="nav_footer">        
                <h1 className="title_footer">Navigate</h1>
                <ul id="menu_footer">
                    <li><Link to="/homeContainer/home" >Home</Link></li>
                    <li><Link to="/homeContainer/about" >About us</Link></li>
                    <li><Link to="/homeContainer/products" >Products</Link></li>
                    <li><Link to="/homeContainer/contact" >Contact</Link></li>
                </ul>
                </section>
                <section id="link_footer">        
                <h1 className="title_footer">technology</h1>
                <ul id="menu_link">
                    <li><a href="#/" ><i className="fab fa-js" /></a></li>
                    <li><a href="#/"><i className="fab fa-css3-alt" /></a></li>
                    <li><a href="#/"><i className="fab fa-react" /></a></li>
                    <li><a href="#/"><i className="fab fa-html5" /></a></li>
                </ul>
                </section>
                <section id="form_footer">        
                <h1 className="title_footer">Contact</h1>
                <div className="form_group_style">
                    <input type="text" name="email" id="emailContact" className="form-ctr footer" required />
                    <label htmlFor="emailContact" className="label-form"> Email:</label>
                </div>
                <div className="form_group_style">
                    <textarea name="message" id="messageContact" className="form-ctr footer" required defaultValue={""} />
                    <label htmlFor="messageContact" className="label-form"> Message:</label>
                </div>
                <a href="#/" className="submit_footer ">Submit</a>
                </section>
            </footer>
    </section>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      show: state.loginReducer
    }
  }
  export default connect(mapStateToProps,null)(Footer)
  
  
  