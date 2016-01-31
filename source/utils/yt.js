import yt from 'youtube-audio-stream';
import ac from './ac.js';
import concat from 'array-buffer-concat';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';

//TODO should reuse buffers if they are there
class Yt {

	download(track) {
		var stream = yt(track.url);
		var master = new ArrayBuffer();

		stream.on('data', (data) => {
		  master = concat(master, data);
		});

		stream.on('end', (data) => {
				ac.createSource(master, track, (track) => {
					track.ready = true;
					TrackActions.updateTrack(track);
				});
		});
	}

}

let instance = new Yt();
export default instance;
