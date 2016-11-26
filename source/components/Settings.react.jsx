'use strict';

import React from 'react';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';
import Select from './select/Select.react.js';

class Settings extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			devices: TrackStore.getDevices()
		};

		loadDevices();
	}

	componentDidMount() {
		TrackStore.listen(() => {
			this.onChange()
		});
	}

	onChange() {
		var devices = TrackStore.getDevices();
		var ytApiKey = TrackStore.getYtApiKey();
		this.setState({devices: devices, ytApiKey: ytApiKey});
	}

	setMainOutput(deviceId) {
		TrackActions.setMainOutput(deviceId);
	}

	setCueOutput(deviceId) {
		TrackActions.setCueOutput(deviceId);
	}

	setYtApiKey(event) {
		if (event.key === 'Enter' || event.type === 'blur') {
			TrackActions.setYtApiKey(event.target.value);
		}
	}

	setFFMPegPath(event){
		if (event.key === 'Enter' || event.type === 'blur') {
			TrackActions.setFFMPegPath(event.target.value);
		}
	}

	render() {
		return (
			<div className='setting-container lv1_blur'>
				<h1>Settings</h1>
				<div className='row'>
					<label>YouTube API key</label>
					<input type='text' onKeyUp={this.setYtApiKey} onBlur={this.setYtApiKey} defaultValue={TrackStore.getYtApiKey()}/>
				</div>
				<div className='row'>
					<label>FFMPEG path</label>
					<input type='text' onKeyUp={this.setFFMPegPath} onBlur={this.setFFMPegPath} defaultValue={TrackStore.getFFMPegPath()}/>
				</div>
				<div className='row'>
					<label>Main output</label>
					<Select onSelect={this.setMainOutput} options={this.state.devices} value={'deviceId'} text={'label'}/>
				</div>
				<div className='row'>
					<label>Cue output</label>
					<Select onSelect={this.setCueOutput} options={this.state.devices} value={'deviceId'} text={'label'}/>
				</div>
			</div>
		);
	}
}

function loadDevices() {
	navigator.mediaDevices.enumerateDevices().then((devices) => {
		var audioOutputs = devices.filter(d => {
			return d.kind === 'audiooutput';
		})
		TrackActions.setDevices(audioOutputs);
	});
}

export default Settings;
