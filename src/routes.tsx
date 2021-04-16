import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';
import { userIsAuthenticated } from './services/authentication';

interface Wrapper {
  component: any;
  path: string
  exact: boolean
}

const WithAuth = ({ component: Component, ...rest }: Wrapper) => {
  return <Route
    {...rest}
    render={props => {
      console.log(userIsAuthenticated())
      return userIsAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
    }
  />
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <WithAuth path='/user' exact component={User} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;