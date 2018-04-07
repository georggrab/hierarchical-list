import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App from 'components/App';
import HierarchyList from 'components/HierarchyList';
import { HierarchyProps } from 'components/HierarchyList';
import { flatHierarchy } from 'testAssets/HierarchyList';

storiesOf('App', module)
  .add('whole application', () => (
    <App></App>
  ));

storiesOf('HierarchyList', module)
  .add('flat hierarchy', () => (
    <HierarchyList hierarchy={ flatHierarchy }></HierarchyList>
  ))