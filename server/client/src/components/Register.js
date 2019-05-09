import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from './../actions/index'
import {connect} from 'react-redux';
class Register extends Component {
    constructor(props) {
      super(props);
      this.state={
        username:'',
        email:'',
        password:''

      }
    }
    onChangehandle=(event)=>{
      let target=event.target;
      let value=target.value;
      let name=target.name;
      this.setState({
        [name]:value
      })
    }
    sendData= (event)=>{
      event.preventDefault();
     const {history,register}=this.props;
     const {username, email, password}=this.state;
     const user={};
      user.username=username;
      user.email=email;
      user.password=password;
 
       register(user);
      history.goBack();
    }
    
    render() {
      const {username, email, password}=this.state;
        return (
          <div className="form_container">
            <section className="form createUser">
            <div className="title_page ">
              <h1 className="title_product_detail">Tạo mới người dùng </h1>
              <hr className="title_line review" />
            </div>
            <form >
            <div className="form_group_style">
              <input type="text" name="username" defaultValue={username} onChange={(event)=>this.onChangehandle(event)} id="username" required className="form-ctr" />
              <label htmlFor="username" className="label-form"><i className="fas fa-user-circle" /> Name:</label>
            </div>		
            <div className="form_group_style">
              <input type="email" name="email" defaultValue={email} onChange={(event)=>this.onChangehandle(event)} id="email"  required className="form-ctr" />
              <label htmlFor="email" className="label-form"><i className="fas fa-envelope" /> Email:</label>
            </div>
            <div className="form_group_style">
              <input type="password" name="password" defaultValue={password} onChange={(event)=>this.onChangehandle(event)} id="passWord"  required className="form-ctr" />
              <label htmlFor="password" className="label-form"><i className="fas fa-lock" /> Password:</label>
            </div>
            <button  type="submit" name="submit" onClick={(event)=>this.sendData(event)} className="addProduct createCategories"  title="Thêm mới">Create</button>
            <Link  to="/" className="btnBack red" title="Hủy thao tác"> Back</Link>
            </form>

          </section>
          </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (user) => {
      dispatch(actions.registerUser(user))
    }
  }
}
export default connect(null, mapDispatchToProps)(Register)
