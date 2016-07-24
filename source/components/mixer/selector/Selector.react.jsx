'use strict';
import React from 'react';
import TrackActions from '../../../actions/Tracks.js';

class Selector extends React.Component {

  constructor(props){
    super(props);
    this.selectTrack = this.selectTrack.bind(this)
  }

  selectTrack(){
    if(this.props.currentSelector === 'right'){
      TrackActions.setRightTrack(this.props.track);
    }else{
      TrackActions.setLeftTrack(this.props.track);
    }
    this.props.onSelect(this.props.track);
  }

  render(){
    return (
      <a onClick={this.selectTrack}>
        <img
          key={this.props.track.id}
          className='thumbnail'
          src={this.props.track.thumbnail}>
        </img>
      </a>
    );
  }

}

export default Selector;
