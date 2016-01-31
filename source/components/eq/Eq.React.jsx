'use strict';
import React from 'react';


let getEqVal = function(v){
  var ret
  if(v > 0){
    ret = v - 40;
  }else{
    ret  = v + 40;
  }
  return ret;
};

class Eq extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  //TODO there's a better way to set this up.
    $(this.refs.low).knob(
      {fgColor: '#ffffff',
       bgColor: '#2199e8',
       height: 40,
       width: 40,
       value: 0,
       min: -40,
       max: 40,
       thickness: 0.5,
       angleOffset: 180,
       displayInput: false,
       cursor: 15,
       change: (v) => {
        console.log(v)
        this.props.track.channel.low.gain.value = v;
      }
    });

    $(this.refs.mid).knob({
        fgColor: '#ffffff',
        bgColor: '#2199e8',
        height: 40,
        width: 40,
        min: -40,
        max: 40,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: (v) => {
          console.log(v);
          this.props.track.channel.mid.gain.value = v;
        }
    });

    $(this.refs.high).knob({
        fgColor: '#ffffff',
        bgColor: '#2199e8',
        height: 40,
        width: 40,
        min: -40,
        max: 40,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: (v) => {
          console.log(v);
          this.props.track.channel.high.gain.value = v;
        }
    });


    $(this.refs.gain).knob({
        fgColor: '#ffffff',
        bgColor: '#2199e8',
        height: 40,
        width: 40,
        min: 0,
        max: 100,
        thickness: 0.5,
        lineCap: 'round',
        displayInput: false,
        change: (v) => {
          console.log(v/100);
          this.props.track.channel.gain.gain.value = v/100;
        }
    });
  }

  offsetGain(){

  }

  render(){
    return (
      <div className='eq'>
        <input type='text' ref='low' value='0'>L</input>
        <input type='text' ref='mid' value='0'>M</input>
        <input type='text' ref='high' value='0'>H</input>
        <input type='text' ref='gain' value='100'>GAIN</input>
      </div>
    );
  }
}

export default Eq;
