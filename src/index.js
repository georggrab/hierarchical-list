import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import { hierarchyApp } from './state';
import { singleChildHierarchyState, flatHierarchyState } from './testAssets/HierarchyList';

const store = createStore(hierarchyApp, singleChildHierarchyState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
