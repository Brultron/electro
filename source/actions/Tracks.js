import Dispatcher from '../dispatcher/Dispatcher.js';
import yt from '../utils/yt.js';

class Tracks {

	addTrack(track) {
		yt.download(track);
		Dispatcher.dispatch({
			type: 'add_track',
			track: track
		});
	}

	trackUploaded(track){
		Dispatcher.dispatch({
			type: 'track_uploaded',
			track: track
		});
	}


	setActiveTrack(track){
		Dispatcher.dispatch({
			type: 'set_active_track',
			track: track
		});
	}

}

const instance = new Tracks();

export default instance;
