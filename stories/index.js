import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Font Face', module)
  .add('Google Fonts', () => (
  	<Button onClick={action('clicked')}>Hello Button</Button>
	))
  .add('Local Font File', () => (
  	<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	));
