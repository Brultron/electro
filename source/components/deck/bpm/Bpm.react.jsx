'use strict';
import React from 'react';
import TrackActions from '../../../actions/Tracks.js';

let time;

class Bpm extends React.Component {

  constructor(props){
    super(props);
    this.setBPM = this.setBPM.bind(this);
  }

  setBPM(e){
    let incoming = new Date().getTime()
    let movingBpm = this.props.track.movingBpm;
    if(time){
      movingBpm.push((1000 * 60) / (incoming - time));
      let tappedBpm = movingBpm.reduce((a,b) => a + b) / movingBpm.length;
      let bpm = tappedBpm;
      if(movingBpm.length > 5 ) movingBpm = movingBpm.slice(1);
      TrackActions.updateTrack(this.props.track.id,{bpm, movingBpm, tappedBpm});
    }

    time = incoming;
  }

  render(){
    return (
        <a onClick={this.setBPM} className='ctrl-btn'>
          <p>
            {Math.round(this.props.track.bpm ? this.props.track.bpm : '')}
          </p>
        </a>
    );
  }
}

export default Bpm;
