// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App from 'components/App';
import HierarchyList from 'components/HierarchyList';
import type { HierarchyProps } from 'components/HierarchyList';
import { flatHierarchy, singleChildHierarchy } from 'testAssets/HierarchyList';

storiesOf('App', module)
  .add('whole application', () => (
    <App></App>
  ));

storiesOf('HierarchyList', module)
  .add('flat hierarchy', () => (
    <HierarchyList hierarchy={ flatHierarchy }></HierarchyList>
  ))
  .add('single child hierarchy', () => (
    <HierarchyList hierarchy={ singleChildHierarchy } />
  ))