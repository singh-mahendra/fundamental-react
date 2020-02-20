import React from 'react';
import ThemeProvider from '../src/ThemeProvider/ThemeProvider';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, configure } from '@storybook/react';

addDecorator(withA11y);
addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

function loadStories() {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
