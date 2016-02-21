'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Eq from './eq/Eq.react.js';
import Autocomplete from 'react-autocomplete';

let crossfadeValue = 50;

const autoCompleteStyle = {backgroundColor: '#002a42'};

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
    this.right.channel.gain.gain.value =  Math.abs(100 - crossfadeValue) / 100;
  }

  selectLeft(k){
    this.left = this.props.tracks[k];
    this.left.gain.gain.value = crossfadeValue / 100;
  }


  crossfade(v){
    crossfadeValue = v;
    if(this.right) this.right.channel.gain.gain.value = Math.abs(100 - crossfadeValue) / 100;
    if(this.left) this.left.channel.gain.gain.value = crossfadeValue / 100;
  }

  render(){
    return (
      <div className='mixer'>
        <div className='row'>
          <div className='small-6 columns auto-style'>
            <Autocomplete
              className='autoStyle'
              menuStyle={{height: '40px'}}
              onSelect={this.selectRight}
              items={this.getTracks()}
              getItemValue={(item) => item.title}
              renderItem={(item, highlighted) => (
                  <div>
                    <p>{item.title}</p>
                  </div>
              )}/>
          </div>
          <div className='small-6 columns auto-style'>
              <Autocomplete
                menuStyle={{height: '40px'}}
                onSelect={this.selectLeft}
                items={this.getTracks()}
                shouldItemRender={(item) => item.removed}
                getItemValue={(item) => item.url}
                renderItem={(item, highlighted) => (
                    <div>{this.getToken(item.url)}</div>
                )}/>
          </div>
        </div>
        <div className='row'>
          <div className='small-12 colums'>
            <ReactSlider
              min={0}
              max={100}
              value={50}
              onChange={this.crossfade}
              handleClassName='pitch-handle'
              className='pitch-bar'/>
          </div>

        </div>
      </div>
    );
  }
}

export default Mixer;
