'use strict';
import React from 'react';
import TrackActions from '../../../actions/Tracks.js';

let time;
let movingBpm = [];

class Bpm extends React.Component {

  constructor(props){
    super(props);
    this.setBPM = this.setBPM.bind(this);
  }

  setBPM(e){
    var incoming = new Date().getTime()
    if(time){
      movingBpm.push((1000 * 60) / (incoming - time));
      this.props.track.bpm = movingBpm.reduce((a,b) => a + b) / movingBpm.length;
      this.props.track.tappedBpm = this.props.track.bpm;
      if(movingBpm.length > 5 ) movingBpm = movingBpm.slice(1);
      TrackActions.updateTrack(this.props.track);
    }

    time = incoming;
  }


  bumpBpm(amt){
    if(this.props.track.bpm){
      if(amt){
        tempBpm = this.props.track.bpm;
        this.props.track.bpm = this.props.track.bpm * amt;
      }else{
        this.props.track.bpm = tempBpm;
      }
      TrackActions.updateTrack(this.props.track);
    }
  }

  render(){
    return (
        <a onClick={this.setBPM} className='button bpm'>{Math.round(this.props.track.bpm)}</a>
    );
  }
}

export default Bpm;
