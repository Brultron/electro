'use strict';

import React from 'react';
import ReactSlider from 'react-slider';
import AC from '../../utils/ac.js'

let context;
let source;
let position = 0;
let time;
let bpm;

class Deck extends React.Component {

  constructor(props){
    super(props)

    this.pitch = 1;
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.setPitch = this.setPitch.bind(this);
    this.pushUp = this.pushUp.bind(this);
    this.pushDown = this.pushDown.bind(this);
    this.resetPitch = this.resetPitch.bind(this);
    this.setBPM = this.setBPM.bind(this);
    this.state = {bpm: 0};
    this.surferRendered = false;

  }

  componentDidUpdate(){
    if(this.props.track.buffer && !this.surferRendered){
      AC.createSource(this.props.track.buffer, (buffer, dest, channel) => {
        this.channel = channel;
        this.wavesurfer = Object.create(WaveSurfer);
        this.wavesurfer.init({
          audioContext: AC.getContext(),
          container: this.refs.deck,
          waveColor: '#f942b5',
          cursorColor: '#c6ff00',
          progressColor: '#bc00ff',
          scrollParent: true,
          destination : dest
        });
        this.wavesurfer.loadDecodedBuffer(buffer);
        this.surferRendered = true;
        this.setUpEQ();
    	});
    }
  }

  setUpEQ(){
    var opts = {
      height: 40,
      width: 40,
      min: 0,
      value: 1,
      max: 1
    }
    $(this.refs.low).knob(opts);
    $(this.refs.mid).knob(opts);
    $(this.refs.high).knob(opts);

  }

  playTrack(){
    this.wavesurfer.play();
  }

  pauseTrack(){
    this.wavesurfer.pause();
  }

  setPitch(value) {
    this.pitch = 1 + (value / 100);
    this.wavesurfer.setPlaybackRate(this.pitch);
  }

  pushDown(){
    this.oldPitch = this.pitch;
    this.wavesurfer.setPlaybackRate(this.pitch * 0.95);
  }

  pushUp(){
    this.oldPitch = this.pitch;
    this.wavesurfer.setPlaybackRate(this.pitch * 1.05);
  }

  resetPitch(){
    this.wavesurfer.setPlaybackRate(this.oldPitch);
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
            <div className='small-2 columns'>
              <a onClick={this.playTrack} className='button'><i className="fa fa-play"></i></a>
              <a onClick={this.pauseTrack} className='button'><i className="fa fa-pause"></i></a>
              <a onClick={this.setBPM} className='button'>{Math.round(this.state.bpm)}</a>
            </div>
            <div className='small-2 columns'>
              <div className='eq'>
                <div type='text' ref='low'></div>
                <div type='text' ref='mid'></div>
                <div type='text' ref='high'></div>
              </div>
            </div>
            <div className='small-8 columns pitch-container'>
              <a className='button' onMouseDown={this.pushDown} onMouseUp={this.resetPitch}>
                <i className="fa fa-minus"></i>
              </a>
              <ReactSlider
                handleClassName={'pitch-handle'}
                className={'pitch-bar'}
                max={15}
                min={-15}
                onChange={this.setPitch}/>
              <a  className='button' onMouseDown={this.pushUp} onMouseUp={this.resetPitch}>
                <i className="fa fa-plus"></i>
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
