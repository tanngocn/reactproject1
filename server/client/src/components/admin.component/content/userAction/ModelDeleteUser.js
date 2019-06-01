import React, { Component } from 'react';
import * as actions from '../../../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ModelDeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            onDelete:true,
        }
    }

    onDeleteUser=(event)=>{
        event.preventDefault();
        let id=this.props.match.params._id;
        console.log(id);
         this.props.onDeleteUser(id); 
         this.props.history.push('/homeContainer/admin/users');
         
      }
      changeStatus=(event)=>{
        event.preventDefault();
        this.setState({
            onDelete:false
        });
        this.props.history.push('/homeContainer/admin/users');
      }
    render() {
            const show =(this.state.onDelete)?"show":""
        return (
            <div className={`modaldelete ${show}`}>
              <h1 className="title_modal">Bạn chắc chắn muốn người dùng này</h1>
              <a  href="/homeContainer/admin/users" onClick={(event)=> this.onDeleteUser(event)} className="btn_yesno yes">yes</a>
              <Link  to="/homeContainer/admin/users"  onClick={(event)=> this.changeStatus(event)} className="btn_yesno no">no</Link>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteUser: (_id) => {
            dispatch(actions.deleteUser(_id));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModelDeleteUser)
