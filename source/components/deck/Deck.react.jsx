'use strict';

import React from 'react';
import ReactSlider from 'react-slider';


let context;
let analyizer;
let source;
let pitch = 1;
let position = 0;
let time;
let bpm;

class Deck extends React.Component {

  constructor(props){
    super(props)
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.setPitch = this.setPitch.bind(this);
    this.setBPM = this.setBPM.bind(this);
    this.state = {bpm: 0};
  }

  componentDidUpdate(){

    if(this.props.track.buffer){
    	window.AudioContext = window.AudioContext || window.webkitAudioContext;
    	context = new AudioContext();
    	source = context.createBufferSource();
    	context.decodeAudioData(this.props.track.buffer, (buffer) => {

    		source.buffer = buffer;
    		source.connect(context.destination);
    		source.playbackRate.value = pitch;

        this.wavesurfer = Object.create(WaveSurfer);

        this.wavesurfer.init({
          container: this.refs.deck,
          waveColor: '#f942b5',
          cursorColor: '#c6ff00',
          progressColor: '#bc00ff',
          scrollParent: true
        });

        this.wavesurfer.loadDecodedBuffer(source.buffer);

    	});
    }
  }

  playTrack(){
    this.wavesurfer.play();
  }

  pauseTrack(){
    this.wavesurfer.pause();
  }

  setPitch(value) {
    pitch = 1 + (value / 100);
    this.wavesurfer.setPlaybackRate(pitch);
  }

  setBPM(e){
    var incoming = new Date().getTime()
    if(time){
      var bpm = (1000 * 60) / (incoming - time) ;
    }
    time = incoming;
    this.setState({bpm: bpm})
  }

  render(){
    return (
      <div>
        <div className='row' >
          <h4>{this.props.track.url}</h4>
        </div>
        <div  className='row' >
          <div ref='deck' className='small-12 columns'></div>
        </div>
        <div className='row' >
          <div className='small-12 columns'>
            <a onClick={this.playTrack} className='button'>play</a>
            <a onClick={this.pauseTrack} className='button'>stop</a>
            <a onClick={this.setBPM} className='button'>{Math.round(this.state.bpm)}</a>
            <ReactSlider
              handleClassName={'pitch-handle'}
              className={'pitch-bar'}
              max={15}
              min={-15}
              onChange={this.setPitch}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
