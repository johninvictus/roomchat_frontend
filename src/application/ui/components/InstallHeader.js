/**
 * Created by invictus on 6/14/17.
 */
import React from 'react';
import {Layout, Button} from 'antd';
import logo from '../../styles/img/logo.png';
import '../../styles/components/InstallHeader.css';


const {Header} = Layout;

const InstallHeader = () => {
    return (
        <div className="install-header">
            <div className="row">
                <div className="col span-1-of-12">
                    <Button type="primary" ghost className="install-btn">Download the app</Button>
                </div>
                <div className="col span-11-of-12">
                    <img src={logo} alt="log" className="header-logo" centre/>
                </div>
            </div>
        </div>
    );
};

export default InstallHeader;