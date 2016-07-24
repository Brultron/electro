'use strict';
import React from 'react';

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
       min: -32,
       max: 12,
       thickness: 0.5,
       angleOffset: 180,
       displayInput: false,
       cursor: 15,
       change: (v) => {
         this.offsetGain();
         this.props.track.channel.low.gain.value = v;
      }
    });

    $(this.refs.mid).knob({
        fgColor: '#ffffff',
        bgColor: '#2199e8',
        height: 40,
        width: 40,
        min: -32,
        max: 12,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: (v) => {
          this.offsetGain();
          this.props.track.channel.mid.gain.value = v;
        }
    });

    $(this.refs.high).knob({
        fgColor: '#ffffff',
        bgColor: '#2199e8',
        height: 40,
        width: 40,
        min: -32,
        max: 12,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: (v) => {
          this.offsetGain();
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
        displayInput: false,
        change: (v) => {
          this.props.track.channel.gain.gain.value = v/100;
        }
    });
  }

  offsetGain(){

  }

  render(){
    return (
      <div className='eq'>
        <input type='text' ref='low' defaultValue='0'></input>
        <input type='text' ref='mid' defaultValue='0'></input>
        <input type='text' ref='high' defaultValue='0'></input>
        <input type='text' ref='gain' defaultValue='100'></input>
      </div>
    );
  }
}

export default Eq;
