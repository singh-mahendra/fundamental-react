import './App.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { Routes } from './Routes';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

const App = () => (
    <HelmetProvider>
        <ThemeProvider>
            <div className='frDocs-App'>
                <Routes />
            </div>
        </ThemeProvider>
    </HelmetProvider>
);

export default App;
