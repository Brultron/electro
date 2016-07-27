'use strict';

import React from 'react';
import ReactSlider from 'react-slider';
import TrackActions from '../../actions/Tracks.js';
import AC from '../../utils/ac.js'
import EQ from '../eq/Eq.react.js'
import BPM from './bpm/Bpm.react.js'
import UVMeter from '../meters/UVMeter.react.js'

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
        waveColor: '#f50057',
        cursorColor: '#03A9F4',
        progressColor: '#0277BD',
        scrollParent: true,
        normalize: true,
        destination : this.props.track.root,
        hideScrollbar: true,
        cursorWidth: 3
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
    if(this.wavesurfer.isPlaying()) this.wavesurfer.playPause();
    TrackActions.removeTrack(this.props.track);
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
          <h1>{this.props.track.title}</h1>
          <UVMeter track={this.props.track} />
          <div className='controls-panel'>
              <a onClick={this.playPause}>
                <i className={this.state.playClass}></i>
              </a>
              <BPM track={this.props.track}/>
              <EQ track={this.props.track}/>
              <a
                 className='pitch-bump'
                 style={{
                    marginRight: '0px',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px'
                  }}
                 onMouseDown={this.pushDown}
                 onMouseUp={this.resetPitch}>
                <i className='fa fa-minus'></i>
              </a>

              <ReactSlider
                handleClassName={'pitch-handel'}
                className={'pitch-bar'}
                max={150}
                min={-150}
                onChange={this.setPitch}/>
              <a
                className='pitch-bump'
                style={{
                  marginLeft: '0px' ,
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px'
                }}
                onMouseDown={this.pushUp}
                onMouseUp={this.resetPitch}>
                <i className='fa fa-plus'></i>
              </a>
          </div>
          <div ref='deck' className='wave-display'></div>
          <a onClick={this.removeTrack} className='lv1_blur'>
            <i className="fa fa-times-circle fa-lg"></i>
          </a>
        </div>
        );
      }else{
        return (
          <div className='deck lv1_blur' style={{height: '128px'}}>
            <h5>{this.props.track.title}</h5>
            <img src={this.props.track.thumbnail}></img>
          </div>
        );
      }
  }

  render(){
    return this.setControls();
  }
}

export default Deck;
