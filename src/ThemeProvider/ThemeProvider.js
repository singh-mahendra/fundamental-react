/* eslint-disable react/prop-types */

import { default as colors } from '@ui5/webcomponents/dist/themes/sap_fiori_3/parameters-bundle.css.js';
import React from 'react';


export class ThemeProvider extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <style>{colors}{this.props.componentStyles}</style>
                {this.props.children}
            </React.Fragment>
        );
    }
}
