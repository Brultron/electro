'use strict';
import React from 'react';

class UVMeter extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var uvmeter = this.refs.uvMeter;
		var canvas = $(uvmeter).get()[0].getContext("2d");

		this.props.track.channel.uvmeter.onaudioprocess = () => {
			var array = new Uint8Array(this.props.track.channel.analyser.frequencyBinCount);
			this.props.track.channel.analyser.getByteFrequencyData(array);
			canvas.clearRect(0, 0, 1000, 700);
			canvas.fillStyle = '#01579c';
			var average = this.getAvg(array);
			canvas.fillRect(0, 0, average * 2, 400);
		};
	}

	getAvg(array) {
		var values = 0;
		var average;
		var length = array.length;

		for (var i = 0; i < length; i++) {
			values += array[i];
		}

		average = values / length;
		return average;

	}

	render() {
		return (
			<div className='uv-meter'>
				<canvas ref='uvMeter'></canvas>
			</div>
		);
	}
}

export default UVMeter;
