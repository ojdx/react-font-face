import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

function ReactFontFace(WrappedComponent, config){
  return class extends Component{
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

      // remove comma from array
      let fontList = fontListArray.join("");
      
      // console.log("fontList", fontList);
      // console.log("fontList", fontList.toString() );

      return (
        <div>
          <Helmet>
            <style type='text/css' >{` 
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