import React from 'react';
import Footer from '../components/Footer';

class FooterContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }


    render() {
        return (
            <Footer onChange={this.handleChange}/>
        )
    }
}

export default FooterContainer;
