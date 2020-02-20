/* eslint-disable default-case */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ThemeContext = React.createContext(null);

function ThemeProvider(props) {
    const { children, disableStyles } = props;
    useEffect(() => {
        if (!disableStyles) {
            //require fonts and icons
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
        }
    }, []);

    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    disableStyles: PropTypes.bool
};

export default ThemeProvider;

