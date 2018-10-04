import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/rootReducer';

import App from './containers/App';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Create root node
const root = document.createElement('div');
document.body.appendChild(root);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    //
    root
);
