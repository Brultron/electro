import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};
let rightTrack;
let leftTrack;
let crossfadeValue = 50;
let mainOutput;
let cueOutput;
let ytApiKey = 'AIzaSyBeCNyNTk9jpgXcPoColnQt-ZdqC802zcY';
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

	getMainOutput(){
		return mainOutput;
	}

	getCueOutput(){
		return cueOutput;
	}

	getYtApiKey(){
		return ytApiKey;
	}

	getDevices(){
		return devices;
	}

}

function setCrossfadeValue() {
	if (rightTrack) {
		rightTrack.channel.crossfade.gain.value = crossfadeValue / 100;
	}
	if (leftTrack) {
		leftTrack.channel.crossfade.gain.value = Math.abs(100 - crossfadeValue) / 100;
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
      if(rightTrack && action.track.id === rightTrack.id)
        rightTrack = undefined;
      if(leftTrack && action.track.id === leftTrack.id)
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
			instance.emitChange();
			break;
		case 'set_cue_output':
			cueOutput = action.deviceId;
			instance.emitChange();
			break;
		case 'set_devices':
			devices = action.devices;
			instance.emitChange();
			break;
		case 'set_yt_api_key':
			ytApiKey = action.key;
			instance.emitChange();
			break;
	}
});

export default instance;
