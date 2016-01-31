import Dispatcher from '../dispatcher/Dispatcher.js';
import yt from '../utils/yt.js';

class Tracks {

	addTrack(track) {
		yt.download(track);
		Dispatcher.dispatch({
			type: 'update_track',
			track: track
		});
	}

	updateTrack(track){
		Dispatcher.dispatch({
			type: 'update_track',
			track: track
		});
	}

	removeTrack(track){
		Dispatcher.dispatch({
			type: 'remove_track',
			track: track
		});
	}



}

const instance = new Tracks();

export default instance;
