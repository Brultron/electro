'use strict';

import React from 'react';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';
import Select from 'react-select';

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
		if (event.key === 'Enter') {
			TrackActions.setYtApiKey(event.target.value);
		}
	}

	render() {
		return (
			<div className='setting-container'>
				<h1>Settings</h1>
				<label>YouTube API key</label>
				<input type='text' onKeyUp={this.setYtApiKey} defaultValue={TrackStore.getYtApiKey()}/>
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
