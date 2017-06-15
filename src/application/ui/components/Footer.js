import React, {PropTypes} from 'react';
import {Icon, Select} from 'antd';
const Option = Select.Option;

const Footer = ({
    onChange
}) => {

    return (
        <div className="row">
            <div className="col span-2-of-3">
                <div className="row">
                    <div className="col span-1-of-4">
                        <h3>Roomchat</h3>
                        <ul>
                            <li>Support</li>
                            <li>Install</li>
                            <li>Tour</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="col span-1-of-4">
                        <h3>Roomchat</h3>
                        <ul>
                            <li>Support</li>
                            <li>Install</li>
                            <li>Tour</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="col span-1-of-4">
                        <h3>Roomchat</h3>
                        <ul>
                            <li>Support</li>
                            <li>Install</li>
                            <li>Tour</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="col span-1-of-4">
                        <h3>Roomchat</h3>
                        <ul>
                            <li>Support</li>
                            <li>Install</li>
                            <li>Tour</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col span-1-of-3">
                <Icon type="global" style={{ fontSize: 16 , margin: 10}}/>

                <Select defaultValue="english-us" style={{ width: 160 }} onChange={onChange}>
                    <Option value="english-us">English (United States)</Option>
                    <Option value="english-uk">English (United Kingdom)</Option>
                    <Option value="kiswahili">Kiswahili</Option>
                </Select>
            </div>
        </div>
    );
};

Footer.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Footer;