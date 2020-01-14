import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/App.scss'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
