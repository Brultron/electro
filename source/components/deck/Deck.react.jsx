'use strict';

import React from 'react';


let context;
let analyizer;
let source;
let pitch = 1;
let position = 0;

class Deck extends React.Component {

  constructor(props){
    super(props)
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
  }

  componentDidUpdate(){
    if(this.props.track.buffer){
    	window.AudioContext = window.AudioContext || window.webkitAudioContext;
    	context = new AudioContext();
    	source = context.createBufferSource();
      analyizer = context.createAnalyser();
      source.connect(analyizer);
      console.log(analyizer);
    	context.decodeAudioData(this.props.track.buffer, (buffer) => {
    		source.buffer = buffer;
    		source.connect(context.destination);
    		source.playbackRate.value = pitch;
    	});
    }
  }

  playTrack(){
    console.log(source);
    source.start(position);
  }

  pauseTrack(){
    console.log(context.currentTime);
    position = context.currentTime;
    source.stop();
  }

  setPitch(e) {
    pitch = 1 + (e.target.value / 100);
    if(source){
      source.playbackRate.value = pitch;
    }
  }

  render(){
    return (
      <div>
        <div className='row' >
          <h4>{this.props.track.url}</h4>
        </div>
        <div className='row' >
          <a onClick={this.playTrack} className='button'>play</a>
          <a onClick={this.pauseTrack} className='button'>stop</a>
        </div>
        <div className='row'>
          <input type='range' min='-15' max='15' onChange={this.setPitch}></input>
        </div>
      </div>
    );
  }
}

export default Deck;
