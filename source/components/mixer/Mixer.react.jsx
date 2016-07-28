'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Selector from './selector/Selector.react.js';
import TrackStore from '../../stores/Tracks.js';
import TrackActions from '../../actions/Tracks.js';

class Mixer extends React.Component {

  constructor(props){
    super(props);
    this.state = {toggleStyle: {display: 'none'}};
    this.selectTrack = this.selectTrack.bind(this);
    this.selectRight = this.selectRight.bind(this);
    this.selectLeft = this.selectLeft.bind(this);
    this.crossfade = this.crossfade.bind(this);
    this.toggleSelector = this.toggleSelector.bind(this);
  }

  selectTrack(track){
    this.toggleSelector();
  }

  getLeftTrackImg(){
    if(this.props.leftTrack){
      return (
        <img
          className='thumbnail track-thumb track-thumb-left'
          src={this.props.leftTrack.thumbnail}>
        </img>
      );
    }
  }

  getRightTrackImg(){
    if(this.props.rightTrack){
      return (
        <a onClick={this.toggleSelector}>
          <img
            className='thumbnail track-thumb track-thumb-right'
            src={this.props.rightTrack.thumbnail}>
          </img>
        </a>
      );
    }
  }

  buildList(){
    var arr = []
    for(var k in this.props.tracks){
      if(this.props.tracks[k].ready && !this.props.tracks[k].removed){
        arr.push(
          <Selector track={this.props.tracks[k]} onSelect={this.selectTrack} currentSelector={this.state.currentSelector} />
        )
      }
    }
    return arr;
  }

  toggleSelector(){
    if(this.state.toggleStyle){
      this.setState({toggleStyle: undefined})
    }else{
      this.setState({toggleStyle: {display: 'none'}});
    }
  }

  selectRight(k){
    this.toggleSelector()
    this.setState({currentSelector: 'right'});
    this.setState({toggleStyle: {float: 'right'}});
  }

  selectLeft(k){
    this.toggleSelector()
    this.setState({currentSelector: 'left'});
    this.setState({toggleStyle: {float: 'left'}});
  }


  crossfade(v){
    TrackActions.setCrossfadeValue(v);
  }

  render(){
    return (
      <div className='mixer'>
        <div className='mixer-ctrl'>
          <a onClick={this.selectLeft}
            style={{
              marginLeft: '0px' ,
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px'
            }}>
            {this.getLeftTrackImg()}
          </a>
          <ReactSlider
            min={0}
            max={100}
            value={this.props.crossfadeValue}
            onChange={this.crossfade}
            handleClassName='pitch-handle'
            className='pitch-bar'/>
          <a onClick={this.selectRight}
            style={{
               marginRight: '0px',
               borderTopLeftRadius: '5px',
               borderBottomLeftRadius: '5px'
             }}>
            {this.getRightTrackImg()}
          </a>
        </div>
      </div>
    );
  }
}

export default Mixer;
