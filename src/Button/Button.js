import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { default as styles } from '@ui5/webcomponents/dist/themes/Button.css.js';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { BUTTON_OPTIONS, BUTTON_TYPES } from '../utils/constants';


const Button = ({
    option,
    type,
    compact,
    glyph,
    dropdown,
    navbar,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    ...props
}) => {
    const buttonClasses = classnames(
        'sapMBtn',
        {
            'sapMBtnDefault': !type,
            [`sapMBtn${type}`]: !!type,
            'sapWCIconInButton': !!glyph,
            [`sap-icon--${glyph}`]: !!glyph,
            'sapMBtnActive': selected,
            'sapMBtnDisabled': disabled
        },
        className
    );

    return (
        <ThemeProvider componentStyles={styles}>
            <button {...props} className={buttonClasses}
                disabled={disabled} onClick={onClick}
                selected={selected}
                type={typeAttr}>
                {children}
            </button>
        </ThemeProvider>);
};

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    glyph: PropTypes.string,
    navbar: PropTypes.bool,
    option: PropTypes.oneOf(BUTTON_OPTIONS),
    selected: PropTypes.bool,
    type: PropTypes.oneOf(BUTTON_TYPES),
    typeAttr: PropTypes.string,
    onClick: PropTypes.func
};

Button.propDescriptions = {
    dropdown: 'Set to **true** if button triggers a dropdown list. ',
    navbar: 'Set to **true** if button is part of global navbar.',
    option: 'Indicates the importance of the button.',
    selected: 'Set to **true** to set state of the button to "selected".',
    typeAttr: 'Value for the `type` attribute on the `<button>` element.'
};

export default Button;
