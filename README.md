# React Font Face 

This package is a higher order component you can use in your React components to use custom fonts, icon fonts or Google imported fonts.  This HOC uses [react-helmet](https://github.com/nfl/react-helmet) to inject the font-face declarations into the head in an efficient and consolidated manner.  

### Why?

React components should be truly modular.  Where this falls apart is when you use custom fonts.  Yes, we can use SVG's to replace icon fonts but we still need to use custom fonts on occasion, which forces us to use global CSS in a React application.  This feels weird to still maintain a global stylesheet just for font declarations.  

This component allows you to package custom fonts with your component and easily use the component in a project with the expected style rendered.

### Usage

Install and save to your environment use the terminal. 

```bash
npm install react-font-face --save
```

Import the package in your app. 


Wrap your component in the higher order component where ever you export the component.  You will also need to pass in an config object using Google Fonts, your own font files or both.

```js
import ReactFontFace from 'react-font-face'
// SHOWS IMPORT OF LOCAL FILE
import bangersFont from './Bangers-Regular.ttf'

// BUILD YOUR STYLES
const styles = {
  main: {
    margin: 15,
    lineHeight: 1.4,
    fontFamily: 'Bangers',
  },
  google1: {
    fontFamily: 'Pangolin',
  },
  google2: {
    fontFamily: 'Roboto Mono',
  },
};

// THE ACTUAL COMPONENT
class ExampleStyledComponent extends React.Component {
  render() {
    return (
      <div style={styles.main}>
        <p>Custom font from main style.</p>
        <p style={ styles.google1 }>Custom Font from first google style.</p>
        <p style={ styles.google2 }>Custom Font from second google style.</p>
      </div>
    );
  }
}

// CONFIG OBJECT TO PASS TO HOC
let fontConfig = {
  google: [
    'Pangolin',
    'Roboto Mono',
    
    // MORE FONTS IN THE ARRAY
    ...
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
    
    // MORE FONTS IN THE ARRAY
    ...
  ],
}

// WRAP THE EXPORTED COMPONENT 
export default ReactFontFace(ExampleStyledComponent, fontConfig);
```




### Development

To test it out the package locally, pull the repo and run storybook.

```bash
$ git clone https://github.com/ojdx/react-font-face.git
$ cd /react-font-face
$ npm install
$ npm run storybook
```