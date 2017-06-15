import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './application/App';
import AuthPage from './application/ui/pages/AuthPage';

import DashboardPage from './application/ui/pages/DashboardPage';
import WrappedLoginForm from './application/ui/containers/WrappedLoginForm';
import WrappedRegisterForm from './application/ui/containers/WrappedRegisterForm';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={DashboardPage}/>
        <Route path="auth" component={AuthPage}>
            <IndexRoute component={WrappedLoginForm}/>
            <Route path="register" component={WrappedRegisterForm}/>
        </Route>
    </Route>
);