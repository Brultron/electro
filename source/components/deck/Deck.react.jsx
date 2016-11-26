'use strict';

import React from 'react';
import ReactSlider from 'react-slider';
import TrackActions from '../../actions/Tracks.js';
import AC from '../../utils/ac.js';
import EQ from '../eq/Eq.react.js';
import BPM from './bpm/Bpm.react.js';
import Pitch from './pitch/Pitch.react.js';
import UVMeter from '../meters/UVMeter.react.js';
import Loading from './loading/Loading.react.js';

let tempBPM;

class Deck extends React.Component {

  constructor(props){
    super(props)

    this.setPlaybackRate = this.setPlaybackRate.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playPause = this.playPause.bind(this);
    this.cueTrack = this.cueTrack.bind(this);
    this.surferRendered = false;

  }

  componentDidUpdate(){
    if(this.props.track.buffer && !this.surferRendered){

      this.wavesurfer = Object.create(WaveSurfer);
      this.wavesurfer.init({
        audioContext: AC.getContext(),
        container: this.refs.deck,
        waveColor: '#f50057',
        cursorColor: '#03A9F4',
        progressColor: '#0277BD',
        scrollParent: true,
        normalize: true,
        destination : this.props.track.root,
        cursorWidth: 3
      });
      this.wavesurfer.loadDecodedBuffer(this.props.track.buffer);
      this.surferRendered = true;
    }
  }

  setPlaybackRate(pitch){
    this.wavesurfer.setPlaybackRate(pitch);
  }

  playPause(){
    this.wavesurfer.playPause();
    if(this.wavesurfer.isPlaying()){
      this.props.track.channel.main.play();
      TrackActions.updateTrack(this.props.track.id, {playing : true});
    }else{
      TrackActions.updateTrack(this.props.track.id, {playing : false});
      this.props.track.channel.main.pause();
    }
  }

  removeTrack(){
    if(this.wavesurfer.isPlaying()) this.wavesurfer.playPause();
    TrackActions.removeTrack(this.props.track);
  }

  cueTrack(){
    if(this.props.track.channel.cue.paused && this.props.track.channel.cue.duration > 0){
      this.props.track.channel.cue.play();
      TrackActions.updateTrack(this.props.track.id, {cued : true});
    }else{
      this.props.track.channel.cue.pause();
      TrackActions.updateTrack(this.props.track.id, {cued : false});
    }
  }

  setControls(){
      if(this.props.track.ready){

        var background = {
            background: `url(${this.props.track.thumbnail})`,
            backgroundSize: '105%',
            backgroundPosition: 'center'
        }

        return (
        <div className='deck lv1_blur'>
          <h1 className='track-title'>{this.props.track.title}</h1>
          <div className='controls-panel'>
            <div className='left-cntrls'>
              <a onClick={this.playPause} className='ctrl-btn'>
                <i className={this.props.track.playing? 'fa fa-pause' : 'fa fa-play'}></i>
              </a>
              <a onClick={this.cueTrack} className='ctrl-btn'>
                <i className='fa fa-headphones' style={this.props.track.cued? {color: '#f50057'} : {color: 'white'}}></i>
              </a>
              <BPM track={this.props.track}/>
              <EQ track={this.props.track}/>
            </div>
            <UVMeter track={this.props.track} />
            <Pitch track={this.props.track} setPlaybackRate={this.setPlaybackRate} />
          </div>
          <div ref='deck' className='wave-display'></div>
          <a onClick={this.removeTrack} className='track-exit'>
            <i className="fa fa-times-circle fa-lg"></i>
          </a>
        </div>
        );
      }else{
        return (
          <Loading track={this.props.track}/>
        );
      }
  }

  render(){
    return this.setControls();
  }
}

export default Deck;
