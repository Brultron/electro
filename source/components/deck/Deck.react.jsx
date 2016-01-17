'use strict';

import React from 'react';
import TrackAction from '../../actions/Tracks.js';
import TrackStore from '../../stores/Tracks.js';

class Deck extends React.Component {

  constructor(props) {
    super(props);
    console.log(TrackStore.getTracks());
  }

  render(){
    return (
      <div>
        <div className={'row'} >
          <h1>Helllo WRrrld</h1>
        </div>
      </div>
    );
  }
}

export default Deck;
