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
    this.setPitch = this.setPitch.bind(this);
    this.pushUp = this.pushUp.bind(this);
    this.pushDown = this.pushDown.bind(this);
    this.resetPitch = this.resetPitch.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playPause = this.playPause.bind(this);

    this.state = {bpm: 0, playClass: 'fa fa-pause'};
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
        destination : this.props.track.root
      });
      this.wavesurfer.loadDecodedBuffer(this.props.track.buffer);
      this.surferRendered = true;
    }
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

  playPause(){
    this.wavesurfer.playPause();
    if(this.wavesurfer.isPlaying()){
      this.setState({playClass: 'fa fa-play'});
    }else{
      this.setState({playClass: 'fa fa-pause'});
    }
  }

  removeTrack(){
    if(this.wavesurfer.isPlaying()) this.pauseTrack();
    TrackActions.removeTrack(this.props.track);
  }


  setControls(){
    var element;
    if(this.props.track.ready){
        return (
        <div className='deck'>
          <button className='close-track close-button' aria-label='Close alert' type='button' onClick={this.removeTrack}>
            <span>&times;</span>
          </button>
          <div  className='row' >
            <div className='small-12 columns controls-inner'>
              <div className='row'>
                <a onClick={this.playPause} className='button'><i className={this.state.playClass}></i></a>
                <BPM track={this.props.track}/>
                <EQ track={this.props.track}/>
                <div className='small-7 columns pitch-container'>
                  <a className='button' onMouseDown={this.pushDown} onMouseUp={this.resetPitch}>
                    <i className='fa fa-minus'></i>
                  </a>
                  <ReactSlider
                    handleClassName={'pitch-handle'}
                    className={'pitch-bar'}
                    max={150}
                    min={-150}
                    onChange={this.setPitch}/>
                  <a className='button' onMouseDown={this.pushUp} onMouseUp={this.resetPitch}>
                    <i className='fa fa-plus'></i>
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
