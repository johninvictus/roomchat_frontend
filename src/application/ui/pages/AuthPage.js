import React, {Component} from 'react';

import nexus from '../../styles/img/nexus.png';
import logo from '../../styles/img/logo.png';
import FooterContainer from '../containers/FooterContainer';
import InstallHeader from '../components/InstallHeader';

class Auth extends Component {
    render() {
        return (
            <div>
                <InstallHeader/>

                <div className="login-section">
                    <div className="row">
                        <div className="col span-1-of-2 login-column">
                            <div className="device-holder">
                                <img src={nexus} alt="Sample mobile app screen"/>
                            </div>
                        </div>
                        <div className="col span-1-of-2 login-column">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <section>
                    <FooterContainer/>
                </section>
            </div>
        );
    }
}

export default Auth;