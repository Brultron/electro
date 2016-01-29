'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Eq from './eq/Eq.react.js';
import Autocomplete from 'react-autocomplete';

class Mixer extends React.Component {

  constructor(props){
    super(props);
    this.selectRight = this.selectRight.bind(this);
    this.selectLeft = this.selectLeft.bind(this);
    this.crossfade = this.crossfade.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(){
  }

  getTracks(){
    return Object.keys(this.props.tracks).map((k) => this.props.tracks[k]);
  }

  selectRight(k){
    this.right = this.props.tracks[k];
  }

  selectLeft(k){
    this.left = this.props.tracks[k];
  }


  crossfade(v){
    if(this.right) this.right.channel.gain.gain.value = Math.abs(100 - v) / 100;
    if(this.left) this.left.channel.gain.gain.value = v / 100;
  }

  //TODO will get better names at some point
  getToken(url){
    return url.split('?')[1]
  }

  render(){
    return (
      <div>
        <div className='row'>
          <div className='small-2 colums'>
            <Autocomplete
              onSelect={this.selectRight}
              items={this.getTracks()}
              getItemValue={(item) => item.url}
              renderItem={(item, highlighted) => (
                  <div>{this.getToken(item.url)}</div>
              )}/>
          </div>
          <div className='small-8 colums'>
          <ReactSlider
            min={0}
            max={100}
            value={50}
            onChange={this.crossfade}
            handleClassName={'pitch-handle'}
            className={'pitch-bar'}/>
          </div>
          <div className='small-2 colums'>
              <Autocomplete
              onSelect={this.selectLeft}
              items={this.getTracks()}
              getItemValue={(item) => item.url}
              renderItem={(item, highlighted) => (
                  <div>{this.getToken(item.url)}</div>
              )}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Mixer;
