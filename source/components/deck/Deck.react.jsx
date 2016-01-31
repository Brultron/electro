'use strict';

import React from 'react';
import ReactSlider from 'react-slider';
import TrackActions from '../../actions/Tracks.js';
import AC from '../../utils/ac.js'
import EQ from '../eq/Eq.react.js'
import BPM from './bpm/Bpm.react.js'

let context;
let source;
let position = 0;
let tempBPM;

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
    this.removeTrack = this.removeTrack.bind(this);
    this.state = {bpm: 0};
    this.surferRendered = false;

  }

  componentDidUpdate(){
    if(this.props.track.buffer && !this.surferRendered){

      this.wavesurfer = Object.create(WaveSurfer);
      this.wavesurfer.init({
        audioContext: AC.getContext(),
        container: this.refs.deck,
        waveColor: '#f942b5',
        cursorColor: '#c6ff00',
        progressColor: '#bc00ff',
        scrollParent: true,
        normalize: true,
        minPxPerSec: 77.5,
        destination : this.props.track.root
      });
      this.wavesurfer.loadDecodedBuffer(this.props.track.buffer);
      this.surferRendered = true;
      $(this.refs.level).knob({ height: 40, width: 40, min: 0, value: 100, max: 100, cursor: 35, thickness: 0.5, change: (v) => {
        this.wavesurfer.setVolume(v/100);
      }});
    }
  }

  playTrack(){
    this.wavesurfer.play();
  }

  pauseTrack(){
    this.wavesurfer.pause();
  }

  setPitch(value) {
    this.pitch = 1 + (value / 1000);
    this.wavesurfer.setPlaybackRate(this.pitch);
    this.props.track.bpm = this.props.track.tappedBpm * this.pitch;
    TrackActions.updateTrack(this.props.track);
  }
  //TODO push bpm adjustment out
  pushDown(){
    this.oldPitch = this.pitch;
    this.wavesurfer.setPlaybackRate(this.pitch * 0.95);
    this.bumpBpm(0.95);
  }

  pushUp(){
    this.oldPitch = this.pitch;
    this.wavesurfer.setPlaybackRate(this.pitch * 1.05);
    this.bumpBpm(1.05);
  }

  resetPitch(){
    this.wavesurfer.setPlaybackRate(this.oldPitch);
    this.bumpBpm();
  }


  bumpBpm(amt){
    if(this.props.track.bpm){
      if(amt){
        tempBPM = this.props.track.bpm;
        this.props.track.bpm = this.props.track.bpm * amt;
      }else{
        this.props.track.bpm = tempBPM;
      }
      TrackActions.updateTrack(this.props.track);
    }
  }


  removeTrack(){
    TrackActions.removeTrack(this.props.track);
  }

  setControls(){
    var element;
    if(this.props.track.ready){
        return (
        <div className='deck'>
          <button className="close-button close-track" aria-label="Close alert" type="button" onClick={this.removeTrack}>
            <span >&times;</span>
          </button>
          <div  className='row' >
            <div className='small-12 columns controls-inner'>
              <button className="close-button" aria-label="Close alert" type="button" onClick={this.removeTrack}>
                <span >&times;</span>
              </button>
              <div className='row'>
                <div className='small-2 columns'>
                  <a onClick={this.playTrack} className='button'><i className="fa fa-play"></i></a>
                  <a onClick={this.pauseTrack} className='button'><i className="fa fa-pause"></i></a>
                  <BPM track={this.props.track}/>
                </div>
                <div className='small-1 columns'>
                  <div ref='level'></div>
                </div>
                <div className='small-2 columns'>
                  <EQ track={this.props.track}/>
                </div>
                <div className='small-7 columns pitch-container'>
                  <a className='button' onMouseDown={this.pushDown} onMouseUp={this.resetPitch}>
                    <i className="fa fa-minus"></i>
                  </a>
                  <ReactSlider
                    handleClassName={'pitch-handle'}
                    className={'pitch-bar'}
                    max={150}
                    min={-150}
                    onChange={this.setPitch}/>
                  <a className='button' onMouseDown={this.pushUp} onMouseUp={this.resetPitch}>
                    <i className="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div ref='deck' className='small-12 columns'></div>
          </div>

        </div>
        );
    }else{
      return (<div><i className={'fa fa-circle-o-notch fa-5x fa-spin'}></i><h4> Loading</h4></div>);
    }

    return element
  }

  render(){
    return this.setControls();
  }
}

export default Deck;
