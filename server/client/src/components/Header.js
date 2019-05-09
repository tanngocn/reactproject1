import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './../logo.svg';
// import {connect} from 'react-redux';
const menus = [
  {
    name: "Home",
    to: "/homeContainer/home",
    exact: true
  },
  {
    name: "About us",
    to: "/homeContainer/about",
    exact: false
  },
  {
    name: "Products",
    to: "/homeContainer/products",
    exact: false
  },
  {
    name: "Help",
    to: "/homeContainer/help",
    exact: false
  },
  {
    name:"",
    to:"/homeContainer/cart",
    exact:false,
    icon:"fas fa-shopping-cart"
  }
];
// Custom Link
const MenuLink = ({ label, to, isExact, icon }) => {
  return (
    <Route
      path={to}
      exact={isExact}
      children={({ match }) => {
        let active = match ? "active nav-item" : "";
        return (
          <li className={`myli ${active}`}>
            <Link to={to} className="nav-link">
              <i className={`${icon}`}></i> {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      hasUser:false,
      show:this.props.show,
      isAdmin:false,
      name:"",
     
    }
     
  }

  componentDidMount() {
    const token=JSON.parse(sessionStorage.getItem('token'));
    if(token!== null &&token){
      this.setState({
        show:!this.props.show,
        isAdmin:token.isAdmin,
        hasUser:true,
        name:token.username,
      });
      
     
    }else{
      this.setState({
        show:false
      })
    }
  }


    logOut=()=>{
      sessionStorage.removeItem('token');
      this.setState({
        showHeader:false,
      });
    }
    showMenu = menus => {
        let result = null;
        if(this.state.hasUser){
          if (menus.length > 0) {
            result = menus.map((menu, index) => {
              return (
              <MenuLink 
                key={index}
               label={menu.name} 
               to={menu.to} 
               isExact={menu.exact}
               icon={menu.icon} />)
            });
          }
          return result;
        }
        return ;
      };
      changeStatus=()=>{
        this.setState({
          isStatusAdmin:true
        });
        this.props.getStatus(this.state.isStatusAdmin);
      }
  
      showContent=()=>{
        const {isAdmin, name}=this.state;
           if(isAdmin){
              return(
                <Link to="/homeContainer/admin" className="nav-link"><i className="fas fa-cogs"></i> Admin</Link>
              )
        }else{
              return(
                <a href="#/"  className="nav-link">Xin chào {name}</a>
              )
        }
      }     
      
    render() {
        return (
         
            <header className={`container `}>
            <nav className="menu show">
              <a href="/homeContainer"><img src={logo} alt="logo" className="logo_user" /></a>	
              <ul className="nav-menu">
              {this.showMenu(menus)}
              {this.showContent()}
              <a href="/" onClick={()=>this.logOut()}   className="nav-link"><i className="fas fa-sign-out-alt"></i> Logout</a>
              </ul>
           </nav>
          </header>
        
        );
    }
}

export default Header

