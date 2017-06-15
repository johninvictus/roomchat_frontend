import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './application/store/configureStore';
import {Router, browserHistory} from 'react-router';
import routes from './routes';


import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// styles
import './application/styles/vendor/grid.css';
import './application/styles/custom/setup.css';
import './application/styles/custom/reusable.css';
import './application/styles/custom/loginpage.css';
import './application/styles/custom/loginform.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
