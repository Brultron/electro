import yt from 'youtube-audio-stream';
import ac from './ac.js';
import concat from 'array-buffer-concat';
import TrackActions from '../actions/Tracks.js';
import TrackStore from '../stores/Tracks.js';

//TODO should reuse buffers if they are there
const API_KEY = 'AIzaSyBeCNyNTk9jpgXcPoColnQt-ZdqC802zcY';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const DOWNLOAD_URL = 'https://www.youtube.com/watch?v=';
let params = {part: 'snippet', kind:'youtube#video', key: API_KEY, maxResults: 10}

class Yt {

	download(track) {
		var stream = yt(track.url);
		var master = new ArrayBuffer();

		stream.on('data', (data) => {
		  master = concat(master, data);
		});

		stream.on('end', (data) => {
				ac.createSource(master, track, (track) => {
					console.log('should be loaded');
					track.ready = true;
					TrackActions.updateTrack(track);
				});
		});
	}

	search(q){
		params.q = q;
		$.get(SEARCH_URL, params).then((resp) => {
			//TODO keep in here to check that we're not out of api calls
			console.log(resp);
			for(let t of resp.items){
				let track = {
					id: t.id.videoId,
					url: DOWNLOAD_URL + t.id.videoId,
					title: t.snippet.title,
					description: t.snippet.description,
					thumbnail: t.snippet.thumbnails.high.url,
					search: true
				};
				TrackActions.updateTrack(track)
			}
		});
	}

}

let instance = new Yt();
export default instance;
