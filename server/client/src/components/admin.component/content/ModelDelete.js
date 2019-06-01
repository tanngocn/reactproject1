import React, { Component } from 'react';
import * as actionProducts from './../../../actions/product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ModelDelete extends Component {
    constructor(props) {
        super(props);
        this.state={
            onDelete:true,
            _id:""
        }
    }

    onDeleteProduct=(event)=>{
        event.preventDefault();
        let id=this.props.match.params._id;
         this.props.onDeleteProduct(id); 
         this.props.history.push('/homeContainer/admin/listproducts');
      }
      changeStatus=(event)=>{
        event.preventDefault();
        this.setState({
            onDelete:false
        });
        this.props.history.push('/homeContainer/admin/listproducts');
      }
    render() {
            const show =(this.state.onDelete)?"show":""
        return (
            <div className={`modaldelete ${show}`}>
              <h1 className="title_modal">Bạn chắc chắn muốn xóa sản phẩm</h1>
              <Link  to="/homeContainer/admin/listproducts" onClick={(event)=> this.onDeleteProduct(event)} className="btn_yesno yes">yes</Link>
              <Link  to="/homeContainer/admin/listproducts"  onClick={(event)=> this.changeStatus(event)} className="btn_yesno no">no</Link>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (_id) => {
            dispatch(actionProducts.deleteProduct(_id));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModelDelete)
