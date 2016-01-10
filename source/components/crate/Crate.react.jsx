'use strict';

import React from 'react';
import BrowserWindow from 'browser-window';

class Crate extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello wrrrld');
  }

  render(){
    return (
      <h1>Hello Wrrld</h1>
    );
  }
}

export default Crate; 
