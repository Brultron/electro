'use strict';
import React from 'react';

class UVMeter extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    var uvmeter = this.refs.uvMeter;
    var canvas = $(uvmeter).get()[0].getContext("2d");

    this.props.track.channel.uvmeter.onaudioprocess = () => {
        var array =  new Uint8Array(this.props.track.channel.analyser.frequencyBinCount);
        this.props.track.channel.analyser.getByteFrequencyData(array);
        canvas.clearRect(0, 0, 1000, 325);
        canvas.fillStyle='#ffffff';
        for ( var i = 0; i < (array.length); i++ ){
          var value = array[i] * 1.25;
          canvas.fillRect(i*5,325-value,3,325);
        }
    };
  }

  render(){
    return (
      <div className='uv-meter'>
        <canvas ref='uvMeter'></canvas>
      </div>
    );
  }
}

export default UVMeter;
