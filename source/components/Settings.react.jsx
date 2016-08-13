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

	setYtApiKey(event){
		if(event.key === 'Enter'){
			TrackActions.setYtApiKey(event.target.value);
		}
	}

	render() {
		return (
			<div className='setting-container'>
				<div>
					<h1>Settings</h1>
				</div>
				<div>
					<input onKeyUp={this.setYtApiKey} value={this.state.ytApiKey}/>
					<label>YouTube API key</label>
				</div>
				<label>Main Output</label>
				<Select
					options={this.state.devices}
					text='label'
					value='deviceId'
					selected={TrackStore.getMainOutput()}
					onSelect={this.setMainOutput}/>
				<label>Cue Output</label>
				<Select
					options={this.state.devices}
					text='label'
					value='deviceId'
					selected={TrackStore.getCueOutput()}
					onSelect={this.setCueOutput}/>
			</div>
		);
	}
}

function loadDevices() {
	navigator.mediaDevices.enumerateDevices().then((devices) => {
		var audioOutputs = devices.filter(d => {
			return d.kind === 'audiooutput'
		})
		TrackActions.setDevices(audioOutputs);
	});
}

export default Settings;
