import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import '../styles/normalize.scss';
import './App.scss';

const App = () => (
    <div className="app-container">
        <Header />
        <Main />
    </div>
);

export default App;