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

    var background_image = `
      -webkit-linear-gradient(left, rgba(255,38,0,1) 0%, rgba(252,40,5,1) 12%, rgba(246,45,15,0) 38%, rgba(233,54,35,1) 90%, rgba(231,56,39,1) 100%)
      url(${this.props.track.thumbnail});
    `;

    var aStyle = {
      'background-image': background_image
    };

    return (
      <div className='crate-item '>
        <div className='item-title'>
          {this.props.track.title}
        </div>
          <a onClick={this.loadTrack}
            className='track-thumb'
            style={aStyle}>
            <i className="fa fa-cloud-download fa-3x lv2_blur"></i>
          </a>
      </div>
    );
  }
}

export default Item;
