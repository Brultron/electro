'use strict';
import React from 'react';

class Eq extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var opts = {
      rotation: 'counter-clockwise',
      height: 40,
      width: 40
    }
    $(this.refs.low).knob(opts);
    $(this.refs.mid).knob(opts);
    $(this.refs.high).knob(opts);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate', this.props.channel);
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
