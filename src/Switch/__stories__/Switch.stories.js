import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../Switch';
import {
    boolean,
    object,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Switch', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Switch
            checked={boolean('checked', false)}
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            internalLabels={object('internalLabels', {
                checked: {
                    text: 'on',
                    glyph: 'accept'
                },
                unchecked: {
                    text: 'off',
                    glyph: 'decline'
                }
            })}
            localizedText={{
                inputLabel: 'Semantic Switch'
            }}
            semantic={boolean('semantic', false)}>{text('label', 'label')}</Switch>
    ))
    .add('Default', () => (
        <Switch localizedText={{
            inputLabel: 'Default'
        }}>Switch label</Switch>
    ))
    .add('Checked', () => (
        <Switch checked localizedText={{
            inputLabel: 'Checked'
        }}>Switch label</Switch>
    ))
    .add('Compact', () => (
        <Switch compact localizedText={{
            inputLabel: 'Compact'
        }}>Switch label</Switch>
    ))
    .add('Disabled', () => (
        <Switch disabled localizedText={{
            inputLabel: 'Disabled'
        }}>Switch label</Switch>
    ))
    .add('with Icons', () => (
        <Switch internalLabels={{
            checked: {
                text: 'on',
                glyph: 'accept'
            },
            unchecked: {
                text: 'off',
                glyph: 'decline'
            }
        }} localizedText={{
            inputLabel: 'with Icons'
        }}>Switch label</Switch>
    ))
    .add('Semantic', () => (
        <Switch localizedText={{
            inputLabel: 'Semantic'
        }} semantic>Switch label</Switch>
    ))
    .add('No Label', () => (
        <Switch />
    ))
    .add('disable styles', () => (
        <Switch disableStyles>Switch</Switch>
    ));
