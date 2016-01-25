'use strict';
import React from 'react';
import ReactSlider from 'react-slider';

class Mixer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    $(function() {
      $(".dial").knob();
    });
  }

  render(){
    return (
      <div>
        <div className='row'>
          <div className='small-6 columns'>
            <input type="text" value="75" class="dial"/>
          </div>
          <div className='small-6 columns'>

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
