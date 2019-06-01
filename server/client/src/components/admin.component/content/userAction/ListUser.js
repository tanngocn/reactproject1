import React, { Component } from 'react';
import * as actions from './../../../../actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


class ListUser extends Component {  
  async componentDidMount() {
   await this.props.getUser();
  }

    showListUser=(users)=>{
      let result=null;
      if(users.length>0){
        result=users.map((user, key)=>{
          return(
               <tr key={key}>
                  <td>{key+1}</td>
                  <td>{user.username} </td>
                  <td>{user.email}</td>
                  <td>{user.dateCreate}</td>
                  <td><span className={(user.isAdmin)?"status_check":"status_check no"}>{(user.isAdmin)?"true":"false"} </span></td>
                  <td>
                    <Link to={`/homeContainer/admin/users/${user._id}`} className="removebtn"  title="Xóa User "><i className="fas fa-trash-alt" /></Link>
                  </td>
                </tr>
          )
        })
      }
      return result;
    }
    render() {
        return (
            <div className="checkout">
            <div className="title_page">
              <h1 className="title_product_detail">Danh sách người dùng hệ thống </h1>
              <hr className="title_line review" />
            </div>
            <table className="table_style ">
              <thead>
             
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date Create</th>
                  <th>Admin</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
              {this.showListUser(this.props.userList)}
              </tbody>
            </table>
          </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userList: state.userReducer

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => {
      dispatch(actions.getUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
