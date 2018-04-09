// @flow
import React from 'react'
import { mount } from 'enzyme';

import Hierarchy from 'containers/Hierarchy';
import { commonTestSetup } from 'commonTest';

const { store } = commonTestSetup()

it('should mount', () => {
    const el = mount(<Hierarchy store={store}/>)
})