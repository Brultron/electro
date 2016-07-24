import BaseStore from './BaseStore.js';
import Dispatcher from '../dispatcher/Dispatcher.js';

let tracks = {};
let rightTrack;
let leftTrack;
let crossfadeValue = 50;

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

}

function setCrossfadeValue() {
	if (rightTrack) {
		rightTrack.channel.gain.gain.value = crossfadeValue / 100;
	}
	if (leftTrack) {
		leftTrack.channel.gain.gain.value = Math.abs(100 - crossfadeValue) / 100;
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
			// NOTE soft delete here... so we can reuse if needed
			// TODO should probably just delete the track and
			// free up the memory since there's not a way to reload the
			// track at the current moment
			tracks[action.track.id].removed = true;
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
	}
});

export default instance;
