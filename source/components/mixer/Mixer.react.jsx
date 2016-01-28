'use strict';
import React from 'react';
import ReactSlider from 'react-slider';
import Eq from './eq/Eq.react.js';

class Mixer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <div>
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
