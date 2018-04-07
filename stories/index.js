import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from 'components/App';

storiesOf('App', module)
  .add('whole application', () => (
    <App></App>
  ));