import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class Login extends Component {

      constructor(props) {
        super(props);
        this.state={
          userName:'',
          password:''
        }
      }
      onChangeHandle=(event)=>{
        let target=event.target;
        let name=target.name;
        let value=target.value;
        this.setState({
          [name]:value
        });
      }
      onLogin=(event)=>{
        event.preventDefault();
        let { email, password}=this.state;
        const user={};
        user.email=email;
        user.password=password;
        this.props.userLogin(user,this.props.history);
      
      }

    render() {
     
        return (
            <div className="form_container">
            <section className="form">
                <div className="title_page login">
                  <h1 className="title_product_detail">Đăng nhập hệ thống </h1>
                  {/* <hr className="title_line review" /> */}
                </div>
                <form >
                <div className="form_group_style">
                  <input type="email" name="email" onChange={(event)=>this.onChangeHandle(event)} id="email" required className="form-ctr" />
                  <label htmlFor="email" className="label-form"><i className="fas fa-user-circle" /> Email:</label>
                </div>		
                <div className="form_group_style">
                  <input type="password" onChange={(event)=>this.onChangeHandle(event)} name="password" id="password"  required className="form-ctr" />
                  <label htmlFor="password" className="label-form"><i className="fas fa-lock" /> Password:</label>
                </div>
                <a href ="/homeContainer" onClick={(event)=>this.onLogin(event)} name="submit" className=" btn-login">Log in</a>
                <div id="forget_account">
                  <Link to="/register"  className="btn-getAccount">Đăng ký </Link>tài khoản mới 	<br />
                  <a href="#/" className=" btn-getAccount">Forget password?</a>
                </div>
                </form>
              </section>
            </div>

          
        );
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      userLogin: (user, history) => {
        dispatch(actions.loginUser(user,history))
      }
    }
  }
export default connect(null, mapDispatchToProps)(withRouter(Login))

