import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import FormLabel from '../Forms/FormLabel';
import PropTypes from 'prop-types';
import SwitchItem from './_SwitchItem';
import React, { useEffect, useState } from 'react';


const Switch = React.forwardRef(({
    checked,
    children,
    compact,
    disabled,
    disableStyles,
    className,
    id,
    localizedText,
    inputProps,
    internalLabels,
    onChange,
    semantic,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/switch.css');
        }
    }, []);

    let [isChecked, setIsChecked] = useState(!!checked);

    const handleChange = (e) => {
        setIsChecked(!isChecked);
        onChange(e);
    };

    const spanClasses = classnames(
        'fd-switch',
        {
            'fd-switch--compact': compact,
            'fd-switch--semantic': semantic
        }
    );

    return (
        <FormLabel
            disabled={disabled}
            {...props}
            className='fd-switch__label'
            disableStyles={disableStyles}
            htmlFor={id}>
            <span className={spanClasses}>
                <input
                    {...inputProps}
                    aria-checked={isChecked}
                    aria-label={localizedText.inputLabel}
                    checked={isChecked}
                    className='fd-switch__input'
                    disabled={disabled}
                    id={id}
                    onChange={handleChange}
                    ref={ref}
                    role='switch'
                    type='checkbox' />
                <div className='fd-switch__wrapper'>
                    <div className='fd-switch__track'>
                        {internalLabels ? (
                            <>
                                <SwitchItem
                                    glyph={internalLabels.checked.glyph}
                                    text={internalLabels.checked.text}
                                    type='on' />
                                <span className='fd-switch__handle' role='presentation' />
                                <SwitchItem
                                    glyph={internalLabels.unchecked.glyph}
                                    text={internalLabels.unchecked.text}
                                    type='off' />
                            </>
                        ) : (<span className='fd-switch__handle' role='presentation' />)
                        }
                    </div>
                </div>
            </span>
            {children}
        </FormLabel>
    );
});

Switch.displayName = 'Switch';

Switch.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    internalLabels: PropTypes.shape({
        checked: PropTypes.shape(SwitchItem.PropTypes),
        unchecked: PropTypes.shape(SwitchItem.PropTypes)
    }),
    labelProps: PropTypes.object,
    localizedText: CustomPropTypes.i18n({
        inputLabel: PropTypes.string
    }),
    semantic: PropTypes.bool,
    onChange: PropTypes.func
};

Switch.defaultProps = {
    localizedText: {
        inputLabel: 'Toggle'
    },
    onChange: () => { }
};

Switch.propDescriptions = {
    checked: 'Set to true for component to be checked on render.',
    localizedTextShape: {
        inputLabel: 'aria-label for the <input> element.'
    },
    internalLabels: 'Provide text and/or an icon for labels inside the Switch component.'
};

export default Switch;
