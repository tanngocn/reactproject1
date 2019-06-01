import React, { Component } from 'react';
// import logo from './../../logo.svg';
import SliderbarAdmin from './SliderbarAdmin';
import routes from './../../routes/admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const CreateProduct=lazy(() => import('./content/CreateProduct'));




class Admin extends Component {
 
    showMain = (routes) => {
        let result =   null;
        if (routes.length > 0) {
          result = routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
                 />
            )
          })
        }
        return result;
      }
    render() {
        return (

                    <Router>
                     
                        <div id="wrapper_admin">
                        <SliderbarAdmin/>
                        <main className="content_admin">
                        <Switch>
                                {this.showMain(routes)}
                        </Switch>
                        </main>
                        </div>
                       
                    </Router>
          
        );
    }
}

export default Admin;