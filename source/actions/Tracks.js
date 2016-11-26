import Dispatcher from '../dispatcher/Dispatcher.js';
import yt from '../utils/yt.js';
import {
	ipcRenderer as ipc
} from 'electron';

class Tracks {

	constructor() {
		ipc.on('action', (event, action) => {
			Dispatcher.dispatch(action);
		});
	}

	addTrack(track) {
		yt.download(track);
		this.updateTrack(track.id, {search: false});
	}

	updateTrack(id, props) {
		Dispatcher.dispatch({
			type: 'update_track',
			id,
			props,
		});
	}

	removeTrack(track) {
		Dispatcher.dispatch({
			type: 'remove_track',
			track: track
		});
	}

	searchTracks(q) {
		Dispatcher.dispatch({
			type: 'clear_search'
		});
		yt.search(q);
	}

	getNextTracks() {
		yt.search();
	}

	setRightTrack(track) {
		Dispatcher.dispatch({
			type: 'set_right_track',
			track: track
		});
	}

	setLeftTrack(track) {
		Dispatcher.dispatch({
			type: 'set_left_track',
			track: track,
		});
	}

	setCrossfadeValue(value) {
		Dispatcher.dispatch({
			type: 'set_crossfade_value',
			value: value
		});
	}

	setMainOutput(deviceId) {
		var action = {
			type: 'set_main_output',
			deviceId: deviceId
		};
		ipc.send('action', action);
		Dispatcher.dispatch(action);
	}

	setCueOutput(deviceId) {
		var action = {
			type: 'set_cue_output',
			deviceId: deviceId
		};
		ipc.send('action', action);
		Dispatcher.dispatch(action);
	}

	setYtApiKey(key) {
		var action = {
			type: 'set_yt_api_key',
			key: key
		}
		ipc.send('action', action);
		Dispatcher.dispatch(action);
	}

	setFFMPegPath(path) {
		var action = {
			type: 'set_ff_mpeg_path',
			path:path
		}
		ipc.send('action', action);
		Dispatcher.dispatch(action);
	}

	setDevices(devices) {
		Dispatcher.dispatch({
			type: 'set_devices',
			devices: devices
		});
	}
}

const instance = new Tracks();

export default instance;
//7ee88594f8b500246054ec20cd85d918511f6d3d
