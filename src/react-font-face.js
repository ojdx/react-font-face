import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

function ReactFontFace(WrappedComponent, config){
  return class FontFace extends Component{

    static propTypes = {
      google: PropTypes.array,
      file: PropTypes.array,
    };

    constructor(props){
      super(props);
      //test for minimum and type to use
      //file case

      this.state = {
        google: config.google.length > 0 ? config.google : [],
        file: config.file.length > 0 ? config.file : [],

        // THE SHAPE OF EAH OBJECT WITHIN ARRAY
        // fontFamily: config.fontFamily,
        // fontStyle:  config.fontStyle,
        // fontWeight: config.fontWeight,
        // unicodeRange: config.unicodeRange,
        // file: config.file,
        // fontType: config.fontType,
        // fileLocal: config.fontLocal
      }
    }
    render(){

      const {
        google,
        file,
      } = this.state


      // BUILD THE IMPORT FOR GOOFLE FONTS
      let googleFontImportString = '';
      for (let item in google) {
        // TODO: dont add pipe on last item - doesnt break file request but Google doesnt use it in their wizard
        googleFontImportString += `${google[item].replace(/ /g,"+")}|`
      }
      let googleImport = `@import url('https://fonts.googleapis.com/css?family=${googleFontImportString}');`


      // BUILD THE DECLARATION FOR LOCAL FILES
      let fontListArray = file.map( (item) => {
        return (
          `@font-face {
            font-family: '${item.fontFamily}';
            font-style: '${item.fontStyle}';
            font-weight: '${item.fontWeight}';
            src: local(${item.fileLocal}), url(${item.file}) format('${item.fontType}');
            unicode-range: '${item.unicodeRange}';
          }`
        )
      });
      let fontList = fontListArray.join("");

      return (
        <div>
          <Helmet>
            <style type='text/css' >{` 
                ${googleImport}
                ${fontList}
            `}
            </style>
          </Helmet>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}


export default ReactFontFace