import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SliderbarAdmin extends Component {
  constructor(props) {
    super(props);
    this.state={
      menuAdmin:[{
        name:"product",
        label:"Sản phẩm",
        isActive:false,
        isShow:false,
        icon:"fas fa-ring",
        to1:"/homeContainer/admin/addproduct",
        to2:"/homeContainer/admin/listproducts",
        subIcon1:"fas fa-plus-circle",
        subIcon2:"fas fa-list",
        label1:'Create Product',
        label2:'Product list '
      },
      {
        name:"user",
        label:"Người dùng",
        isActive:false,
        isShow:false,
        icon:"fas fa-user",
        to1:"/homeContainer/admin/adminCreate",
        to2:"/homeContainer/admin/users",
        subIcon1:"fas fa-plus-circle",
        subIcon2:"fas fa-list",
        label1:"Admin Create",
        label2:"User list"
      },
      {
        name:"chart",
        label:"Thống kê",
        isActive:false,
        isShow:false,
        icon:"fas fa-clipboard-list",
        to1:"/homeContainer/admin/chartProduct",
        to2:"/homeContainer/admin/chartSell",
        subIcon1:"fas fa-calendar-alt",
        subIcon2:"fas fa-hand-holding-usd",
        label1:"Day",
        label2:"Total sell"
      }
      ]
    }
  }
  changeStatus=(event,menu)=>{
    event.preventDefault();
    const {menuAdmin}=this.state;
    const index= menuAdmin.indexOf(menu);
      menuAdmin[index].isActive=!menuAdmin[index].isActive;
      menuAdmin[index].isShow=!menuAdmin[index].isShow;
    this.setState({
      menuAdmin:menuAdmin
    })
  }
  showList=(menuAdmin)=>{
    let result=null;
 
    if(menuAdmin.length>0){
      result=menuAdmin.map((menu,key)=>{
        menu.isActive=(menu.isActive)?"active":"";
        menu.isShow=(menu.isShow)?"show":"";
        return (
        <li className="menu-item" key={key}  onClick={(event)=>this.changeStatus(event,menu)} >
          <a href="#/"   data-nd={menu.name} aria-label={menu.label} className={`menu-link ${menu.isActive}`}>
            <i className={menu.icon}  />
          </a>
          <div className={`action ${menu.isShow}`} id="{menu.name}">
            <ul className="action_product">
              <li>
                <Link  to={menu.to1} aria-label={menu.label1} ><i className={menu.subIcon1} /> </Link>
              </li>
              <li>
                <Link   to={menu.to2} aria-label={menu.label2}><i className={menu.subIcon2} /></Link> 
              </li>
            </ul>
          </div>
        </li>
        )
      })
    }
    return result;
  }

    render() {
       
        return (
            <aside id="menu_left">
              {/* end logo */}
              <ul id="menu_content">
                  {this.showList(this.state.menuAdmin)}
                  <li className="menu-item">
                    <Link to="/homeContainer/admin/orders" data-nd="order" aria-label="Đơn hàng" className="menu-link">
                      <i className="fas fa-box" />
                    </Link>
                  <div className="action" id="order">
                  </div>
                </li>
              </ul>
            </aside>
        );
    }
}

export default SliderbarAdmin;