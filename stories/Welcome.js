/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFontFace from '../src/react-font-face'
import bangersFont from './Bangers-Regular.ttf'
import mograFont from './Mogra-Regular.ttf'
import pressStartFont from './PressStart2P-Regular.ttf'

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: 'Bangers',
    // fontFamily: 'Mogra',
    // fontFamily: 'PressStart',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
    fontFamily: ' "PressStart" ',
  },

  note: {
    fontFamily: ' "Mogra" ',
    opacity: 0.5,
  },
  google1: {
    fontFamily: 'Pangolin',
  },
  google2: {
    fontFamily: 'Roboto Mono',
  },
  google3: {
    fontFamily: 'Indie Flower',
  },
};

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = event => {
      event.preventDefault();

      const { showApp } = this.props;
      showApp();
    };
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to STORYBOOK</h1>
        <p>
          This is a UI component dev environment for your app.
        </p>
        <p style={ styles.google1 }>
          We've added some basic stories inside the
          {' '}
          <code style={styles.code}>src/stories</code>
          {' '}
          directory.
          <br />
          A story is a single state of one or more UI components. You can have as many stories as
          you want.
          <br />
          (Basically a story is like a visual test case.)
        </p>
        <p style={ styles.google2 }>
          See these sample
          {' '}
          <a style={styles.link} onClick={this.clickHandler} role="button" tabIndex="0">stories</a>
          {' '}
          for a component called
          {' '}
          <code style={styles.code}>Button</code>
          .
        </p>
        <p style={ styles.google3 }>
          Just like that, you can add your own components as stories.
          <br />
          You can also edit those components and see changes right away.
          <br />
          (Try editing the <code style={styles.code}>Button</code> component
          located at <code style={styles.code}>src/stories/Button.js</code>.)
        </p>
        <p>
          This is just one thing you can do with Storybook.
          <br />
          Have a look at the
          {' '}
          <a
            style={styles.link}
            href="https://github.com/storybooks/storybook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook
          </a>
          {' '}
          repo for more information.
        </p>
        <p style={styles.note}>
          <b>NOTE:</b>
          <br />
          Have a look at the
          {' '}
          <code style={styles.code}>.storybook/webpack.config.js</code>
          {' '}
          to add webpack
          loaders and plugins you are using in this project.
        </p>
      </div>
    );
  }
}

// Welcome.propTypes = {
//   showApp: PropTypes.function,
// };
// Welcome.defaultProps = {
//   showApp: log,
// };

let fontConfig = {
  google: [
    'Pangolin',
    'Roboto Mono',
    'Indie Flower',
  ],
  file: [
    {
      fontFamily: 'Bangers',
      fontStyle:  'normal',
      fontWeight: 400,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: bangersFont,
      fontType: 'truetype',
      fileLocal: 'Bangers Regular'
    },
    {
      fontFamily: 'Mogra',
      fontStyle:  'normal',
      fontWeight: 400,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: mograFont,
      fontType: 'truetype',
      fileLocal: 'Mongra Regular'
    },
    {
      fontFamily: 'PressStart',
      fontStyle:  'normal',
      fontWeight: 400,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: pressStartFont,
      fontType: 'truetype',
      fileLocal: 'Press Start'
    },
  ],
}

export default ReactFontFace(Welcome, fontConfig);