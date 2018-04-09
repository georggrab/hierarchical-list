import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import App from '.';
import { fetchHierarchySaga } from 'state/ducks/fetchHierarchy';

const sagaMiddleWare = createSagaMiddleware()
const mockStore = configureStore([sagaMiddleWare])
const store = mockStore({})
sagaMiddleWare.run(fetchHierarchySaga)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
