import React, {Component, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from './routes/user' ;


class App extends Component{
  //  route
  constructor(props) {
    super(props);
    this.state={
      isLogin:false,
      isAdmin:false
     
    }
  }
  // Route
  showAdmin =(routes)=>{
    let result=null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main} >

          </Route>
        )
      })
    }
    return result;
  }
  showMain = (routes) => {
    let result=null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            
              strict>
            
          </Route>
        )
      })
    }
    return result;
  } 
  
  componentDidMount() {
    const token=JSON.parse(sessionStorage.getItem('token'));
    if(token!==null){
     this.setState({
       show:true,
       isLogin:true
     })
    }
  }
  


  render(){
      
    return (
      <Suspense fallback={    <div className="loadingAnimation">
                                 <div className="blockanimation">
                                 </div>
                             </div>}> 
       <Router>
               {/* <Header show={this.state.show}/> */}
                 <Switch>
                   {this.showMain(router)}
                 </Switch>
                 {/* <Footer show={this.state.show}/> */}
        </Router>
           
      </Suspense>
     
    );
  }

}

export default (App)

