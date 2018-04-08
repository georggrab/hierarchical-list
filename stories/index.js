// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from 'components/App';
import HierarchyList from 'components/HierarchyList';
import type { HierarchyProps } from 'components/HierarchyList';
import { singleChildHierarchyMap, flatHierarchyMap } from 'testAssets/HierarchyList';
import { hierarchyApp } from 'state';
import { singleChildHierarchyState } from '../src/testAssets/HierarchyList';

const store = createStore(hierarchyApp, singleChildHierarchyState);

storiesOf('App', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('whole application', () => (
    <App></App>
  ));

storiesOf('HierarchyList', module)
  .add('flat hierarchy', () => (
    <HierarchyList 
      onRowExpand={ action('row-expand') }
      rootHierarchy={ 0 }
      hierarchies={ flatHierarchyMap }></HierarchyList>
  ))
  .add('single child hierarchy', () => (
    <HierarchyList 
      onRowExpand={ action('row-expand') }
      rootHierarchy={ 0 }
      hierarchies={ singleChildHierarchyMap } />
  ))