'use strict';

import React from 'react';
import ReactSlider from 'react-slider';
import TrackActions from '../../../actions/Tracks.js';

let tempBPM;

class Pitch extends React.Component {

  constructor(props){
    super(props)
    this.setPitch = this.setPitch.bind(this);
    this.pushUp = this.pushUp.bind(this);
    this.pushDown = this.pushDown.bind(this);
    this.resetPitch = this.resetPitch.bind(this);

  }

  setPitch(value) {
    let pitch = 1 + (value / 1000);
    this.props.setPlaybackRate(pitch);
    let bpm = this.props.track.tappedBpm * pitch;
    TrackActions.updateTrack(this.props.track.id, {bpm, pitch});
  }

  pushDown(){
    this.oldPitch = this.props.track.pitch;
    this.props.setPlaybackRate(this.props.track.pitch * 0.95);
  }

  pushUp(){
    this.oldPitch = this.props.track.pitch;
    this.props.setPlaybackRate(this.props.track.pitch * 1.05);
  }

  resetPitch(){
    this.props.setPlaybackRate(this.oldPitch);
  }

  render(){
    return (
      <div className='pitch-cntrl'>
        <a
          className='pitch-bump ctrl-btn'
          style={{
            marginRight: '0px',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px'
          }}
          onMouseDown={this.pushDown}
          onMouseUp={this.resetPitch}>
          <i className='fa fa-minus'>
          </i>
        </a>

        <ReactSlider
          handleClassName={'pitch-handel'}
          className={'pitch-bar'}
          max={150}
          min={-150}
          onChange={this.setPitch}/>
        <a
          className='pitch-bump ctrl-btn'
          style={{
            marginLeft: '0px' ,
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px'
          }}
          onMouseDown={this.pushUp}
          onMouseUp={this.resetPitch}>
          <i className='fa fa-plus'>
          </i>
        </a>
      </div>
    );
  }
}

export default Pitch;
