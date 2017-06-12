import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

function ReactFontFace(WrappedComponent, config){
  return class extends Component{
    constructor(props){
      super(props);
      //test for minimum and type to use
      //file case
      this.state = {
        fontFamily: config.fontFamily,
        fontStyle:  config.fontStyle,
        fontWeight: config.fontWeight,
        unicodeRange: config.unicodeRange,
        file: config.file,
        fontType: config.fontType,
        fileLocal: config.fontLocal

      }
    }
    render(){
      return (
        <div>
          <Helmet>
            <style type='text/css' >{`
                @font-face {
                  font-family: '${this.state.fontFamily}';
                  font-style: '${this.state.fontStyle}';
                  font-weight: '${this.state.fontWeight}';
                  src: local(${this.state.fileLocal}), url(${this.state.file}) format('${this.state.fontType}');
                  unicode-range: '${this.state.unicodeRange}';
                }
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