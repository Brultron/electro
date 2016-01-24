'use strict';

import React from 'react';
import ReactSlider from 'react-slider';


let context;
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
    this.surferRendered = false;
  }

  componentDidUpdate(){

    if(this.props.track.buffer && !this.surferRendered){
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
        this.surferRendered = true;
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

  pushDown(){
    console.log('push down');
  }

  pushUp(){
    console.log('push up');
  }

  setBPM(e){
    var incoming = new Date().getTime()
    if(time){
      var bpm = (1000 * 60) / (incoming - time) ;
    }
    time = incoming;
    this.setState({bpm: bpm})
  }

  setControls(){
    var element;
    if(this.props.track.ready){
        return (
        <div>
          <div  className='row' >
            <div ref='deck' className='small-12 columns'></div>
          </div>
          <div className='row' >
            <div className='small-4 columns'>
              <a onClick={this.playTrack} className='button'><i className="fa fa-play"></i></a>
              <a onClick={this.pauseTrack} className='button'><i className="fa fa-pause"></i></a>
              <a onClick={this.setBPM} className='button'>{Math.round(this.state.bpm)}</a>
            </div>
            <div className='small-8 columns pitch-container'>
              <a className='button'>
                <i className="fa fa-chevron-left"></i>
              </a>
              <ReactSlider
                handleClassName={'pitch-handle'}
                className={'pitch-bar'}
                max={15}
                min={-15}
                onChange={this.setPitch}/>
              <a  className='button'>
                <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        );
    }else{
      return (<div>
                <i className={'fa fa-circle-o-notch fa-5x fa-spin'}></i>
                <h4> Loading</h4>
              </div>);
    }

    return element
  }

  render(){
    return this.setControls();
  }
}

export default Deck;
