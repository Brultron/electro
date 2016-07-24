'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Selector from './selector/Selector.react.js';
import TrackStore from '../../stores/Tracks.js';

let crossfadeValue = 50;

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
    }else{
      return (
        <img
          className='thumbnail track-thumb track-thumb-left'
          src='images/vinyl.png'>
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
    }else{
      return (
        <img
          className='thumbnail track-thumb track-thumb-right'
          src='images/vinyl.png'>
        </img>
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
    crossfadeValue = v ;
    if(this.props.rightTrack){
      this.props.rightTrack.channel.gain.gain.value = crossfadeValue / 100;
    }
    if(this.props.leftTrack){
      this.props.leftTrack.channel.gain.gain.value = Math.abs(100 - crossfadeValue) / 100;
    }
  }

  render(){
    return (
      <div className='mixer'>
        <div className='row'>
          <div className='small-2 columns'>
            <div className='selector'>
              <a onClick={this.selectLeft}>
                {this.getLeftTrackImg()}
              </a>
            </div>
          </div>
          <div className='small-8 columns'>
            <div className='row'>
              <ReactSlider
                min={0}
                max={100}
                value={crossfadeValue}
                onChange={this.crossfade}
                handleClassName='pitch-handle'
                className='pitch-bar'/>
            </div>
            <div className='row selections' style={this.state.toggleStyle}>
              {this.buildList()}
            </div>
          </div>
          <div className='small-2 columns'>
            <div className='selector'>
              <a onClick={this.selectRight}>
                {this.getRightTrackImg()}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mixer;
