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
      url(${this.props.track.thumbnail});
    `;

    var aStyle = {
      'background-image': background_image
    };

    return (
      <div className='crate-item lv1_blur'>
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
