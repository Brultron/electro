'use strict';

import React from 'react';
import TrackAction from '../../actions/Tracks.js';
import TrackStore from '../../stores/Tracks.js';

class Crate extends React.Component {

  constructor(props) {
    super(props);
  }


  enter(e){
    if('Enter' === e.key){
      let track = {url: e.target.value}
      TrackAction.addTrack(track);
    }
  }

  render(){
    return (
      <div className={'row'} >
        <div className={'medium-12 columns'}>
          <label>URL
            <input type={'text'} onKeyUp={this.enter}/>
          </label>
        </div>
      </div>
    );
  }
}

export default Crate;
