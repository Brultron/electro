'use strict';

import React from 'react';
import TrackActions  from '../../../actions/Tracks.js';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.loadTrack = this.loadTrack.bind(this);
  }


  loadTrack(){
    this.props.track.search = false;
    TrackActions.addTrack(this.props.track);
  }

  render(){
    return (
      <div className='row crate-item'>
        <div className='small-2 columns'>
          <img src={this.props.track.thumbnail}></img>
        </div>
        <div className='small-9 columns'>
          <h5>{this.props.track.title}</h5>
          <p>{this.props.track.description}</p>
        </div>
        <div className='small-1 columns'>
          <a onClick={this.loadTrack}>Load</a>
        </div>
      </div>
    );
  }
}

export default Item;
