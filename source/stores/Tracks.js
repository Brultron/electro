import Config from 'configstore';
import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let conf = new Config('electro');
let tracks = {};
let rightTrack;
let leftTrack;
let crossfadeValue = 50;
let mainOutput = conf.get('main_output');
let cueOutput = conf.get('cue_output');
let ytApiKey = conf.get('yt_api_key');
let devices = [];

class Tracks extends BaseStore {

	getTracks() {
		return tracks;
	}

	getTrack(id) {
		return tracks[id];
	}

	getRightTrack() {
		return rightTrack;
	}

	getLeftTrack() {
		return leftTrack;
	}

	getCrossfadeValue() {
		return crossfadeValue;
	}

	getMainOutput() {
		return mainOutput;
	}

	getCueOutput() {
		return cueOutput;
	}

	getYtApiKey() {
		return ytApiKey;
	}

	getDevices() {
		return devices;
	}

}

function setCrossfadeValue() {

	var c = crossfadeValue / 100;
	var l = Math.cos(c * 0.5 * Math.PI);
 	var r = Math.cos((1.0 - c) * 0.5*Math.PI);
	if (rightTrack) {
		rightTrack.channel.crossfade.gain.value = r;
	}
	if (leftTrack) {
		leftTrack.channel.crossfade.gain.value = l;
	}
}

const instance = new Tracks();

instance.dispatchToken = Dispatcher.register(action => {
	switch (action.type) {
		case 'update_track':
			tracks[action.track.id] = action.track;
			instance.emitChange();
			break;
		case 'remove_track':
			delete tracks[action.track.id];
			if (rightTrack && action.track.id === rightTrack.id)
				rightTrack = undefined;
			if (leftTrack && action.track.id === leftTrack.id)
				leftTrack = undefined;
			instance.emitChange();
			break;
		case 'clear_search':
			for (let key in tracks) {
				if (tracks[key].search && !tracks[key].ready) {
					delete tracks[key];
				}
			}
			break;
		case 'set_right_track':
			rightTrack = action.track;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_left_track':
			leftTrack = action.track;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_crossfade_value':
			crossfadeValue = action.value;
			setCrossfadeValue();
			instance.emitChange();
			break;
		case 'set_main_output':
			mainOutput = action.deviceId;
			conf.set('main_output', mainOutput);
			instance.emitChange();
			break;
		case 'set_cue_output':
			cueOutput = action.deviceId;
			conf.set('cue_output', cueOutput);
			instance.emitChange();
			break;
		case 'set_devices':
			devices = action.devices;
			instance.emitChange();
			break;
		case 'set_yt_api_key':
			ytApiKey = action.key;
			conf.set('yt_api_key', ytApiKey);
			instance.emitChange();
			break;
	}
});

export default instance;
