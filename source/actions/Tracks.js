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

	trackReady(track){
		Dispatcher.dispatch({
			type: 'track_ready',
			track: track
		});
	}

}

const instance = new Tracks();

export default instance;
