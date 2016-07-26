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
    this.props.onToggle();
  }

  render(){

    var background = {
        background: `url(${this.props.track.thumbnail})`,
        backgroundSize: '105%',
        backgroundPosition: 'center'
    }

    return (
      <div className='crate-item lv1_blur'>
        <div
        style={background}
        className='img-div'></div>
        <div className='item-title'>
          {this.props.track.title}
        </div>
          <a onClick={this.loadTrack}
            className='track-thumb'>
            <i className="fa fa-cloud-download fa-3x lv2_blur"></i>
          </a>
      </div>
    );
  }
}

export default Item;
