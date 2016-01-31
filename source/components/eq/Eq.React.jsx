'use strict';
import React from 'react';


let getEqVal = function(v){
  var ret
  if(v > 0){
    ret = v - 40;
  }else{
    ret  = v + 40;
  }
  console.log(ret);
  return ret;
};

class Eq extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  //TODO there's a better way to set this up.
    $(this.refs.low).knob({lineCap: 'rounded', height: 40, width: 40, value: 0, min: -40, max: 40, thickness: 0.5, cursor: 15, change: (v) => {
      this.props.track.channel.low.gain.value = getEqVal(v);
    }});

    $(this.refs.mid).knob({lineCap: 'rounded', height: 40, width: 40, value: 0, min: -40, max: 40, thickness: 0.5, cursor: 15,  change: (v) => {
      this.props.track.channel.mid.gain.value = getEqVal(v);
    }});

    $(this.refs.high).knob({ lineCap: 'rounded', height: 40, width: 40, value: 0, min: -40, max: 40, thickness: 0.5, cursor: 15, change: (v) => {
      this.props.track.channel.high.gain.value = getEqVal(v);
    }});
  }

  componentDidUpdate(){
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
