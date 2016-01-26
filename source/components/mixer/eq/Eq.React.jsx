'use strict';
import React from 'react';

class Eq extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var opts = {
      rotation: 'counter-clockwise',
      height: 50,
      width: 50
    }
    $(this.refs.low).knob(opts);
    $(this.refs.mid).knob(opts);
    $(this.refs.high).knob(opts);
  }

  render(){
    return (
      <div className='eq'>
        <div type='text' ref='low'></div>
        <div type='text' ref='mid'></div>
        <div type='text' ref='high'></div>
      </div>
    );
  }
}

export default Eq;
