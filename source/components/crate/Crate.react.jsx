'use strict';

import React from 'react';
import Store from '../../stores/Tracks.js';
import Actions from '../../actions/Tracks.js';

let remote = window.require('remote');

class Crate extends React.Component {

  constructor(props) {
    super(props);
    console.log(remote.require('./test.js').test());
  }

  onEnter(e){
    if(e.key === 'Enter'){
      Actions.addTrack(e.target.value);
    }
  }

  render(){
    return (
      <div className={'row'}>
        <div className={'medium-12 columns'}>
          <label>URL
            <input type={'text'} onKeyDown={this.onEnter}/>
          </label>
        </div>
      </div>
    );
  }
}

export default Crate;
