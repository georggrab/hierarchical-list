import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

import { fetchHierarchySaga } from 'state/ducks/fetchHierarchy'
import { initialState } from 'state';

export const commonTestSetup = (state = initialState) => {
    const sagaMiddleWare = createSagaMiddleware()
    const mockStore = configureStore([sagaMiddleWare])
    const store = mockStore(state)
    sagaMiddleWare.run(fetchHierarchySaga)

    Enzyme.configure({ adapter: new Adapter() })
    return { store }
}