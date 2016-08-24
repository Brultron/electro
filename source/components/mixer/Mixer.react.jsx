'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Selector from './selector/Selector.react.js';
import TouchSlider from './touch_slider/TouchSlider.react.js';
import TrackStore from '../../stores/Tracks.js';
import TrackActions from '../../actions/Tracks.js';

class Mixer extends React.Component {

  constructor(props){
    super(props);
    this.state = {toggleStyle: {display: 'none', float:'right'}};
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
          className='mixer-img'
          src={this.props.leftTrack.thumbnail}>
        </img>
      );
    }else{
      return (
          <img
            className='mixer-img'
            src='icons/mipmap-xxxhdpi/ic_launcher.png'>
          </img>
      );
    }
  }

  getRightTrackImg(){
    if(this.props.rightTrack){
      return (
        <img
          className='mixer-img'
          style={{float: 'right'}}
          src={this.props.rightTrack.thumbnail}>
        </img>
      );
    }else{
    return (
          <img
            className='mixer-img'
            style={{float: 'right'}}
            src='icons/mipmap-xxxhdpi/ic_launcher.png'>
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

  toggleSelector(float){
    if(this.state.toggleStyle.display){
      this.setState({toggleStyle : {display: undefined, float: float}});
    }else{
      this.setState({toggleStyle: {display: 'none'}});
    }
  }

  selectRight(k){
    this.toggleSelector('right');
    this.setState({currentSelector: 'right'});
  }

  selectLeft(k){
    this.toggleSelector('left');
    this.setState({currentSelector: 'left'});
  }


  crossfade(v){
    TrackActions.setCrossfadeValue(v);
  }

  render(){
    return (
      <div className='mixer'>
        <div
          style={this.state.toggleStyle}
          className='mixer-select'>
          {this.buildList()}
        </div>
        <div className='mixer-ctrl'>
          <a
            onClick={this.selectLeft}
            style={{
              marginLeft: '0px' ,
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px'
            }}>
            {this.getLeftTrackImg()}
          </a>
          <TouchSlider
            handleClassName='mixer-handle'
            min={0}
            max={100}
            value={this.props.crossfadeValue}
            onChange={this.crossfade}
            className='mixer-bar'/>
          <a
            onClick={this.selectRight}
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
