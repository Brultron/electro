'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Eq from './eq/Eq.react.js';
import Autocomplete from 'react-autocomplete';

class Mixer extends React.Component {

  constructor(props){
    super(props);
    this.onTrackSelect = this.onTrackSelect.bind(this);  
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    console.log(this.props.tracks);
  }

  getTracks(){
    return Object.keys(this.props.tracks).map((k) => this.props.tracks[k]);
  }

  onTrackSelect(k){
    console.log(this.props.tracks[k]);
  }

  render(){
    return (
      <div>
        <div className='row'>
          <div className='small-2 colums'>
            <Autocomplete
              onSelect={this.onTrackSelect}
              items={this.getTracks()}
              getItemValue={(item) => item.url}
              renderItem={(item, highlighted) => (
                  <div>{item.url}</div>
              )}/>
          </div>
          <div className='small-8 colums'>
          <ReactSlider
            handleClassName={'pitch-handle'}
            className={'pitch-bar'}/>
          </div>
          <div className='small-2 colums'>
          </div>
        </div>
      </div>
    );
  }
}

export default Mixer;
