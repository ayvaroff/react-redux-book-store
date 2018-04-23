import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/store/configureStore';
import Root from './containers/Root';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById('app')
);

module.hot.accept();