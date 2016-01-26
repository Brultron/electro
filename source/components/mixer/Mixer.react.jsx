'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Eq from './eq/Eq.react.js';

class Mixer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var opts = {
      rotation: 'counter-clockwise',
      height: 75,
      width:75
    }
    $(this.refs.low).knob(opts);
    $(this.refs.mid).knob(opts);
    $(this.refs.high).knob(opts);
  }

  render(){
    return (
      <div>
        <div className='row'>
          <div className='small-6 columns'>
            <Eq/>
          </div>
          <div className='small-6 columns'>
            <Eq/>
          </div>
        </div>
        <div className='row'>
          <ReactSlider
            handleClassName={'pitch-handle'}
            className={'pitch-bar'}/>
        </div>
      </div>
    );
  }
}

export default Mixer;
