import Dispatcher from '../dispatcher/Dispatcher.js';

class Tracks {

	addTrack(track) {
		Dispatcher.dispatch({
			type: 'add_track',
			track: track 
		});
	}
}

const instance = new Tracks();

export default instance;
